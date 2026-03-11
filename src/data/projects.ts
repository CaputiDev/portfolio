export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    imageUrl: string;
    tags: string[];
    link?: string;
}

export const projects: Project[] = [
    {
        id: "sistema-consultoria",
        title: "Sistema de Gestão de Consultoria",
        description: "Plataforma para registro e edição de relatórios de atendimento.",
        longDescription: "Projeto desenvolvido para gerenciar o fluxo de relatórios de consultoria, substituindo processos manuais por um sistema web completo...",
        imageUrl: "/images/project-1.jpg",
        tags: ["TypeScript", "Node.js", "React", "PostgreSQL"],
    },
    {
        id: "api-gerenciador-tarefas",
        title: "Task Manager API",
        description: "API RESTful para gerenciamento de tarefas corporativas.",
        longDescription: "Uma API robusta focada em performance e segurança, permitindo o gerenciamento completo de tarefas com autenticação e níveis de acesso.",
        imageUrl: "/images/project-2.jpg",
        tags: ["PHP", "SQLite", "API REST", "Autenticação"],
        link: "https://github.com/seu-usuario/projeto"
    }
];