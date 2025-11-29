import { Lock } from 'lucide-react';
import { type JSX } from 'react';

export default function ProgressLoader({ progress = 0 }): JSX.Element {
        return (
                <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
                        <div className="max-w-md w-full px-8">
                                <div className="text-center mb-8">
                                        <Lock className="w-16 h-16 text-green-400 mx-auto mb-4 animate-pulse" />
                                        <h2 className="text-2xl font-bold text-green-400 font-mono mb-2">
                                                CYBEROPS
                                        </h2>
                                        <p className="text-gray-400 text-sm">
                                                Initializing secure
                                                connection...
                                        </p>
                                </div>

                                {/* Barra de progreso */}
                                <div className="relative">
                                        <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden border border-green-500/30">
                                                <div
                                                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300 ease-out"
                                                        style={{
                                                                width: `${progress}%`,
                                                        }}
                                                >
                                                        <div className="w-full h-full animate-pulse bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                                </div>
                                        </div>
                                        <div className="text-right mt-2">
                                                <span className="text-green-400 font-mono text-sm font-bold">
                                                        {progress}%
                                                </span>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}
