import { useState } from 'react';
import { SOCIAL_LINKS } from '../data/constants.jsx';

const ContactPage = ({ onBackToHome }) => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-[80vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center">Fale Conosco</h1>
        <p className="text-lg text-gray-400 mb-12 text-center">
          Pronto para começar seu projeto? Entre em contato e vamos discutir suas ideias.
        </p>

        <div className="bg-gray-900 p-8 md:p-12 rounded-xl shadow-2xl border border-gray-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 transition"
                placeholder="Seu nome"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 transition"
                placeholder="seu@email.com"
              />
            </div>

            {/* Mensagem */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Sua Mensagem / Descrição do Projeto
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white resize-none placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 transition"
                placeholder="Gostaria de um orçamento para..."
              ></textarea>
            </div>

            {/* Status Message */}
            {status === 'success' && (
              <div className="p-4 bg-green-900/50 border border-green-700 text-green-300 rounded-lg text-center font-medium">
                Mensagem enviada com sucesso! Em breve entraremos em contato.
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold px-8 py-3 rounded-xl transition transform hover:scale-[1.01] shadow-xl shadow-purple-900/50"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>

          <div className="mt-10 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-400 mb-4">Ou siga-nos e entre em contato pelas redes sociais:</p>
            {/* Redes Sociais na Página de Contato */}
            <div className="flex justify-center space-x-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-gray-400 hover:text-purple-400 transition w-8 h-8"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <button onClick={onBackToHome} className="text-purple-400 hover:text-purple-300 transition text-sm">
            &larr; Voltar para a Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
