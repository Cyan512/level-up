import { type JSX, useState } from 'react';
import {
        CheckCircle2,
        Shield,
        Terminal,
        Lock,
        LogIn,
        UserPlus,
} from 'lucide-react';
import Login from './components/Login';
import Register from './components/Register';

interface AuthChildProps {
        onSuccess: () => void;
}

export default function AuthPage(): JSX.Element {
        const [activeTab, setActiveTab] = useState<'login' | 'register'>(
                'login'
        );
        const handleLoginSuccess = () => {
                console.log('Login successful! Redirecting to dashboard...');
        };

        const handleRegisterSuccess = () => {
                setActiveTab('login');
                console.log('Registration successful! Switched to login.');
        };
        return (
                <div className="min-h-screen bg-black flex items-center justify-center p-4 font-mono relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl animate-pulse"></div>
                                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
                        </div>
                        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-6 lg:gap-8 relative z-10">
                                <div className="flex-1 bg-gray-950 border-2 border-primary-500/30 rounded-lg p-6 lg:p-8 shadow-2xl shadow-primary-500/20">
                                        <div className="flex items-center space-x-2 mb-6">
                                                <Terminal className="text-primary-400 w-6 h-6" />
                                                <span className="text-primary-400 font-bold text-lg tracking-wider">
                                                        SYSTEM_TERMINAL
                                                </span>
                                        </div>
                                        <div className="border-t border-primary-500/30 pt-6 space-y-4 text-gray-500 text-xs lg:text-sm">
                                                <div className="flex items-center space-x-2">
                                                        <Shield className="w-4 h-4 text-primary-400" />
                                                        <span>
                                                                End-to-end
                                                                encryption
                                                                enabled
                                                        </span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                        <Lock className="w-4 h-4 text-primary-400" />
                                                        <span>
                                                                Secure
                                                                authentication
                                                                protocol
                                                        </span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                        <CheckCircle2 className="w-4 h-4 text-primary-400" />
                                                        <span>
                                                                Multi-factor
                                                                authentication
                                                                ready
                                                        </span>
                                                </div>
                                        </div>
                                        <div className="mt-8 p-4 bg-gray-900 border border-primary-500/20 rounded">
                                                <p className="text-xs text-gray-400 leading-relaxed">
                                                        <span className="text-primary-400 font-semibold">
                                                                Security Notice:
                                                        </span>{' '}
                                                        All credentials are
                                                        encrypted using
                                                        military-grade AES-256
                                                        encryption. Your data is
                                                        protected by advanced
                                                        security protocols.
                                                </p>
                                        </div>
                                </div>
                                <div className="flex-1 bg-gray-950 border-2 border-primary-500/30 rounded-lg p-6 lg:p-8 shadow-2xl shadow-primary-500/20">
                                        <div className="flex items-center justify-between mb-6">
                                                <div className="flex items-center space-x-2">
                                                        <Lock className="text-primary-400 w-6 h-6 lg:w-7 lg:h-7" />
                                                        <span className="text-primary-400 font-bold text-xl lg:text-2xl tracking-wider">
                                                                AUTH_SYSTEM
                                                        </span>
                                                </div>
                                        </div>
                                        <div className="flex border-b border-primary-500/30 mb-6">
                                                <button
                                                        onClick={() =>
                                                                setActiveTab(
                                                                        'login'
                                                                )
                                                        }
                                                        className={`flex-1 py-3 px-4 flex items-center justify-center space-x-2 transition-all ${
                                                                activeTab ===
                                                                'login'
                                                                        ? 'text-primary-400 border-b-2 border-primary-400 bg-primary-500/10'
                                                                        : 'text-gray-500 hover:text-primary-400 hover:bg-gray-900'
                                                        }`}
                                                >
                                                        <LogIn className="w-5 h-5" />
                                                        <span className="font-semibold">
                                                                LOGIN
                                                        </span>
                                                </button>
                                                <button
                                                        onClick={() =>
                                                                setActiveTab(
                                                                        'register'
                                                                )
                                                        }
                                                        className={`flex-1 py-3 px-4 flex items-center justify-center space-x-2 transition-all ${
                                                                activeTab ===
                                                                'register'
                                                                        ? 'text-primary-400 border-b-2 border-primary-400 bg-primary-500/10'
                                                                        : 'text-gray-500 hover:text-primary-400 hover:bg-gray-900'
                                                        }`}
                                                >
                                                        <UserPlus className="w-5 h-5" />
                                                        <span className="font-semibold">
                                                                REGISTER
                                                        </span>
                                                </button>
                                        </div>
                                        {activeTab === 'login' ? (
                                                <Login
                                                        onSuccess={
                                                                handleLoginSuccess
                                                        }
                                                />
                                        ) : (
                                                <Register
                                                        onSuccess={
                                                                handleRegisterSuccess
                                                        }
                                                />
                                        )}

                                        {/* Footer */}
                                        <div className="mt-8 pt-6 border-t border-primary-500/30 text-center text-xs text-gray-600">
                                                <p>
                                                        CYBEROPS © 2025 - Secure
                                                        Authentication System
                                                        v2.1
                                                </p>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}
