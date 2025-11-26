import { SERVICES_DATA } from '../../data/constants.jsx';

/**
 * Componente de seção de serviços
 * Exibe os serviços oferecidos pela NexoDev em um grid responsivo
 * @param {Object} props
 * @param {Function} props.onNavigate - Função para navegar entre páginas
 */
const Services = ({ onNavigate }) => (
  <section id="servicos" className="py-20 bg-gray-900/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-white mb-4">Nossas Especialidades</h2>
      <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">
        Oferecemos um conjunto completo de serviços para garantir o sucesso do seu produto digital, desde a ideia até o lançamento.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES_DATA.map((service, index) => (
          <article key={index} className="p-4">
            <div className="bg-gray-900 p-8 rounded-xl shadow-2xl h-full border border-gray-800 hover:border-purple-600 transition duration-300 flex flex-col items-start">
              {service.icon}
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className={`text-gray-400 ${service.isCta ? 'mb-4' : ''}`}>{service.description}</p>
              {service.isCta && (
                <button
                  onClick={() => onNavigate('contact')}
                  className="mt-auto bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-500/20 transition cursor-pointer"
                  aria-label="Solicitar suporte mensal"
                >
                  Solicitar Suporte Mensal
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

