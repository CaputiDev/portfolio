'use client';

import { useLanguage } from '../../contexts/LanguageContext';

export default function Sobre() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-stone-50 text-slate-900 py-16 px-6 lg:px-24 font-sans">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-8">
                    {t.about.title}
                </h1>

                <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                    <p>{t.about.p1}</p>
                    <p>{t.about.p2}</p>
                    <p>{t.about.p3}</p>
                    <p>{t.about.p4}</p>
                </div>
            </div>
        </main>
    );
}