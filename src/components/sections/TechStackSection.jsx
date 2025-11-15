import { TECH_STACK_DATA } from '../../data/constants.jsx';

const TechStackSection = () => (
  <section className="py-20 bg-gray-900/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-white mb-4">Nossa Tecnologia e Porquê</h2>
      <p className="text-lg text-gray-400 text-center mb-12 max-w-4xl mx-auto">
        Construímos com ferramentas modernas e robustas. Cada tecnologia é escolhida estrategicamente para garantir performance, escalabilidade e segurança.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TECH_STACK_DATA.map((tech) => (
          <div key={tech.name} className="p-6 bg-gray-900 rounded-xl shadow-2xl border border-gray-800 hover:border-teal-500 transition duration-300">
            <div className="flex items-center mb-4">
              <div className={`w-12 h-12 flex items-center justify-center font-bold text-xl rounded-lg bg-gray-800 border ${tech.color} border-current mr-4`}>
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
            </div>
            <p className="text-gray-400 text-sm">{tech.reason}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
