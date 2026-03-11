'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Typewriter from '../../components/Typewriter';
import FadeIn from '../../components/FadeIn';

export default function Sobre() {
    const { t } = useLanguage();

    const [githubData, setGithubData] = useState({
        repos: 0,
        commits: 0,
        isLoading: true
    });

    useEffect(() => {
        async function fetchGithubStats() {
            try {
                const response = await fetch('/api/github');
                if (!response.ok) throw new Error('Falha ao buscar dados da nossa API interna');
                const data = await response.json();

                setGithubData({
                    repos: data.repos || 0,
                    commits: data.commits || 0,
                    isLoading: false
                });
            } catch (error) {
                console.error('Erro ao conectar com a API interna:', error);
                setGithubData(prevState => ({ ...prevState, isLoading: false }));
            }
        }
        fetchGithubStats();
    }, []);

    return (
        <main className="min-h-screen bg-stone-50 text-slate-900 py-16 px-6 lg:px-24 font-sans overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-16">

                <header>
                    <Typewriter
                        text={t.about.title}
                        as="h1"
                        className="text-4xl font-bold tracking-tight text-slate-900 mb-6 inline-block"
                    />
                    <FadeIn delay={600}>
                        <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-blue-600 pl-4">
                            {t.about.intro}
                        </p>
                    </FadeIn>
                </header>

                <FadeIn delay={1000}>
                    <section>
                        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
                            {t.about.statsTitle}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" >
                            <a href="http://github.com/CaputiDev" target="_blank" rel="noopener noreferrer">
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center transition-opacity duration-500 hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all duration-300" style={{ opacity: githubData.isLoading ? 0.5 : 1 }}>
                                <span className="text-4xl font-extrabold text-blue-600 mb-2">
                                    {githubData.isLoading ? '...' : `${githubData.commits}+`}
                                </span>
                                <span className="text-sm text-slate-500 font-medium">{t.about.statsCommits}</span>
                            </div>
                            </a>
                            <a href="http://github.com/CaputiDev?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center transition-opacity duration-500 hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all duration-300" style={{ opacity: githubData.isLoading ? 0.5 : 1 }}>
                                <span className="text-4xl font-extrabold text-blue-600 mb-2">
                                    {githubData.isLoading ? '...' : githubData.repos}
                                </span>
                                <span className="text-sm text-slate-500 font-medium">{t.about.statsProjects}</span>
                            </div>
                            </a>
                            
                        </div>
                    </section>
                </FadeIn>

                <FadeIn delay={1400}>
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-slate-900">{t.about.trajectoryTitle}</h2>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                {t.about.trajectoryText}
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-slate-900">{t.about.impactTitle}</h2>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                {t.about.impactText}
                            </p>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn delay={1800}>
                    <section className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">{t.about.personalTitle}</h2>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            {t.about.personalText}
                        </p>
                    </section>
                </FadeIn>

            </div>
        </main>
    );
}