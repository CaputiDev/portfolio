'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { useLanguage } from '../contexts/LanguageContext';

export const formatTag = (tag: string) => {
  if (!tag) return '';
  return tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase();
};

export default function Showcase() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { language, t } = useLanguage();
  
  const initialSearch = searchParams.get('search') || '';
  const initialTag = searchParams.get('tag') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedTag, setSelectedTag] = useState(initialTag);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [tagSearch, setTagSearch] = useState('');
  
  const filterRef = useRef<HTMLDivElement>(null);

  const allTags = Array.from(
    new Set(projects.flatMap(p => p.tags).map(formatTag))
  ).sort();

  const displayTags = allTags.filter(tag => 
    tag.toLowerCase().includes(tagSearch.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    
    const projectFormattedTags = project.tags.map(formatTag);
    const matchesTag = selectedTag ? projectFormattedTags.includes(selectedTag) : true;
    
    return matchesSearch && matchesTag;
  });

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 px-6 lg:px-24 font-sans transition-colors duration-300">
      <header className="mb-16 max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 transition-colors">{t.home.title}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
          {t.home.subtitle}
        </p>
      </header>

      <section className="mb-12 flex flex-col md:flex-row gap-4 relative" ref={filterRef}>
        <input 
          type="text" 
          placeholder={t.home.search} 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
        />
        
        <div className="relative w-full md:w-auto">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full md:w-auto px-6 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-between gap-3"
          >
            <span>{selectedTag || (language === 'pt' ? 'Filtros' : 'Filters')}</span>
            <svg className={`w-5 h-5 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          {isFilterOpen && (
            <div className="absolute right-0 mt-2 w-full md:w-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl z-20 overflow-hidden transition-colors">
              <div className="p-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                <input 
                  type="text" 
                  placeholder={language === 'pt' ? 'Pesquisar tecnologia...' : 'Search technology...'}
                  value={tagSearch}
                  onChange={(e) => setTagSearch(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                />
              </div>
              <ul className="max-h-60 overflow-y-auto p-2 space-y-1">
                <li>
                  <button 
                    onClick={() => { setSelectedTag(''); setIsFilterOpen(false); }}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${selectedTag === '' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                  >
                    {t.home.all}
                  </button>
                </li>
                {displayTags.map(tag => (
                  <li key={tag}>
                    <button 
                      onClick={() => { setSelectedTag(tag); setIsFilterOpen(false); }}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${selectedTag === tag ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                    >
                      {tag}
                    </button>
                  </li>
                ))}
                {displayTags.length === 0 && (
                  <li className="px-3 py-4 text-center text-sm text-slate-500 dark:text-slate-400">
                    {language === 'pt' ? 'Nenhuma tag encontrada.' : 'No tags found.'}
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} language={language} />
        ))}
      </section>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-slate-500 dark:text-slate-400">
          {t.home.notFound}
        </div>
      )}
    </main>
  );
}