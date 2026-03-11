'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

const translations = {
    pt: {
        nav: { portfolio: 'PORTFÓLIO', projects: 'Projetos', about: 'Sobre mim', contact: 'Contato' },
        home: { title: 'Portfólio de Projetos', subtitle: 'Uma seleção de soluções técnicas e arquiteturas de software focadas em resolver problemas reais de negócios.', search: 'Buscar por palavras-chave...', all: 'Todos', notFound: 'Nenhum projeto encontrado para estes filtros.' },
        about: {
            title: 'Sobre mim',
            p1: 'Sou um desenvolvedor de 20 anos, Reidente no Rio Grande do Sul, com foco na criação de sistemas web e arquiteturas back-end sólidas. Atualmente, curso Sistemas para Internet no IFSul, ambiente onde aprofundo meus conhecimentos teóricos e práticos para a construção de aplicações escaláveis e eficientes.',
            p2: 'Minha trajetória técnica inclui uma experiência valiosa atuando como estagiário de back-end em um programa de bolsas corporativo de uma grande empresa de tecnologia. Nesse período, trabalhei diretamente com JavaScript e metodologias ágeis, como o Scrum, imergindo em conceitos de Open Finance, Blockchain e infraestrutura em nuvem na AWS. Essa vivência me ensinou a importância de alinhar código limpo com as necessidades e prazos do mundo dos negócios.',
            p3: 'Fora do código estritamente comercial e do ambiente acadêmico, sou um grande entusiasta da cultura geek, de animes e de sistemas de RPG. Essa paixão naturalmente se estende ao desenvolvimento de jogos, uma área onde exploro a criação de lógicas complexas, como mecânicas por turnos e gerenciamento de estados, unindo minha criatividade com a resolução de problemas de programação.',
            p4: 'Seja estruturando uma API robusta, gerenciando bancos de dados ou pensando na arquitetura de um novo sistema, meu objetivo é sempre entregar soluções que sejam tecnicamente impressionantes e de fácil manutenção.'
        },
        contact: { title: 'Contato', subtitle: 'Sinta-se à vontade para entrar em contato para discutir oportunidades de negócios, arquitetura de sistemas ou novos projetos.', emailLabel: 'E-mail', socialLabel: 'Redes Profissionais' }
    },
    en: {
        nav: { portfolio: 'PORTFOLIO', projects: 'Projects', about: 'About me', contact: 'Contact' },
        home: { title: 'Project Portfolio', subtitle: 'A selection of technical solutions and software architectures focused on solving real business problems.', search: 'Search for keywords...', all: 'All', notFound: 'No projects found for these filters.' },
        about: {
            title: 'About me',
            p1: 'I am a 20-year-old developer based, Living at Rio Grande do Sul, Brazil, focusing on creating web systems and solid back-end architectures. I am currently studying Internet Systems at IFSul, an environment where I deepen my theoretical and practical knowledge to build scalable and efficient applications.',
            p2: 'My technical background includes valuable experience working as a back-end intern in a corporate scholarship program at a major technology company. During this time, I worked directly with JavaScript and agile methodologies, such as Scrum, immersing myself in concepts of Open Finance, Blockchain, and AWS cloud infrastructure. This experience taught me the importance of aligning clean code with business needs and deadlines.',
            p3: 'Outside of strictly commercial code and the academic environment, I am a huge enthusiast of geek culture, anime, and RPG systems. This passion naturally extends to game development, an area where I explore creating complex logic, such as turn-based mechanics and state management, combining my creativity with programming problem-solving.',
            p4: 'Whether structuring a robust API, managing databases, or thinking about the architecture of a new system, my goal is always to deliver solutions that are technically impressive and easy to maintain.'
        },
        contact: { title: 'Contact', subtitle: 'Feel free to reach out to discuss business opportunities, system architecture, or new projects.', emailLabel: 'E-mail', socialLabel: 'Professional Networks' }
    }
};

type LanguageContextType = {
    language: Language;
    toggleLanguage: () => void;
    t: typeof translations.pt;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('pt');

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
    return context;
}