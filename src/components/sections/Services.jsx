const SERVICES_DATA = [
  {
    title: "Desenvolvimento Web Personalizado",
    description: "Criamos aplicações escaláveis e de alta performance usando as tecnologias mais modernas (Vue, React, Node).",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-400 mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-2.25M15 15h3m-12 0h6m-9-1.5h18A2.25 2.25 0 0 0 21.75 12V6a2.25 2.25 0 0 0-2.25-2.25H4.5A2.25 2.25 0 0 0 2.25 6v6a2.25 2.25 0 0 0 2.25 2.25Zm0 0h18" />
      </svg>
    ),
    isCta: false,
  },
  {
    title: "Design UX/UI Estratégico",
    description: "Desenvolvemos interfaces focadas na experiência do usuário, garantindo usabilidade e conversão.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-teal-400 mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.008c0 .879.515 1.408 1.446 1.408h3.148c.93 0 1.446-.529 1.446-1.408v-1.008c0-.879-.515-1.408-1.446-1.408H10.446c-.93 0-1.446.529-1.446 1.408ZM12 7.5l.45 1.5H16.5L12 7.5ZM12 7.5L7.5 9h4.05L12 7.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 12v3M5.25 15v-3M9.75 12h-.75M13.5 12h-.75M17.25 12h-.75M19.125 12v3M20.625 12v3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.75V15c0 1.657-1.343 3-3 3H6c-1.657 0-3-1.343-3-3v-2.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      </svg>
    ),
    isCta: false,
  },
  {
    title: "Otimização de Performance (SEO/Velocidade)",
    description: "Garantimos que seu site carregue rápido e esteja otimizado para os motores de busca, melhorando seu ranking.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-pink-400 mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5h16.5M10.5 21l-7.5-7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l7.5 7.5M10.5 21h3M13.5 21v-7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 13.5H3.75V3h16.5v10.5Z" />
      </svg>
    ),
    isCta: false,
  },
  {
    title: "Suporte e Manutenção Contínua",
    description: "Planos mensais que garantem a segurança, performance e atualizações do seu software após o lançamento.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-yellow-400 mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M4.5 6h4.5m0 0v12h4.5M6 10.5v12m9.75-9.75l-3 3-3-3" />
      </svg>
    ),
    isCta: true,
  },
];

const Services = ({ onNavigate }) => (
  <section id="servicos" className="py-20 bg-gray-900/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-white mb-4">Nossas Especialidades</h2>
      <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">
        Oferecemos um conjunto completo de serviços para garantir o sucesso do seu produto digital, desde a ideia até o lançamento.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES_DATA.map((service, index) => (
          <div key={index} className="p-4">
            <div className="bg-gray-900 p-8 rounded-xl shadow-2xl h-full border border-gray-800 hover:border-purple-600 transition duration-300 flex flex-col items-start">
              {service.icon}
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className={`text-gray-400 ${service.isCta ? 'mb-4' : ''}`}>{service.description}</p>
              {service.isCta && (
                <button
                  onClick={() => onNavigate('contact')}
                  className="mt-auto bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-500/20 transition"
                >
                  Solicitar Suporte Mensal
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
