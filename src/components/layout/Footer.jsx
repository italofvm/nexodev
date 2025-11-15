import NexoDevLogo from '../common/NexoDevLogo.jsx';
import { SOCIAL_LINKS } from '../../data/constants.jsx';

const Footer = ({ openModal }) => {
  const handleFooterLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 mt-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Coluna 1: Logo, Descrição E Redes Sociais */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-xl font-bold text-white flex items-center mb-3">
              <NexoDevLogo />
              <span className="ml-2">NexoDev</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Construindo o futuro digital, um projeto de cada vez. Performance e design sob medida.
            </p>
            {/* Redes Sociais */}
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-gray-400 hover:text-purple-400 transition w-6 h-6"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2: Serviços */}
          <div>
            <h4 className="text-md font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleFooterLinkClick('servicos')} className="text-sm text-gray-400 hover:text-purple-400 transition">
                  Desenvolvimento Web
                </button>
              </li>
              <li>
                <button onClick={() => handleFooterLinkClick('servicos')} className="text-sm text-gray-400 hover:text-purple-400 transition">
                  Design UX/UI
                </button>
              </li>
              <li>
                <button onClick={() => handleFooterLinkClick('servicos')} className="text-sm text-gray-400 hover:text-purple-400 transition">
                  Suporte Mensal
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Links Úteis */}
          <div>
            <h4 className="text-md font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleFooterLinkClick('sobre')} className="text-sm text-gray-400 hover:text-purple-400 transition">
                  Sobre Nós
                </button>
              </li>
              <li>
                <button onClick={() => handleFooterLinkClick('processo')} className="text-sm text-gray-400 hover:text-purple-400 transition">
                  Processo Ágil
                </button>
              </li>
              <li>
                <button onClick={() => handleFooterLinkClick('projetos')} className="text-sm text-gray-400 hover:text-purple-400 transition">
                  Portfólio
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Legal & Contato - Chamadas para o Modal */}
          <div>
            <h4 className="text-md font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => openModal('privacy')} className="text-sm text-gray-400 hover:text-purple-400 transition">
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button onClick={() => openModal('terms')} className="text-sm text-gray-400 hover:text-purple-400 transition">
                  Termos de Serviço
                </button>
              </li>
              <li>
                <p className="text-sm text-purple-400 mt-4">contato@nexodev.com</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-600">
            © 2024 NexoDev. Todos os direitos reservados. Feito com paixão pelo código.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
