/**
 * Constantes e configurações do chatbot
 */

// Mensagens padrão do chatbot
export const CHATBOT_MESSAGES = {
    WELCOME: 'Sou a Carlos, assistente virtual da NexoDev. Como posso ajudar você a impulsionar seu negócio hoje?',
    ERROR: 'Desculpe, ocorreu um erro. Por favor, tente novamente ou entre em contato diretamente conosco.',
    TYPING: 'Digitando...',
    TRANSFER_SUGGESTION: 'Percebi que sua solicitação é mais complexa. Gostaria de falar diretamente com nossa equipe?',
    NO_API_KEY: 'O chatbot está temporariamente indisponível. Por favor, entre em contato pelo WhatsApp ou Instagram.',
};

// Configurações do Gemini AI
export const GEMINI_CONFIG = {
    model: 'gemini-2.5-flash',
    generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 1024,
    },
    safetySettings: [
        {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
        },
        {
            category: 'HARM_CATEGORY_HATE_SPEECH',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
        },
        {
            category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
        },
        {
            category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
        },
    ],
};

// Prompt do sistema para o chatbot
// Prompt do sistema para o chatbot
export const SYSTEM_PROMPT = `Você é a Carlos, a assistente virtual da NexoDev. Você é amigável, profissional e muito prestativa.
A NexoDev é uma empresa especializada em desenvolvimento web personalizado, design UX/UI estratégico, otimização de performance (SEO/Velocidade) e suporte e manutenção contínua.

INSTRUÇÕES:
- Seu nome é Carlos.
- Aja como um ser humano, com empatia e naturalidade.
- Responda em português brasileiro.
- Use linguagem simples e acessível, evitando termos técnicos complexos sempre que possível. Explique como se estivesse falando com alguém que não é da área de tecnologia.
- Mantenha respostas concisas (máximo 3-4 linhas), mas completas.
- Foque nos serviços da NexoDev: desenvolvimento web, design UX/UI, SEO e suporte.
- Sempre que o assunto for orçamento, preço ou valores, forneça os links de contato (WhatsApp/Instagram) e sugira falar com um especialista.
- Para projetos complexos, sugira transferência para WhatsApp/Instagram.

SERVIÇOS DA NEXODEV:
1. Desenvolvimento Web Personalizado - Aplicações escaláveis com Vue, React, Node.
2. Design UX/UI Estratégico - Interfaces focadas em experiência e conversão.
3. Otimização de Performance - SEO e velocidade de carregamento.
4. Suporte e Manutenção - Planos mensais de segurança e atualizações.

Se a pergunta for muito complexa ou exigir orçamento detalhado, indique gentilmente que a pessoa pode falar diretamente com a equipe.`;

// Opções rápidas para o usuário
export const QUICK_OPTIONS = [
    { id: 'services', label: 'Conhecer Serviços', text: 'Quais serviços a NexoDev oferece?' },
    { id: 'quote', label: 'Solicitar Orçamento', text: 'Gostaria de solicitar um orçamento.' },
    { id: 'contact', label: 'Falar com Especialista', text: 'Quero falar com um especialista.' },
];

/**
 * Retorna a saudação baseada no horário atual
 * @returns {string} Saudação (Bom dia, Boa tarde, Boa noite)
 */
export const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'Bom dia';
    if (hour >= 12 && hour < 18) return 'Boa tarde';
    return 'Boa noite';
};

// Palavras-chave que indicam necessidade de transferência
export const COMPLEXITY_KEYWORDS = [
    'orçamento',
    'preço',
    'quanto custa',
    'valor',
    'contrato',
    'prazo',
    'cronograma',
    'equipe',
    'reunião',
    'proposta comercial',
    'projeto complexo',
    'sistema completo',
    'integração',
    'api',
    'banco de dados',
    'e-commerce',
    'marketplace',
    'plataforma',
];

// Função para detectar se a pergunta é complexa
export const isComplexQuery = (message) => {
    const lowerMessage = message.toLowerCase();

    // Verifica se contém palavras-chave de complexidade
    const hasComplexKeyword = COMPLEXITY_KEYWORDS.some(keyword =>
        lowerMessage.includes(keyword)
    );

    // Verifica se a mensagem é muito longa (mais de 200 caracteres)
    const isTooLong = message.length > 200;

    // Verifica se contém múltiplas perguntas (mais de 2 pontos de interrogação)
    const hasMultipleQuestions = (message.match(/\?/g) || []).length > 2;

    return hasComplexKeyword || isTooLong || hasMultipleQuestions;
};

// Links de redes sociais (serão sobrescritos pelas variáveis de ambiente)
export const SOCIAL_LINKS = {
    whatsapp: import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/5511999999999',
    instagram: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/nexodevv',
};
