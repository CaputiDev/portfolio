import { Project } from '../data/projects';
import { formatTag } from '../app/page';

interface ProjectCardProps {
    project: Project;
    language: 'pt' | 'en';
}

export default function ProjectCard({ project, language }: ProjectCardProps) {
    const content = project[language];

    return (
        <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 flex flex-col h-full">
            <div className="h-48 bg-slate-200 relative overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-slate-300 group-hover:scale-105 transition-transform duration-500"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">{content.title}</h3>

                <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">{content.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-md border border-blue-100">
                            {formatTag(tag)}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-slate-100 mt-auto">
                    {project.repoUrl && (
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center py-2 px-4 rounded-md text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-colors"
                        >
                            {language === 'pt' ? 'Ver Código' : 'View Code'}
                        </a>
                    )}

                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center py-2 px-4 rounded-md text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                        >
                            {language === 'pt' ? 'Acessar' : 'Website'}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}