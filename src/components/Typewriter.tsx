'use client';

import { useState, useEffect, ElementType } from 'react';

interface TypewriterProps {
    text: string;
    speed?: number;
    delay?: number;
    as?: ElementType;
    className?: string;
}

export default function Typewriter({ text, speed = 40, delay = 0, as: Tag = 'span', className = '' }: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [isTypingStarted, setIsTypingStarted] = useState(false);

    useEffect(() => {
        setDisplayedText('');
        setIsTypingStarted(false);

        const initialDelay = setTimeout(() => {
            setIsTypingStarted(true);
        }, delay);

        return () => clearTimeout(initialDelay);
    }, [text, delay]);

    useEffect(() => {
        if (!isTypingStarted) return;

        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(text.slice(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, isTypingStarted]);

    return (
        <Tag className={`${className} pr-1 border-r-4 border-blue-600 animate-pulse`}>
            {displayedText}
        </Tag>
    );
}