import { useState } from 'react';

const ChatbotFAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Iframe do Chatbot - Aparece quando isOpen é true */}
      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '400px',
            height: '600px',
            zIndex: 1000,
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: 'white'
          }}
        >
          <iframe
            src="https://chatbot-nexo-dev.vercel.app/"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="microphone; geolocation"
            title="Chatbot Nexo"
            style={{ border: 'none', borderRadius: '16px' }}
          />
        </div>
      )}

      {/* Botão FAB (Floating Action Button) */}
      <button
        onClick={toggleChat}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#4F46E5',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(79, 70, 229, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          zIndex: 1001
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(79, 70, 229, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(79, 70, 229, 0.4)';
        }}
        aria-label={isOpen ? "Fechar chat" : "Abrir chat"}
      >
        {isOpen ? (
          // Ícone de X (fechar)
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          // Ícone de chat
          <svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>
    </>
  );
};

export default ChatbotFAB;
