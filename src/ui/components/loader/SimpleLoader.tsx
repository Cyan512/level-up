import { type JSX } from 'react';

export default function SimpleLoader(): JSX.Element {
        return (
                <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
                        <div className="text-center">
                                <div className="w-16 h-16 border-4 border-primary-500/30 border-t-primary-500 rounded-full animate-spin mx-auto mb-4"></div>
                                <p className="text-primary-400 font-mono text-lg animate-pulse">
                                        Loading...
                                </p>
                        </div>
                </div>
        );
}
