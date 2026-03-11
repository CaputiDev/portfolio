'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

const translations = {
    pt: {
        nav: { portfolio: 'PORTFÓLIO', projects: 'Projetos', about: 'Sobre mim', contact: 'Contato' },
        home: { title: 'Portfólio de Projetos', subtitle: 'Uma seleção de soluções técnicas e arquiteturas de software focadas em resolver problemas reais de negócios.', search: 'Buscar por palavras-chave...', all: 'Todos', notFound: 'Nenhum projeto encontrado para estes filtros.' },
        about: {
            title: 'Sobre mim',
            intro: 'Sou um desenvolvedor de 20 anos, com foco na criação de sistemas web e arquiteturas back-end.',
            trajectoryTitle: 'Trajetória e Impacto',
            trajectoryText: 'Atualmente curso Sistemas para Internet no IFSul, ambiente onde consolido a base teórica para aplicações escaláveis. Minha experiência prática inclui a atuação como estagiário de back-end em uma grande empresa de tecnologia. Durante esse período, utilizei JavaScript e metodologias ágeis (Scrum) para imergir em conceitos de Open Finance, Blockchain e infraestrutura AWS. Essa vivência moldou minha visão sobre como alinhar código limpo com as necessidades e prazos de negócios reais.',
            impactTitle: 'Impacto nos Projetos',
            impactText: 'Meu foco sempre foi a resolução de gargalos. No desenvolvimento de sistemas de gestão, implementei fluxos que substituem processos manuais por plataformas completas de registro e edição de relatórios. Na criação de APIs, priorizo a segurança e a performance estrutural, garantindo que o back-end suporte a lógica de negócios sem falhas de integração.',
            statsTitle: 'Estatísticas de Desenvolvimento',
            statsCommits: 'Commits no último ano',
            statsProjects: 'Repositórios Públicos',
            personalTitle: 'Além do Código corporativo',
            personalText: 'Fora do ambiente acadêmico e das entregas comerciais, sou um entusiasta Desenvolvedor de jogos, me desafio com jogos envolvendo lógica de programação e sistemas de RPG. Essa paixão atua como um laboratório de lógica, estendendo-se ao desenvolvimento de jogos independentes, onde exploro a criação de mecânicas complexas, sistemas de turnos e gerenciamento de estados.'
        },
        contact: { title: 'Contato', subtitle: 'Sinta-se à vontade para entrar em contato para discutir oportunidades de negócios, arquitetura de sistemas ou novos projetos.', emailLabel: 'E-mail', socialLabel: 'Redes Profissionais' }
    },
    en: {
        nav: { portfolio: 'PORTFOLIO', projects: 'Projects', about: 'About me', contact: 'Contact' },
        home: { title: 'Project Portfolio', subtitle: 'A selection of technical solutions and software architectures focused on solving real business problems.', search: 'Search for keywords...', all: 'All', notFound: 'No projects found for these filters.' },
        about: {
            title: 'About me',
            intro: 'I am a 20-year-old developer, based in Brazil, focusing on creating web systems and back-end architectures.',
            trajectoryTitle: 'Trajectory and Impact',
            trajectoryText: 'I am currently studying Internet Systems at IFSul, an environment where I consolidate the theoretical foundation for scalable applications. My practical experience includes working as a back-end intern at a major technology company. During this time, I used JavaScript and agile methodologies (Scrum) to immerse myself in concepts of Open Finance, Blockchain, and AWS infrastructure. This experience shaped my vision on how to align clean code with real business needs and deadlines.',
            impactTitle: 'Projects Impact',
            impactText: 'My focus has always been on resolving bottlenecks. In the development of management systems, I implemented flows that replace manual processes with complete platforms for registering and editing reports. In API creation, I prioritize security and structural performance, ensuring the back-end supports business logic without integration failures.',
            statsTitle: 'Development Statistics',
            statsCommits: 'Commits in the last year',
            statsProjects: 'Public Repositories',
            personalTitle: 'Beyond Corporate Code',
            personalText: 'Outside the academic environment and commercial deliveries, I am an enthusiast of game development, chalenge myself with code challenges and RPG systems. This passion acts as a logic laboratory, extending to independent game development, where I explore the creation of complex mechanics, turn-based systems, and state management.'
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