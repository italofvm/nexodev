import { PORTFOLIO_ITEMS } from '../../data/constants.jsx';

const PortfolioCard = ({ item }) => (
  <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
    <div className={`relative h-64 rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br ${item.gradient} transition duration-300 hover:scale-[1.02] cursor-pointer`}>
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-black/20 hover:bg-black/10 transition">
        <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
        <p className="text-sm text-gray-200">{item.subtitle}</p>
      </div>
    </div>
  </div>
);

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
