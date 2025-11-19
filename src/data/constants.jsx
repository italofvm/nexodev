// src/data/constants.js

export const PORTFOLIO_ITEMS = [
  { 
    title: "Belas Hair - Salão de Beleza", 
    subtitle: "Website Institucional | Agendamento Online", 
    gradient: "from-pink-500 to-rose-600",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
    link: "https://web.application.stitch.tech/projects/389281236264022000"
  },
  { 
    title: "Projeto E-commerce Inovador", 
    subtitle: "Beleza, Moda ou Restauração", 
    gradient: "from-purple-600 to-pink-500",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"
  },
  { 
    title: "Plataforma SaaS de Gestão", 
    subtitle: "Web ou Desktop Apps", 
    gradient: "from-gray-800 to-black",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
  { 
    title: "Website Institucional Moderno", 
    subtitle: "Nexo JS, Contentful, Gatsby", 
    gradient: "from-teal-400 to-pink-400",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop"
  },
];

export const TESTIMONIALS = [
  {
        quote: "O sistema de agendamento que a NexoDev construiu aumentou a nossa eficiência em 50% e reduziu as faltas de clientes para quase zero. Perfeito para barbearias!",
        name: "Rui Barbosa",
        title: "Proprietário, Navalha de Ouro Barbearia",
    },
    {
        quote: "A aplicação de fidelidade da NexoDev transformou o nosso negócio. Agora os clientes voltam mais vezes e as vendas subiram. O suporte é incrível.",
        name: "Sofia Fernandes",
        title: "Gerente, The Burger Spot Hamburgueria",
    },
    {
        quote: "Eles criaram uma loja online para a minha rede de salões de beleza que é intuitiva e super-rápida. Excelente trabalho de UI/UX.",
        name: "Carla Pires",
        title: "Fundadora, Glamour Salões & Cabeleireiros",
    },
    {
        quote: "Precisávamos de um sistema de pedidos rápido para a hora de ponta. A solução da NexoDev é robusta, nunca falha e integrou-se facilmente.",
        name: "Miguel Alves",
        title: "Chef/Dono, O Mestre do Hambúrguer",
    },
    {
        quote: "Desde a arquitetura até o deploy, a equipa mostrou um conhecimento técnico de alto nível. Uma parceria essencial para o nosso crescimento.",
        name: "António Pereira",
        title: "CTO, NextGen Software",
    },
    {
        quote: "A nossa nova plataforma de consultoria é visualmente apelativa e extremamente funcional. Entenderam perfeitamente as nossas necessidades de nicho.",
        name: "Laura Gomes",
        title: "CEO, Growth Advisors",
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
    url: "",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.251-4 0v5.604h-3v-11h3v1.765c1.395-2.585 7-2.764 7 2.456v6.779z"/>
      </svg>
    )
  },
  {
    name: "GitHub",
    url: "",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.743.084-.728.084-.728 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.304.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.771-1.586 8.2-6.084 8.2-11.387c0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/nexodevv",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.013 4.85.074 1.32.062 2.126.31 2.92.613.805.313 1.5.733 2.22 1.453s1.14 1.415 1.453 2.22c.303.794.551 1.6.613 2.92.061 1.266.074 1.646.074 4.85s-.013 3.584-.074 4.85c-.062 1.32-.31 2.126-.613 2.92-.313.805-.733 1.5-1.453 2.22s-1.415 1.14-2.22 1.453c-.794.303-1.6.551-2.92.613-1.266.061-1.646.074-4.85.074s-3.584-.013-4.85-.074c-1.32-.062-2.126-.31-2.92-.613-.805-.313-1.5-.733-2.22-1.453s-1.415-1.14-2.22-1.453c-.303-.794-.551-1.6-.613-2.92-.061-1.266-.074-1.646-.074-4.85s.013-3.584.074-4.85c.062-1.32.31-2.126.613-2.92.313-.805.733-1.5 1.453-2.22s1.415-1.14 2.22-1.453c.794-.303 1.6-.551 2.92-.613 1.266-.061 1.646-.074 4.85-.074zm0-2.163c-3.265 0-3.676.014-4.947.076-1.341.065-2.261.32-3.045.626-.826.326-1.558.756-2.285 1.483-1.385 1.385-1.815 3.061-1.928 4.793-.053.766-.072 1.394-.072 4.97s.019 4.204.072 4.97c.113 1.732.543 3.408 1.928 4.793 1.385 1.385 3.061 1.815 4.793 1.928.766.053 1.394.072 4.97.072s4.204-.019 4.97-.072c1.732-.113 3.408-.543 4.793-1.928 1.385-1.385 1.815-3.061 1.928-4.793.053-.766.072-1.394.072-4.97s-.019-4.204-.072-4.97c-.113-1.732-.543-3.408-1.928-4.793-1.385-1.385-3.061-1.815-4.793-1.928-.766-.053-1.394-.072-4.97-.072zM12 4.25c-3.723 0-6.75 3.027-6.75 6.75s3.027 6.75 6.75 6.75 6.75-3.027 6.75-6.75-3.027-6.75-6.75-6.75zm0 11.25c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5zm8.5-12.25c0 .711-.577 1.288-1.288 1.288s-1.288-.577-1.288-1.288c0-.711.577-1.288 1.288-1.288s1.288.577 1.288 1.288z"/>
      </svg>
    )
  },
];

