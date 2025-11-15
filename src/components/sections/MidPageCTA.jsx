const MidPageCTA = ({ onNavigate }) => (
  <section className="py-20 bg-purple-700/20 my-16 rounded-xl mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 shadow-2xl backdrop-blur-sm border border-purple-800">
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Pronto para criar algo incrível?</h2>
      <p className="text-lg text-purple-200 mb-8 max-w-3xl mx-auto">
        Deixe de lado as soluções genéricas. Desenvolvemos software sob medida, rápido e focado em resultados reais.
      </p>
      <button 
        onClick={() => onNavigate('contact')}
        className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold px-8 py-3 rounded-xl transition transform hover:scale-105 shadow-2xl shadow-purple-900/50"
      >
        Solicitar Orçamento Gratuito
      </button>
    </div>
  </section>
);

export default MidPageCTA;
