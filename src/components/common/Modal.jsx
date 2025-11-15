const Modal = ({ title, content, onClose }) => {
  if (!content || !title) return null;

  const handleClose = () => {
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" 
      onClick={handleClose}
    >
      <div 
        className="bg-gray-900 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-3xl border border-gray-700 transform transition-all duration-300 scale-100 opacity-100" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8">
          {/* Header do Modal */}
          <div className="flex justify-between items-start border-b border-gray-800 pb-4 mb-6">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-white transition p-1 rounded-full hover:bg-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Corpo do Conteúdo */}
          <div className="prose prose-invert max-w-none">
            {content}
          </div>

          {/* Footer Simples */}
          <div className="mt-8 pt-4 border-t border-gray-800 text-right">
            <button 
              onClick={handleClose}
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-lg transition"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