export const PRIVACY_CONTENT_JSX = {
  title: "Política de Privacidade",
  body: (
    <div className="text-gray-300 space-y-4">
      <p className="text-sm text-gray-400"><strong>Última atualização: 15 de Novembro de 2025</strong></p>
      
      <p>A NexoDev ("Nós", "Nosso") valoriza a privacidade dos seus usuários e clientes. Esta Política de Privacidade descreve como coletamos, usamos e protegemos as informações pessoais que você fornece ao usar nosso website e serviços de desenvolvimento web.</p>
      
      <h3 className="text-xl font-semibold text-white mt-6 mb-2">1. Informações que Coletamos</h3>
      <p>Coletamos informações para fornecer e melhorar nossos serviços.</p>
      
      <h4 className="text-lg font-medium text-purple-400 mt-4 mb-1">1.1 Informações Fornecidas por Você</h4>
      <p>Ao interagir conosco (por exemplo, ao preencher o formulário de contato ou o chatbot), você pode nos fornecer informações pessoais, incluindo:</p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Nome completo</li>
        <li>Endereço de e-mail</li>
        <li>Número de telefone</li>
        <li>Detalhes da sua empresa ou projeto</li>
        <li>Qualquer outra informação que você escolha fornecer na comunicação</li>
      </ul>
      
      <h4 className="text-lg font-medium text-purple-400 mt-4 mb-1">1.2 Dados de Uso e Navegação (Coleta Automática)</h4>
      <p>Ao visitar nosso site, podemos coletar automaticamente:</p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Endereço IP</li>
        <li>Tipo de navegador e sistema operacional</li>
        <li>Páginas visitadas e tempo gasto nelas</li>
        <li>Dados de interação, como cliques e movimentos do mouse</li>
      </ul>
      <p className="text-sm">Usamos cookies e tecnologias de rastreamento semelhantes para monitorar a atividade no nosso Serviço e armazenar certas informações.</p>
      
      <h3 className="text-xl font-semibold text-white mt-6 mb-2">2. Uso das Informações</h3>
      <p>Usamos as informações coletadas para diversos propósitos:</p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li><strong>Comunicação:</strong> Responder a solicitações, dúvidas e fornecer orçamentos</li>
        <li><strong>Melhoria do Serviço:</strong> Analisar tendências de uso para aprimorar a funcionalidade e o conteúdo do nosso site</li>
        <li><strong>Marketing:</strong> Enviar informações sobre nossos serviços, promoções e novidades, caso você tenha consentido</li>
        <li><strong>Segurança:</strong> Proteger a segurança do nosso site e prevenir fraudes</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-white mt-6 mb-2">3. Compartilhamento de Informações</h3>
      <p>A NexoDev não vende ou aluga suas informações pessoais a terceiros. Podemos compartilhar informações nas seguintes circunstâncias:</p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li><strong>Provedores de Serviço:</strong> Com terceiros que nos auxiliam na operação do nosso negócio (ex: serviços de hospedagem, análise de dados, ferramentas de CRM), sob acordos de confidencialidade</li>
        <li><strong>Obrigação Legal:</strong> Quando exigido por lei ou em resposta a processos legais válidos</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-white mt-6 mb-2">4. Segurança dos Dados</h3>
      <p>Empregamos medidas de segurança técnicas e organizacionais razoáveis para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, lembre-se que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro.</p>
      
      <h3 className="text-xl font-semibold text-white mt-6 mb-2">5. Seus Direitos</h3>
      <p>Você tem o direito de:</p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Acessar, atualizar ou solicitar a exclusão das suas informações pessoais que possuímos</li>
        <li>Retirar o seu consentimento para o processamento dos seus dados a qualquer momento</li>
      </ul>
      <p className="text-sm">Para exercer esses direitos, entre em contato conosco através do nosso e-mail.</p>
      
      <h3 className="text-xl font-semibold text-white mt-6 mb-2">6. Alterações a Esta Política</h3>
      <p>Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página.</p>
    </div>
  )
};

