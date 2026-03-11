import { Project } from '../data/projects';

interface ProjectCardProps {
    project: Project;
    language: 'pt' | 'en';
}

export default function ProjectCard({ project, language }: ProjectCardProps) {
    const content = project[language];

    return (
        <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 flex flex-col h-full">
            <div className="h-48 bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-300 group-hover:scale-105 transition-transform duration-500"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{content.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{content.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-md border border-blue-100">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}