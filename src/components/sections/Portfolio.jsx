import { PORTFOLIO_ITEMS } from '../../data/constants.jsx';

const CardContent = ({ item }) => (
  <>
    {/* Imagem de fundo */}
    {item.image && (
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
    )}

    {/* Gradiente de fallback se não houver imagem */}
    {!item.image && (
      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}></div>
    )}

    {/* Overlay com informações */}
    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
      <p className="text-sm text-gray-200">{item.subtitle}</p>
      {item.link && (
        <span className="text-xs text-purple-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          Ver projeto →
        </span>
      )}
    </div>
  </>
);

const PortfolioCard = ({ item }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      {item.link ? (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative h-64 rounded-xl overflow-hidden shadow-2xl transition duration-300 hover:scale-[1.02] cursor-pointer group"
        >
          <CardContent item={item} />
        </a>
      ) : (
        <div className="relative h-64 rounded-xl overflow-hidden shadow-2xl transition duration-300 hover:scale-[1.02] cursor-pointer group">
          <CardContent item={item} />
        </div>
      )}
    </div>
  );
};

const Portfolio = () => (
  <section id="projetos" className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-white mb-10">Portfólio em Destaque</h2>
      <div className="flex flex-wrap -m-4 justify-center">
        {PORTFOLIO_ITEMS.map((item, index) => (
          <PortfolioCard key={index} item={item} />
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
