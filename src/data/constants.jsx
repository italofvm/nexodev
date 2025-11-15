// src/data/constants.js

export const PORTFOLIO_ITEMS = [
  { title: "Projeto E-commerce Inovador", subtitle: "Beleza, Moda ou Restauração", gradient: "from-purple-600 to-pink-500" },
  { title: "Plataforma SaaS de Gestão", subtitle: "Web ou Desktop Apps", gradient: "from-gray-800 to-black" },
  { title: "Website Institucional Moderno", subtitle: "Nexo JS, Contentful, Gatsby", gradient: "from-teal-400 to-pink-400" },
];

export const TESTIMONIALS = [
  {
    quote: "A NexoDev transformou nossa presença online. O novo site não é apenas lindo, mas também incrivelmente rápido e funcional. Profissionais de primeira!",
    name: "Maria Silva",
    role: "CEO, novatech",
  },
  {
    quote: "O processo foi transparente e colaborativo. Eles realmente entenderam nossa visão e entregaram uma solução que superou as expectativas.",
    name: "João Pereira",
    role: "Diretor de Marketing, Soluções Criativas",
  },
];

export const PROCESS_STEPS = [
  { step: 1, title: "Descoberta e Estratégia", description: "Alinhamos objetivos, definimos o escopo e criamos wireframes para garantir a direção certa do projeto.", iconClass: "text-purple-400" },
  { step: 2, title: "Design UX/UI", description: "Desenvolvimento visual focado no usuário, criando interfaces modernas e funcionais para a melhor experiência.", iconClass: "text-teal-400" },
  { step: 3, title: "Desenvolvimento Ágil", description: "Construção do código em sprints curtas, com testes contínuos e total transparência no progresso.", iconClass: "text-pink-400" },
  { step: 4, title: "Lançamento e Otimização", description: "Deploy em ambientes de alta performance e monitoramento pós-lançamento para ajustes e melhorias contínuas.", iconClass: "text-yellow-400" },
];

export const TECH_STACK_DATA = [
  { name: "Vue.js", color: "text-green-500", icon: "V", reason: "Escolha principal para interfaces reativas e Single Page Applications (SPA) de alto desempenho." },
  { name: "React", color: "text-blue-400", icon: "R", reason: "Usado para bibliotecas de UI complexas e aplicativos com grande volume de dados." },
  { name: "Node.js", color: "text-green-700", icon: "N", reason: "A espinha dorsal do nosso backend, garantindo APIs rápidas e escaláveis com JavaScript." },
  { name: "Tailwind CSS", color: "text-teal-400", icon: "T", reason: "Utilizado para design rápido, responsivo e mantendo o código CSS limpo e modular." },
  { name: "TypeScript", color: "text-blue-500", icon: "TS", reason: "Essencial para prevenir erros em tempo de compilação, trazendo maior segurança e manutenibilidade." },
  { name: "Firebase/Supabase", color: "text-yellow-500", icon: "DB", reason: "Soluções BaaS para desenvolvimento e prototipagem ágil, ideal para MVPs." },
];

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/nexodev",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.251-4 0v5.604h-3v-11h3v1.765c1.395-2.585 7-2.764 7 2.456v6.779z"/>
      </svg>
    )
  },
  {
    name: "GitHub",
    url: "https://github.com/nexodev-agency",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.743.084-.728.084-.728 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.304.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.771-1.586 8.2-6.084 8.2-11.387c0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/nexodev",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.013 4.85.074 1.32.062 2.126.31 2.92.613.805.313 1.5.733 2.22 1.453s1.14 1.415 1.453 2.22c.303.794.551 1.6.613 2.92.061 1.266.074 1.646.074 4.85s-.013 3.584-.074 4.85c-.062 1.32-.31 2.126-.613 2.92-.313.805-.733 1.5-1.453 2.22s-1.415 1.14-2.22 1.453c-.794.303-1.6.551-2.92.613-1.266.061-1.646.074-4.85.074s-3.584-.013-4.85-.074c-1.32-.062-2.126-.31-2.92-.613-.805-.313-1.5-.733-2.22-1.453s-1.415-1.14-2.22-1.453c-.303-.794-.551-1.6-.613-2.92-.061-1.266-.074-1.646-.074-4.85s.013-3.584.074-4.85c.062-1.32.31-2.126.613-2.92.313-.805.733-1.5 1.453-2.22s1.415-1.14 2.22-1.453c.794-.303 1.6-.551 2.92-.613 1.266-.061 1.646-.074 4.85-.074zm0-2.163c-3.265 0-3.676.014-4.947.076-1.341.065-2.261.32-3.045.626-.826.326-1.558.756-2.285 1.483-1.385 1.385-1.815 3.061-1.928 4.793-.053.766-.072 1.394-.072 4.97s.019 4.204.072 4.97c.113 1.732.543 3.408 1.928 4.793 1.385 1.385 3.061 1.815 4.793 1.928.766.053 1.394.072 4.97.072s4.204-.019 4.97-.072c1.732-.113 3.408-.543 4.793-1.928 1.385-1.385 1.815-3.061 1.928-4.793.053-.766.072-1.394.072-4.97s-.019-4.204-.072-4.97c-.113-1.732-.543-3.408-1.928-4.793-1.385-1.385-3.061-1.815-4.793-1.928-.766-.053-1.394-.072-4.97-.072zM12 4.25c-3.723 0-6.75 3.027-6.75 6.75s3.027 6.75 6.75 6.75 6.75-3.027 6.75-6.75-3.027-6.75-6.75-6.75zm0 11.25c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5zm8.5-12.25c0 .711-.577 1.288-1.288 1.288s-1.288-.577-1.288-1.288c0-.711.577-1.288 1.288-1.288s1.288.577 1.288 1.288z"/>
      </svg>
    )
  },
];

