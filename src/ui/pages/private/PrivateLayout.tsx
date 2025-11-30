import Sidebar from '@/ui/components/sidebar/Sidebar.tsx';
import { type JSX, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function PrivateLayout(): JSX.Element {
        const [isOpen, setIsOpen] = useState(false);
        return (
                <div className="flex h-screen bg-black font-mono overflow-hidden">
                        {isOpen && (
                                <div
                                        className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
                                        onClick={() => setIsOpen(false)}
                                />
                        )}
                        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
                        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                                <div className="lg:hidden bg-gray-900 border-b border-primary-500/30 p-4 flex items-center justify-between">
                                        <button
                                                onClick={() => setIsOpen(true)}
                                                className="text-primary-400 hover:text-primary-300 transition-colors"
                                        >
                                                <Menu className="w-6 h-6" />
                                        </button>
                                        <span className="text-primary-400 font-bold tracking-wider">
                                                CYBEROPS
                                        </span>
                                        <div className="w-6" />
                                </div>
                                <div className="flex-1 p-4 lg:p-8 overflow-auto">
                                        <div className="h-full border border-primary-500/30 rounded-lg bg-gray-950 p-4 lg:p-6">
                                                <div className="text-primary-400 font-mono">
                                                        <Outlet />
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}
