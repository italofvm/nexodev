import { useState, useRef, useEffect } from 'react';
import useChatbot from '../../hooks/useChatbot';
import { SOCIAL_LINKS, QUICK_OPTIONS } from '../../utils/chatbotConstants';

/**
 * Componente de interface do chatbot
 * @param {Object} props
 * @param {boolean} props.isOpen - Se o chatbot está aberto
 * @param {Function} props.onClose - Callback para fechar o chatbot
 */
const ChatbotInterface = ({ isOpen, onClose }) => {
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const {
        messages,
        isTyping,
        showTransferOptions,
        sendMessage,
        resetChat,
        hideTransferOptions,
        isServiceAvailable,
    } = useChatbot(onClose);

    // Auto-scroll para a última mensagem
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    // Foca no input quando abre
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    /**
     * Manipula envio de mensagem
     */
    const handleSendMessage = async (e) => {
        e?.preventDefault();

        if (!inputMessage.trim()) return;

        const message = inputMessage;
        setInputMessage('');
        await sendMessage(message);
    };

    /**
     * Manipula clique em opção rápida
     */
    const handleQuickOptionClick = async (text) => {
        await sendMessage(text);
    };

    /**
     * Manipula tecla Enter
     */
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    /**
     * Manipula transferência para WhatsApp
     */
    const handleWhatsAppTransfer = () => {
        window.open(SOCIAL_LINKS.whatsapp, '_blank', 'noopener,noreferrer');
        hideTransferOptions();
    };

    /**
     * Manipula transferência para Instagram
     */
    const handleInstagramTransfer = () => {
        window.open(SOCIAL_LINKS.instagram, '_blank', 'noopener,noreferrer');
        hideTransferOptions();
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed bottom-24 right-5 w-[380px] h-[600px] bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 flex flex-col overflow-hidden z-[999] animate-slideUp"
            style={{
                animation: 'slideUp 0.3s ease-out',
            }}
        >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-lg">N</span>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold">NexoDev</h3>
                        <p className="text-purple-100 text-xs">
                            {isServiceAvailable ? 'Online' : 'Modo Limitado'}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={resetChat}
                        className="text-white/80 hover:text-white transition p-1 rounded-full hover:bg-white/10"
                        aria-label="Reiniciar chat"
                        title="Reiniciar conversa"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={onClose}
                        className="text-white/80 hover:text-white transition p-1 rounded-full hover:bg-white/10"
                        aria-label="Fechar chat"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-950">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
                    >
                        <div
                            className={`max-w-[80%] rounded-2xl px-4 py-2 ${message.sender === 'user'
                                ? 'bg-purple-600 text-white rounded-br-sm'
                                : 'bg-gray-800 text-gray-100 rounded-bl-sm'
                                }`}
                        >
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                            <span className="text-xs opacity-70 mt-1 block">
                                {message.timestamp.toLocaleTimeString('pt-BR', {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </span>
                        </div>
                    </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                    <div className="flex justify-start animate-fadeIn">
                        <div className="bg-gray-800 text-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[80%]">
                            <div className="flex gap-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Transfer Options */}
                {showTransferOptions && (
                    <div className="flex justify-start animate-fadeIn">
                        <div className="bg-gray-800 rounded-2xl p-4 max-w-[90%] border border-purple-500/30">
                            <p className="text-sm text-gray-300 mb-3">Fale diretamente com nossa equipe:</p>
                            <div className="flex gap-2">
                                <button
                                    onClick={handleWhatsAppTransfer}
                                    className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-3 py-2 rounded-lg transition flex items-center justify-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    WhatsApp
                                </button>
                                <button
                                    onClick={handleInstagramTransfer}
                                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm font-medium px-3 py-2 rounded-lg transition flex items-center justify-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                    Instagram
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Quick Options */}
            {!isTyping && isServiceAvailable && (
                <div className="px-4 py-2 bg-gray-900 border-t border-gray-800 flex gap-2 overflow-x-auto no-scrollbar">
                    {QUICK_OPTIONS.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => handleQuickOptionClick(option.text)}
                            className="whitespace-nowrap bg-gray-800 hover:bg-purple-600/20 hover:text-purple-400 text-gray-300 text-xs px-3 py-1.5 rounded-full border border-gray-700 transition-colors"
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-gray-900 border-t border-gray-800">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Digite sua mensagem..."
                        className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500 transition text-sm"
                        disabled={isTyping}
                    />
                    <button
                        type="submit"
                        disabled={!inputMessage.trim() || isTyping}
                        className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white p-2 rounded-lg transition"
                        aria-label="Enviar mensagem"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                        </svg>
                    </button>
                </form>
            </div>

            {/* Animações CSS inline */}
            <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in;
        }
      `}</style>
        </div>
    );
};

export default ChatbotInterface;
