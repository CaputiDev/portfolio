'use client';

import { useLanguage } from "@/src/contexts/LanguageContext";

export default function Contato() {
    const { t } = useLanguage();
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 py-16 px-6 lg:px-24 font-sans">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">{t.contact.title}</h1>
                <p className="text-lg text-slate-600 mb-12">
                    {t.contact.subtitle}
                </p>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">E-mail</h2>
                            <a href="mailto:lcaputi@gmail.com" className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors">
                                lcaputi2@gmail.com
                            </a>
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">{t.contact.socialLabel}</h2>
                            <div className="flex flex-col space-y-2 mt-2">
                                <a href="https://linkedin.com/in/caputi" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                                    LinkedIn
                                </a>
                                <a href="https://github.com/CaputiDev" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}