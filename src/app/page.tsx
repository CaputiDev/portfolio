'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { useLanguage } from '../contexts/LanguageContext';

export default function Showcase() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { language, t } = useLanguage();

  const initialSearch = searchParams.get('search') || '';
  const initialTag = searchParams.get('tag') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedTag, setSelectedTag] = useState(initialTag);

  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    if (selectedTag) params.set('tag', selectedTag);

    router.push(`/?${params.toString()}`, { scroll: false });
  }, [searchTerm, selectedTag, router]);

  const filteredProjects = projects.filter(project => {
    const currentTranslation = project[language];
    const matchesSearch = currentTranslation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      currentTranslation.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? project.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-6 lg:px-24 font-sans">
      <header className="mb-16 max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">{t.home.title}</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          {t.home.subtitle}
        </p>
      </header>

      <section className="mb-12 flex flex-col md:flex-row gap-6">
        <input
          type="text"
          placeholder={t.home.search}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3 px-4 py-3 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        />

        <div className="flex flex-wrap gap-2 items-center">
          <button
            onClick={() => setSelectedTag('')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedTag === '' ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}
          >
            {t.home.all}
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedTag === tag ? 'bg-blue-600 text-white' : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} language={language} />
        ))}
      </section>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-slate-500">
          {t.home.notFound}
        </div>
      )}
    </main>
  );
}