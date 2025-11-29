import { type JSX, useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

export default function TerminalLoader(): JSX.Element {
        const [dots, setDots] = useState('');
        const [lines, setLines] = useState<string[]>([]);

        useEffect(() => {
                const messages = [
                        '> Initializing system...',
                        '> Loading encryption modules...',
                        '> Establishing secure connection...',
                        '> Authenticating user...',
                        '> Loading resources...',
                        '> System ready!',
                ];

                let currentIndex = 0;
                const interval = setInterval(() => {
                        if (currentIndex < messages.length) {
                                setLines((prev) => [
                                        ...prev,
                                        messages[currentIndex],
                                ]);
                                currentIndex++;
                        } else {
                                clearInterval(interval);
                        }
                }, 400);

                return () => clearInterval(interval);
        }, []);

        useEffect(() => {
                const interval = setInterval(() => {
                        setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
                }, 500);

                return () => clearInterval(interval);
        }, []);

        return (
                <div className="fixed inset-0 bg-black flex items-center justify-center z-50 font-mono">
                        <div className="max-w-2xl w-full px-8">
                                <div className="bg-gray-950 border-2 border-green-500/30 rounded-lg p-6">
                                        <div className="flex items-center space-x-2 mb-4 pb-4 border-b border-green-500/20">
                                                <Terminal className="w-5 h-5 text-green-400" />
                                                <span className="text-green-400 font-bold">
                                                        SYSTEM TERMINAL
                                                </span>
                                        </div>

                                        <div className="space-y-2 text-sm">
                                                {lines.map((line, idx) => (
                                                        <div
                                                                key={idx}
                                                                className="text-green-400"
                                                        >
                                                                {line}
                                                        </div>
                                                ))}

                                                <div className="text-green-400 animate-pulse">
                                                        $ Loading{dots}
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}
