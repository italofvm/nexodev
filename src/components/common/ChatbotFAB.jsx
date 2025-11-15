import { useState } from 'react';

const ChatbotFAB = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Olá! Sou a NexoAI. Como posso ajudar seu projeto hoje?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const newMessage = { text: input, sender: 'user' };
    const botResponseText = "Entendi. Um de nossos especialistas entrará em contato em breve para discutir sua necessidade.";

    setMessages((prev) => [...prev, newMessage]);
    setInput('');

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: botResponseText, sender: 'bot' }]);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-purple-600 rounded-full text-white shadow-2xl transition transform hover:scale-110 focus:outline-none"
        aria-label="Abrir Chatbot"
      >
        {isChatOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12.75l-1 1h4.75a.75.75 0 010 1.5H7.625l-1 1M18.5 12.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 21a9 9 0 100-18 9 9 0 000 18z" />
          </svg>
        )}
      </button>

      {isChatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-full max-w-xs h-96 bg-gray-900 rounded-xl shadow-3xl flex flex-col border border-gray-700 backdrop-blur-sm overflow-hidden">
          <div className="p-4 bg-purple-700 rounded-t-xl flex items-center justify-between">
            <h3 className="text-white font-semibold">NexoAI Assistente</h3>
            <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">Online</span>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-3 py-2 text-sm rounded-xl shadow-md ${
                  msg.sender === 'user' 
                    ? 'bg-purple-600 text-white rounded-br-none' 
                    : 'bg-gray-700 text-gray-200 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {messages.length % 2 !== 0 && input === '' && messages[messages.length - 1].sender === 'user' && (
              <div className="flex justify-start">
                <div className="max-w-[85%] px-3 py-2 text-sm rounded-xl shadow-md bg-gray-700 text-gray-200 rounded-tl-none">
                  <span className="animate-pulse">Digitando...</span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-800">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escreva sua mensagem..."
                className="flex-1 px-4 py-2 text-sm bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-r-lg transition"
                aria-label="Enviar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.874L5.999 12z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatbotFAB;
