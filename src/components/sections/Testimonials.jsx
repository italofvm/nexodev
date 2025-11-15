import { TESTIMONIALS } from '../../data/constants.jsx';

const TestimonialCard = ({ testimonial }) => (
  <div className="w-full md:w-1/2 p-4">
    <div className="bg-gray-800 p-8 rounded-xl shadow-2xl h-full flex flex-col justify-between border border-gray-700 hover:border-purple-500 transition duration-300">
      <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
      <div>
        <p className="text-purple-400 font-semibold text-lg">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <section id="depoimentos" className="py-16">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-center text-white mb-10">O que nossos clientes dizem</h2>
      <div className="flex flex-wrap -m-4">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