export const PRIVACY_CONTENT_JSX = {
  title: "Política de Privacidade da NexoDev",
  body: (
    <div className="text-gray-300 space-y-4">
      <p className="text-sm text-gray-400">**Última atualização: 15 de Novembro de 2025**</p>
      <p>A NexoDev ("Nós", "Nosso") valoriza a privacidade dos seus usuários. Esta Política descreve como coletamos, usamos e protegemos as informações.</p>
      <h3 className="text-xl font-semibold text-white mt-6 mb-2">1. Informações que Coletamos</h3>
      <p>Coletamos Nome completo, Endereço de e-mail e Detalhes do projeto fornecidos por você no formulário de contato.</p>
      <h4 className="text-lg font-medium text-purple-400 mt-4 mb-1">1.2 Dados de Uso e Navegação</h4>
      <p className="text-sm text-gray-400">Coletamos automaticamente Endereço IP, Tipo de navegador, e Páginas visitadas via cookies.</p>
      <h3 className="text-xl font-semibold text-white mt-6 mb-2">2. Uso das Informações</h3>
      <p>Usamos as informações para **Comunicação**, **Melhoria do Serviço** e **Segurança**.</p>
    </div>
  )
};

export const TERMS_CONTENT_JSX = {
  title: "Termos de Serviço da NexoDev",
  body: (
    <div className="text-gray-300 space-y-4">
      <p className="text-sm text-gray-400">**Última atualização: 15 de Novembro de 2025**</p>
      <p>Estes Termos de Serviço regem o uso do website e os serviços de desenvolvimento. Ao usar nossos serviços, você concorda com estes Termos.</p>
      <h3 className="text-xl font-semibold text-white mt-6 mb-2">2. Serviços da NexoDev</h3>
      <p className="text-sm text-gray-400">Os serviços são regidos por um **Contrato de Prestação de Serviços separado e detalhado**.</p>
      <h4 className="text-lg font-medium text-purple-400 mt-4 mb-1">4. Propriedade Intelectual</h4>
      <p className="text-sm text-gray-400">A propriedade intelectual do **código-fonte e design final** é transferida ao Cliente após o pagamento integral.</p>
    </div>
  )
};