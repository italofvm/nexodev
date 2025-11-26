import { useState, useCallback, useRef, useEffect } from 'react';
import geminiService from '../services/geminiService';
import { CHATBOT_MESSAGES, isComplexQuery, getGreeting } from '../utils/chatbotConstants';

// Tempo de inatividade em milissegundos (30 minutos)
const INACTIVITY_TIMEOUT = 30 * 60 * 1000;

/**
 * Hook customizado para gerenciar lógica do chatbot
 * @param {Function} onAutoClose - Callback chamado quando o chat fecha automaticamente por inatividade
 * @returns {Object} Estado e funções do chatbot
 */
const useChatbot = (onAutoClose) => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: `${getGreeting()}! ${CHATBOT_MESSAGES.WELCOME}`,
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const [showTransferOptions, setShowTransferOptions] = useState(false);
    const messageIdCounter = useRef(2);
    const inactivityTimerRef = useRef(null);

    const onAutoCloseRef = useRef(onAutoClose);

    useEffect(() => {
        onAutoCloseRef.current = onAutoClose;
    }, [onAutoClose]);

    /**
     * Reseta o timer de inatividade
     */
    const resetInactivityTimer = useCallback(() => {
        // Limpa o timer anterior se existir
        if (inactivityTimerRef.current) {
            clearTimeout(inactivityTimerRef.current);
        }

        // Cria novo timer
        inactivityTimerRef.current = setTimeout(() => {
            // Fecha o chat e limpa as mensagens após 30 minutos
            if (onAutoCloseRef.current && typeof onAutoCloseRef.current === 'function') {
                onAutoCloseRef.current();
            }

            // Reseta o estado
            setMessages([
                {
                    id: 1,
                    text: `${getGreeting()}! ${CHATBOT_MESSAGES.WELCOME}`,
                    sender: 'bot',
                    timestamp: new Date(),
                },
            ]);
            setShowTransferOptions(false);
            messageIdCounter.current = 2;
            geminiService.resetChat();

            if (geminiService.isAvailable()) {
                geminiService.startChat();
            }
        }, INACTIVITY_TIMEOUT);
    }, []);

    // Inicializa o chat e o timer quando o componente monta
    useEffect(() => {
        if (geminiService.isAvailable()) {
            geminiService.startChat();
        }

        // Inicia o timer de inatividade
        resetInactivityTimer();

        // Limpa o timer quando o componente desmonta
        return () => {
            if (inactivityTimerRef.current) {
                clearTimeout(inactivityTimerRef.current);
            }
        };
    }, [resetInactivityTimer]);

    /**
     * Adiciona uma nova mensagem ao histórico
     */
    const addMessage = useCallback((text, sender = 'user') => {
        const newMessage = {
            id: messageIdCounter.current++,
            text,
            sender,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, newMessage]);
        return newMessage;
    }, []);

    /**
     * Envia mensagem do usuário e processa resposta
     */
    const sendMessage = useCallback(async (userMessage) => {
        if (!userMessage.trim()) return;

        // Reseta o timer de inatividade a cada mensagem enviada
        resetInactivityTimer();

        // Adiciona mensagem do usuário
        addMessage(userMessage, 'user');

        // Verifica se é uma pergunta complexa
        const isComplex = isComplexQuery(userMessage);

        // Mostra indicador de digitação
        setIsTyping(true);

        try {
            // Envia mensagem para o Gemini
            const botResponse = await geminiService.sendMessage(userMessage);

            // Remove indicador de digitação
            setIsTyping(false);

            // Adiciona resposta do bot
            addMessage(botResponse, 'bot');

            // Se for complexa, mostra opções de transferência
            if (isComplex) {
                setTimeout(() => {
                    addMessage(CHATBOT_MESSAGES.TRANSFER_SUGGESTION, 'bot');
                    setShowTransferOptions(true);
                }, 1000);
            }
        } catch {
            setIsTyping(false);
            addMessage(CHATBOT_MESSAGES.ERROR, 'bot');
        }
    }, [addMessage, resetInactivityTimer]);

    /**
     * Reseta o chat para o estado inicial
     */
    const resetChat = useCallback(() => {
        setMessages([
            {
                id: 1,
                text: `${getGreeting()}! ${CHATBOT_MESSAGES.WELCOME}`,
                sender: 'bot',
                timestamp: new Date(),
            },
        ]);
        setShowTransferOptions(false);
        messageIdCounter.current = 2;
        geminiService.resetChat();

        if (geminiService.isAvailable()) {
            geminiService.startChat();
        }

        // Reseta o timer de inatividade ao resetar o chat
        resetInactivityTimer();
    }, [resetInactivityTimer]);

    /**
     * Oculta opções de transferência
     */
    const hideTransferOptions = useCallback(() => {
        setShowTransferOptions(false);
        // Reseta o timer ao interagir com as opções de transferência
        resetInactivityTimer();
    }, [resetInactivityTimer]);

    return {
        messages,
        isTyping,
        showTransferOptions,
        sendMessage,
        resetChat,
        hideTransferOptions,
        isServiceAvailable: geminiService.isAvailable(),
    };
};

export default useChatbot;
