export interface ProjectTranslation {
    title: string;
    description: string;
    longDescription: string;
}

export interface Project {
    id: string;
    imageUrl: string;
    tags: string[];
    link?: string;
    pt: ProjectTranslation;
    en: ProjectTranslation;
}

export const projects: Project[] = [
    {
        id: "proki-sistema",
        imageUrl: "/images/proki-cover.jpg",
        tags: ["JavaScript", "Back-end", "Gestão"],
        pt: {
            title: "Proki - Gestão de Consultoria",
            description: "Sistema simplificado para gerenciamento de relatórios de atendimento e consultoria.",
            longDescription: "Uma aplicação robusta desenvolvida para registrar, visualizar, editar e excluir relatórios de serviço de forma eficiente, focando em usabilidade e performance."
        },
        en: {
            title: "Proki - Consulting Management",
            description: "Simplified system for managing service and consulting reports.",
            longDescription: "A robust application developed to register, view, edit, and delete service reports efficiently, focusing on usability and performance."
        }
    },
    {
        id: "task-manager-api",
        imageUrl: "/images/api-cover.jpg",
        tags: ["API", "Arquitetura", "Back-end"],
        pt: {
            title: "Simple Task Manager API",
            description: "API RESTful para gerenciamento de tarefas corporativas.",
            longDescription: "Projeto focado no desenvolvimento de uma interface de programação de aplicações limpa e direta para o controle de tarefas, aplicando boas práticas de arquitetura."
        },
        en: {
            title: "Simple Task Manager API",
            description: "RESTful API for corporate task management.",
            longDescription: "Project focused on developing a clean and direct application programming interface for task control, applying architectural best practices."
        }
    },
    {
        id: "card-game-turnos",
        imageUrl: "/images/game-cover.jpg",
        tags: ["Lógica", "Front-end", "Orientação a Objetos"],
        pt: {
            title: "Card Game por Turnos",
            description: "Jogo de cartas com mecânicas de turnos focadas em estratégia.",
            longDescription: "Desenvolvimento lógico de mecânicas de jogo abordando tanto a interface quanto as regras de negócio e persistência de estados."
        },
        en: {
            title: "Turn-based Card Game",
            description: "Card game with turn-based mechanics focused on strategy.",
            longDescription: "Logical development of game mechanics addressing both the interface, business rules, and state persistence."
        }
    }
];