export const TERMS_CONTENT_JSX = {
  title: "Termos de Serviço",
  body: (
    <div className="text-gray-300 space-y-4">
      <p className="text-sm text-gray-400"><strong>Última atualização: 15 de Novembro de 2025</strong></p>
      
      <p>Estes Termos de Serviço ("Termos") regem o uso do website da NexoDev e os serviços de desenvolvimento web e consultoria por nós oferecidos. Ao acessar ou usar nossos serviços, você concorda em cumprir estes Termos.</p>
      
      <h3 className="text-xl font-semibold text-white mt-6 mb-2">1. Aceitação dos Termos</h3>
      <p>Ao usar nosso website ou contratar nossos serviços, você confirma ter lido, entendido e concordado com estes Termos de Serviço e nossa Política de Privacidade. Se você não concordar com qualquer parte destes Termos, não deverá acessar o site nem utilizar nossos serviços.</p>
      
      <h3 className="text-xl font-semibold text-white mt-6 mb-2">2. Serviços da NexoDev</h3>
      <p>A NexoDev é uma agência de desenvolvimento web especializada em soluções digitais de alta performance, incluindo, mas não se limitando a:</p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Desenvolvimento de websites e aplicações web personalizadas</li>
        <li>Design de interface do usuário (UI) e experiência do usuário (UX)</li>
        <li>Consultoria e otimização de performance</li>
        <li>Suporte e manutenção contínua (conforme contrato específico)</li>
      </ul>
      <p className="text-sm">Todos os serviços são regidos por um <strong>Contrato de Prestação de Serviços</strong> separado e detalhado, que anula e substitui quaisquer disposições conflitantes destes Termos em relação ao escopo, prazo e preço do projeto específico.</p>
      
      <h3 className="text-xl font-semibold text-white mt-6 mb-2">3. Obrigações do Cliente</h3>
      <p>Ao contratar a NexoDev, o Cliente concorda em:</p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Fornecer informações, acesso a sistemas e materiais necessários (textos, imagens, logotipos) de forma oportuna</li>
        <li>Assegurar que todos os materiais fornecidos para o projeto não infringem direitos autorais ou de propriedade intelectual de terceiros</li>
        <li>Realizar os pagamentos de acordo com o cronograma estabelecido no Contrato de Prestação de Serviços</li>
      </ul>
      
      <h3 className="text-xl font-semibold text-white mt-6 mb-2">4. Propriedade Intelectual</h3>
      
      <h4 className="text-lg font-medium text-purple-400 mt-4 mb-1">4.1 Do Cliente</h4>
      <p>O Cliente retém todos os direitos de propriedade intelectual sobre os materiais que nos fornece (textos, imagens, etc.).</p>
      
      <h4 className="text-lg font-medium text-purple-400 mt-4 mb-1">4.2 Da NexoDev</h4>
      <p>Após o pagamento integral e a conclusão do projeto, a propriedade intelectual sobre o <strong>código-fonte, o design e o layout</strong> da solução final desenvolvida será transferida ao Cliente, salvo acordo explícito em contrário no Contrato de Prestação de Serviços. A NexoDev retém os direitos de uso de qualquer código, ferramenta ou framework que seja de propriedade prévia da NexoDev ou de código aberto.</p>
      
      <h3 className="text-xl font-semibold text-white mt-6 mb-2">5. Limitação de Responsabilidade</h3>
      <p>A NexoDev atua com o máximo de profissionalismo e cuidado, mas não pode garantir que o site será ininterrupto, livre de erros ou que os defeitos serão corrigidos. Em nenhuma circunstância a NexoDev será responsável por quaisquer danos indiretos, incidentais ou consequenciais decorrentes do uso ou da incapacidade de usar nossos serviços.</p>
      
      <h3 className="text-xl font-semibold text-white mt-6 mb-2">6. Rescisão</h3>
      <p>Podemos suspender ou encerrar seu acesso aos nossos serviços imediatamente, sem aviso prévio, se você violar estes Termos ou qualquer Contrato de Prestação de Serviços.</p>
      
      <h3 className="text-xl font-semibold text-white mt-6 mb-2">7. Lei Aplicável</h3>
      <p>Estes Termos serão regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa decorrente destes Termos será submetida à jurisdição exclusiva dos tribunais competentes do Brasil.</p>
      
      <h3 className="text-xl font-semibold text-white mt-6 mb-2">8. Contato</h3>
      <p>Se você tiver alguma dúvida sobre estes Termos, entre em contato através do nosso e-mail: <strong className="text-purple-400">nexodev19@gmail.com</strong>.</p>
    </div>
  )
};