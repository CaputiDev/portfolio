'use client';

import { useState, useEffect, ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export default function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(false);
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]); // A dependência garante que a animação resete se o idioma mudar

    return (
        <div className={`transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}>
            {children}
        </div>
    );
}