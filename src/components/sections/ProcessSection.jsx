import { PROCESS_STEPS } from '../../data/constants.jsx';

const ProcessSection = () => (
  <section id="processo" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-white mb-4">Nosso Processo de Trabalho</h2>
      <p className="text-lg text-gray-400 text-center mb-16 max-w-3xl mx-auto">
        Trabalhamos de forma transparente e colaborativa, garantindo que você esteja envolvido em cada etapa da criação do seu produto.
      </p>
      <div className="relative">
        {/* Linha de Conexão Horizontal (apenas para desktop) */}
        <div className="hidden md:block absolute top-[28%] left-[10%] right-[10%] h-0.5 bg-gray-800 transform -translate-y-1/2"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-stretch">
          {PROCESS_STEPS.map((step, index) => (
            <div key={step.step} className="w-full md:w-1/4 flex flex-col items-center text-center p-4 relative mb-12 md:mb-0">
              {/* Círculo do Passo */}
              <div className="w-16 h-16 rounded-full bg-gray-900 border-4 border-gray-700 flex items-center justify-center mb-6 z-10 shadow-lg">
                <span className={`text-2xl font-extrabold ${step.iconClass}`}>{step.step}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm md:px-4">{step.description}</p>
              
              {/* Linha de Conexão Vertical (apenas para mobile) */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="md:hidden absolute bottom-0 h-1/2 w-0.5 bg-gray-800 z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
