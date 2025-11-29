import { useEffect, useState, type JSX } from 'react';
import ProgressLoader from './ProgressLoader';
import TerminalLoader from './TerminalLoader';
import SimpleLoader from './SimpleLoader';

type LoaderType = 'simple' | 'progress' | 'terminal';

interface PageLoaderProps {
        type?: LoaderType;
        progress?: number;
}

export default function PageLoader({
        type = 'terminal',
        progress = 0,
}: PageLoaderProps): JSX.Element {
        const [autoProgress, setAutoProgress] = useState(0);

        const isAuto = type === 'progress' && progress === 0;

        useEffect(() => {
                if (!isAuto) return;

                const interval = setInterval(() => {
                        setAutoProgress((prev) => {
                                if (prev >= 100) {
                                        clearInterval(interval);
                                        return 100;
                                }
                                return prev + 1;
                        });
                }, 30);

                return () => clearInterval(interval);
        }, [isAuto]);

        const progressToShow = isAuto ? autoProgress : progress;

        switch (type) {
                case 'simple':
                        return <SimpleLoader />;
                case 'progress':
                        return <ProgressLoader progress={progressToShow} />;
                case 'terminal':
                default:
                        return <TerminalLoader />;
        }
}
