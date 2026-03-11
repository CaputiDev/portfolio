'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

export default function Navbar() {
    const { language, toggleLanguage, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="bg-slate-900 dark:bg-black text-white shadow-md sticky top-0 z-50 transition-colors duration-300">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="flex justify-between h-20 md:h-24 items-center">

                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-slate-600 group-hover:border-blue-400 transition-colors">
                                <Image
                                    src="/images/profile.jpg"
                                    alt="Thiago Caputi"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight mb-1">
                                    Thiago Caputi
                                </span>
                                <span className="text-sm font-medium text-slate-400 tracking-widest group-hover:text-blue-300 transition-colors leading-tight uppercase">
                                    {t.nav.portfolio}
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex space-x-8">
                            <Link href="/" className="text-base font-medium text-slate-300 hover:text-white transition-colors">
                                {t.nav.projects}
                            </Link>
                            <Link href="/about" className="text-base font-medium text-slate-300 hover:text-white transition-colors">
                                {t.nav.about}
                            </Link>
                            <Link href="/contact" className="text-base font-medium text-slate-300 hover:text-white transition-colors">
                                {t.nav.contact}
                            </Link>
                        </div>

                        <div className="flex items-center gap-4 pl-4 border-l border-slate-700">
                            {/* Botão de Tema */}
                            <button
                                onClick={toggleTheme}
                                title={theme === 'light' ? 'Ativar Modo Escuro' : 'Ativar Modo Claro'}
                                aria-label="Alternar tema"
                                className="p-2 rounded-md bg-slate-800 border border-slate-600 hover:bg-slate-700 transition-colors flex items-center justify-center hover:scale-105 duration-200 text-slate-300 hover:text-white"
                            >
                                {theme === 'light' ? (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                )}
                            </button>

                            {/* Botão de Idioma */}
                            <button
                                onClick={toggleLanguage}
                                title={language === 'pt' ? 'Change to English' : 'Mudar para Português'}
                                aria-label="Alternar idioma"
                                className="p-2 rounded-md bg-slate-800 border border-slate-600 hover:bg-slate-700 transition-colors flex items-center justify-center hover:scale-105 duration-200"
                            >
                                <div className="relative w-6 h-4 overflow-hidden rounded-sm">
                                    <Image
                                        src={language === 'pt' ? '/images/us-flag.svg' : '/images/br-flag.svg'}
                                        alt={language === 'pt' ? 'English Flag' : 'Bandeira do Brasil'}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-slate-300 hover:text-white focus:outline-none"
                            aria-label="Abrir menu de navegação"
                        >
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    <div className="px-6 pt-3 pb-5 space-y-2">
                        <Link href="/" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-lg font-medium text-slate-300 hover:text-white hover:bg-slate-700">
                            {t.nav.projects}
                        </Link>
                        <Link href="/about" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-lg font-medium text-slate-300 hover:text-white hover:bg-slate-700">
                            {t.nav.about}
                        </Link>
                        <Link href="/contact" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-lg font-medium text-slate-300 hover:text-white hover:bg-slate-700">
                            {t.nav.contact}
                        </Link>
                        
                        <div className="flex gap-4 mt-4">
                            <button
                                onClick={toggleTheme}
                                className="flex-1 flex justify-center items-center gap-3 px-3 py-3 rounded-md text-lg font-bold text-slate-300 hover:text-white bg-slate-700 transition-colors"
                            >
                                {theme === 'light' ? (
                                    <><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg> Escuro</>
                                ) : (
                                    <><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg> Claro</>
                                )}
                            </button>

                            <button
                                onClick={() => {
                                    toggleLanguage();
                                    toggleMenu();
                                }}
                                className="flex-1 flex justify-center items-center gap-3 px-3 py-3 rounded-md text-lg font-bold text-slate-300 hover:text-white bg-slate-700 transition-colors"
                            >
                                <div className="relative w-6 h-4 overflow-hidden rounded-sm flex-shrink-0">
                                    <Image
                                        src={language === 'pt' ? '/images/us-flag.svg' : '/images/br-flag.svg'}
                                        alt={language === 'pt' ? 'English Flag' : 'Bandeira do Brasil'}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}