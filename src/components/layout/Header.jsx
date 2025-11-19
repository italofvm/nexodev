import { useState } from 'react';
import NexoDevLogo from '../common/NexoDevLogo.jsx';

const Header = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollTo = (sectionId) => {
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleMobileNavigate = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-black/50 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="text-xl font-bold text-white flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
          <NexoDevLogo /> <span className="ml-2">NexoDev</span>
        </div>

        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <button onClick={() => handleScrollTo('servicos')} className="hover:text-purple-400 transition cursor-pointer">Serviços</button>
          <button onClick={() => handleScrollTo('sobre')} className="hover:text-purple-400 transition cursor-pointer">Sobre</button>
          <button onClick={() => handleScrollTo('processo')} className="hover:text-purple-400 transition cursor-pointer">Processo</button>
          <button onClick={() => handleScrollTo('projetos')} className="hover:text-purple-400 transition cursor-pointer">Projetos</button>
          <button onClick={() => handleScrollTo('depoimentos')} className="hover:text-purple-400 transition cursor-pointer">Depoimentos</button>
          <button onClick={() => onNavigate('contact')} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition shadow-xl cursor-pointer">
            Fale Conosco
          </button>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none p-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      } bg-gray-900/95 backdrop-blur-md pb-0`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          <button onClick={() => handleScrollTo('servicos')} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-center cursor-pointer">
            Serviços
          </button>
          <button onClick={() => handleScrollTo('sobre')} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-center cursor-pointer">
            Sobre
          </button>
          <button onClick={() => handleScrollTo('processo')} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-center cursor-pointer">
            Processo
          </button>
          <button onClick={() => handleScrollTo('projetos')} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-center cursor-pointer">
            Projetos
          </button>
          <button onClick={() => handleScrollTo('depoimentos')} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-center cursor-pointer">
            Depoimentos
          </button>
          <button onClick={() => handleMobileNavigate('contact')} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 mt-2 rounded-lg transition shadow-xl w-full text-center font-medium cursor-pointer">
            Fale Conosco
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
