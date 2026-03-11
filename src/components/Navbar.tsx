'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
    const { language, toggleLanguage, t } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-24">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 font-bold text-xl tracking-wider">
                        <Link href="/" className="hover:text-blue-400 transition-colors">
                            {t.nav.portfolio}
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex space-x-6">
                            <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                                {t.nav.projects}
                            </Link>
                            <Link href="/sobre" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                                {t.nav.about}
                            </Link>
                            <Link href="/contato" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                                {t.nav.contact}
                            </Link>
                        </div>

                        <button
                            onClick={toggleLanguage}
                            className="px-3 py-1 text-xs font-bold rounded-md bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-colors"
                        >
                            {language === 'pt' ? 'EN' : 'PT'}
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-slate-300 hover:text-white focus:outline-none"
                            aria-label="Abrir menu de navegação"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-slate-800 border-t border-slate-700">
                    <div className="px-6 pt-2 pb-4 space-y-1">
                        <Link href="/" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700">
                            {t.nav.projects}
                        </Link>
                        <Link href="/sobre" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700">
                            {t.nav.about}
                        </Link>
                        <Link href="/contato" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700">
                            {t.nav.contact}
                        </Link>
                        <button
                            onClick={() => {
                                toggleLanguage();
                                toggleMenu();
                            }}
                            className="mt-4 w-full text-left px-3 py-2 rounded-md text-base font-bold text-slate-300 hover:text-white hover:bg-slate-700"
                        >
                            {language === 'pt' ? 'Change to (EN)' : ' Mudar para (PT-BR)'}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}