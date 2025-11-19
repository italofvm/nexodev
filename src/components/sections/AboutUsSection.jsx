const AboutUsSection = () => (
  <section id="sobre" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Imagem/Icone Lado Esquerdo (Mockup) */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="relative w-80 h-80 bg-purple-700/20 rounded-full flex items-center justify-center p-4 shadow-2xl">
            <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center border-4 border-purple-500/50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-purple-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 00-7.538-4.583M12 21a9 9 0 01-7.538-4.583M12 21v-4.668M12 21l-2.455-2.455M12 21l2.455-2.455M15.75 9c0 2.25-2.25 4.5-5.25 4.5S6 11.25 6 9m1.5-2.25c0-2.25 2.25-4.5 5.25-4.5s5.25 2.25 5.25 4.5" />
              </svg>
            </div>
            <div className="absolute -bottom-2 -right-4 p-3 bg-teal-500 rounded-full text-white shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Conteúdo Lado Direito */}
        <div className="w-full md:w-1/2">
          <span className="text-sm font-semibold text-purple-500 uppercase tracking-wider mb-2 block">Nossa Missão</span>
          <h2 className="text-3xl font-bold text-white mb-6">Por trás do código, há pessoas e resultados.</h2>
          <p className="text-lg text-gray-400 mb-6">
            A NexoDev nasceu da crença de que a tecnologia deve ser uma <strong>ferramenta de crescimento</strong>, e não um obstáculo. Nossa filosofia é simples: combinar design de ponta com engenharia robusta.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-3 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <strong>Foco no Valor:</strong> &nbsp;Cada linha de código deve gerar retorno para o seu negócio.
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-3 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <strong>Transparência Total:</strong>&nbsp; Você acompanha o projeto em tempo real.
            </li>
          </ul>
          <button 
            onClick={() => document.getElementById('processo').scrollIntoView({ behavior: 'smooth' })}
            className="mt-8 text-sm font-medium text-purple-400 hover:text-purple-300 transition flex items-center cursor-pointer"
          >
            Conheça Nosso Processo
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUsSection;
