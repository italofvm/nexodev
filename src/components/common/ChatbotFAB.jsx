import { useState } from 'react';
import ChatbotInterface from './ChatbotInterface';

/**
 * Floating Action Button (FAB) do Chatbot
 * Componente responsável por exibir o botão flutuante e controlar
 * a abertura/fechamento da interface do chatbot
 */
const ChatbotFAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Alterna o estado de abertura do chatbot
   */
  const toggleChat = () => {
    setIsOpen(prevState => !prevState);
  };

  /**
   * Fecha o chatbot
   */
  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Interface do Chatbot */}
      <ChatbotInterface isOpen={isOpen} onClose={closeChat} />

      {/* Botão FAB */}
      <button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-[1000] transform hover:scale-110"
        aria-label={isOpen ? 'Fechar chat' : 'Abrir chat'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          // Ícone X (fechar)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Ícone chat
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>
    </>
  );
};

export default ChatbotFAB;

