import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_CONFIG, SYSTEM_PROMPT, CHATBOT_MESSAGES } from '../utils/chatbotConstants';

/**
 * Serviço para integração com Google Gemini AI
 */
class GeminiService {
    constructor() {
        this.apiKey = import.meta.env.VITE_GEMINI_API_TOKEN;
        this.genAI = null;
        this.model = null;
        this.chat = null;

        this.initialize();
    }

    /**
     * Inicializa o cliente Gemini
     */
    initialize() {
        if (!this.apiKey) {
            console.warn('VITE_GEMINI_API_TOKEN não encontrada. Chatbot funcionará em modo limitado.');
            return;
        }

        try {
            this.genAI = new GoogleGenerativeAI(this.apiKey);
            this.model = this.genAI.getGenerativeModel({
                model: GEMINI_CONFIG.model,
                generationConfig: GEMINI_CONFIG.generationConfig,
                safetySettings: GEMINI_CONFIG.safetySettings,
            });
        } catch (error) {
            console.error('Erro ao inicializar Gemini:', error);
        }
    }

    /**
     * Inicia uma nova sessão de chat
     */
    startChat() {
        if (!this.model) {
            throw new Error('Gemini não inicializado');
        }

        this.chat = this.model.startChat({
            history: [
                {
                    role: 'user',
                    parts: [{ text: SYSTEM_PROMPT }],
                },
                {
                    role: 'model',
                    parts: [{ text: 'Entendido! Estou pronto para ajudar como assistente virtual da NexoDev.' }],
                },
            ],
        });
    }

    /**
     * Envia uma mensagem e recebe resposta
     * @param {string} message - Mensagem do usuário
     * @returns {Promise<string>} - Resposta do chatbot
     */
    /**
     * Envia uma mensagem e recebe resposta com retry automático
     * @param {string} message - Mensagem do usuário
     * @param {number} retries - Número de tentativas restantes
     * @returns {Promise<string>} - Resposta do chatbot
     */
    async sendMessage(message, retries = 3) {
        if (!this.apiKey) {
            return CHATBOT_MESSAGES.NO_API_KEY;
        }

        if (!this.chat) {
            this.startChat();
        }

        try {
            const result = await this.chat.sendMessage(message);
            const response = result.response;
            const text = response.text();

            return text;
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);

            // Se for erro de rate limit (429) ou quota, tenta novamente
            if (retries > 0 && (error.message?.includes('429') || error.message?.includes('quota') || error.message?.includes('rate'))) {
                console.log(`Tentando novamente... (${retries} tentativas restantes)`);
                // Espera exponencial: 1s, 2s, 4s
                const delay = Math.pow(2, 3 - retries) * 1000;
                await new Promise(resolve => setTimeout(resolve, delay));
                return this.sendMessage(message, retries - 1);
            }

            // Se for erro de rate limit e acabaram as tentativas
            if (error.message?.includes('quota') || error.message?.includes('rate')) {
                return 'Estou recebendo muitas mensagens no momento. Por favor, aguarde alguns segundos e tente novamente.';
            }

            return CHATBOT_MESSAGES.ERROR;
        }
    }

    /**
     * Reseta a sessão de chat
     */
    resetChat() {
        this.chat = null;
    }

    /**
     * Verifica se o serviço está disponível
     * @returns {boolean}
     */
    isAvailable() {
        return !!this.apiKey && !!this.model;
    }
}

// Exporta instância singleton
export default new GeminiService();
