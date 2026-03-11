export interface ProjectTranslation {
    title: string;
    description: string;
    longDescription: string;
}

export interface Project {
    id: string;
    imageUrl: string;
    tags: string[];
    repoUrl?: string;
    liveUrl?: string;
    pt: ProjectTranslation;
    en: ProjectTranslation;
}

export const projects: Project[] = [
    {
        id: "desafios-aceleradora-agil",
        imageUrl: "/images/aceleradora-cover.jpg",
        tags: ["JavaScript", "NodeJs", "Lógica de Programação", "Algoritmos", "Front-end", "Back-end"],
        repoUrl: "https://github.com/CaputiDev/desafios-aceleradora-agil-2026",
        liveUrl: "https://galeria-desafios-aceleradora-agil.vercel.app/",
        pt: {
            title: "Desafios Aceleradora Ágil 2026",
            description: "Resolução de dois desafios técnicos para um processo seletivo, um no terminal e outro web.",
            longDescription: "Repositório dedicado à construção de soluções para os problemas propostos na Aceleradora Ágil. O código demonstra a aplicação de pensamento analítico, estruturação eficiente de dados e boas práticas de desenvolvimento para contornar gargalos lógicos."
        },
        en: {
            title: "Agile Accelerator Challenges 2026",
            description: "Resolution of two technical challenges for a selection process, one at the terminal and the other on the web..",
            longDescription: "Repository dedicated to building solutions for the problems proposed in the Agile Accelerator. The code demonstrates the application of analytical thinking, efficient data structuring, and development best practices to bypass logical bottlenecks."
        }
    },
    {
        id: "study-notes",
        imageUrl: "/images/study-notes-cover.jpg",
        tags: ["Documentação", "Boas Práticas", "Docusaurus", "NodeJs"],
        repoUrl: "https://github.com/CaputiDev/study-notes",
        liveUrl: 'https://caputidev.github.io/study-notes/',
        pt: {
            title: "Study Notes - Base de Conhecimento",
            description: "Documentação estruturada sobre arquitetura de sistemas, back-end e fundamentos de desenvolvimento.",
            longDescription: "Um repositório contínuo dedicado à consolidação do aprendizado teórico e prático. Contém anotações detalhadas, resumos de metodologias e trechos de código que refletem o aprofundamento em infraestrutura, modelagem de dados e tecnologias de ponta abordadas na trajetória acadêmica e profissional."
        },
        en: {
            title: "Study Notes - Knowledge Base",
            description: "Structured documentation on system architecture, back-end, and development fundamentals.",
            longDescription: "A continuous repository dedicated to consolidating theoretical and practical learning. It contains detailed notes, summaries of methodologies, and code snippets that reflect a deepening understanding of infrastructure, data modeling, and cutting-edge technologies covered in academic and professional journeys."
        }
    },
    {
        id: "task-manager-api",
        imageUrl: "/images/api-cover.jpg",
        tags: ["API", "Back-end", "PHP", "MVC", "SQLITE", "JWT"],
        repoUrl: "https://github.com/CaputiDev/simple-task-manager-api",
        pt: {
            title: "Simple Task Manager API",
            description: "API RESTful para gerenciamento de serviços.",
            longDescription: "Projeto focado no desenvolvimento de uma interface de programação de aplicações limpa e direta para o controle de tarefas, aplicando boas práticas de arquitetura."
        },
        en: {
            title: "Simple Task Manager API",
            description: "RESTful API for task management.",
            longDescription: "Project focused on developing a clean and direct application programming interface for task control, applying architectural best practices."
        }
    },

];