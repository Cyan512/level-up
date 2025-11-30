import { type JSX, useState } from 'react';
import { Mail, Lock, EyeOff, Eye, Loader2, LogIn } from 'lucide-react';

export default function Login(): JSX.Element {
        const [showPassword, setShowPassword] = useState(false);
        const [loading, setLoading] = useState(false);
        return (
                <div className="space-y-5">
                        <div>
                                <label className="block text-primary-400 text-sm mb-2 tracking-wide">
                                        EMAIL
                                </label>
                                <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-500 w-5 h-5" />
                                        <input
                                                type="email"
                                                className="w-full bg-gray-900 border border-primary-500/30 rounded px-10 py-3 text-primary-400 placeholder-gray-600 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                                                placeholder="Enter email"
                                        />
                                </div>
                        </div>
                        <div>
                                <label className="block text-primary-400 text-sm mb-2 tracking-wide">
                                        PASSWORD
                                </label>
                                <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-500 w-5 h-5" />
                                        <input
                                                type={
                                                        showPassword
                                                                ? 'text'
                                                                : 'password'
                                                }
                                                className="w-full bg-gray-900 border border-primary-500/30 rounded px-10 py-3 text-primary-400 placeholder-gray-600 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                                                placeholder="Enter password"
                                        />
                                        <button
                                                type="button"
                                                onClick={() =>
                                                        setShowPassword(
                                                                !showPassword
                                                        )
                                                }
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-500 hover:text-primary-400 transition-colors"
                                        >
                                                {showPassword ? (
                                                        <EyeOff className="w-5 h-5" />
                                                ) : (
                                                        <Eye className="w-5 h-5" />
                                                )}
                                        </button>
                                </div>
                        </div>
                        <button
                                disabled={loading}
                                type="submit"
                                className="w-full bg-primary-500 hover:bg-primary-400 text-black font-bold py-3 px-4 rounded transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 shadow-lg shadow-primary-500/50"
                        >
                                {loading ? (
                                        <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                <span>AUTHENTICATING...</span>
                                        </>
                                ) : (
                                        <>
                                                <LogIn className="w-5 h-5" />
                                                <span>GRANT ACCESS</span>
                                        </>
                                )}
                        </button>
                </div>
        );
}
