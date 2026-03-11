'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import Typewriter from '../../components/Typewriter';
import FadeIn from '../../components/FadeIn';

export default function Contato() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 py-16 px-6 lg:px-24 font-sans overflow-hidden">
            <div className="max-w-2xl mx-auto">

                <Typewriter
                    text={t.contact.title}
                    as="h1"
                    className="text-4xl font-bold tracking-tight text-slate-900 mb-4 inline-block"
                />

                <FadeIn delay={500}>
                    <p className="text-lg text-slate-600 mb-12 mt-2">
                        {t.contact.subtitle}
                    </p>
                </FadeIn>

                <FadeIn delay={900}>
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">
                                    {t.contact.emailLabel}
                                </h2>
                                <a href="mailto:lcaputi@gmail.com.com" className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors">
                                    lcaputi@gmail.com
                                </a>
                            </div>

                            <div>
                                <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">
                                    {t.contact.socialLabel}
                                </h2>
                                <div className="flex flex-col space-y-2 mt-2">
                                    <a href="https://linkedin.com/in/caputi" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                                        LinkedIn
                                    </a>
                                    <a href="https://github.com/caputiDev" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

            </div>
        </main>
    );
}