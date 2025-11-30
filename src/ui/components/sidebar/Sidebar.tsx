import UserMenu from './components/UserMenu.tsx';
import { cn } from '@/ui/hooks/tailwind-utils.ts';
import { NavLink } from 'react-router-dom';
import { type JSX } from 'react';
import {
        Trophy,
        Bell,
        BookText,
        ListOrdered,
        Settings,
        Users,
        Lock,
        X,
} from 'lucide-react';

export default function Sidebar({
        isOpen,
        setIsOpen,
}: {
        isOpen: boolean;
        setIsOpen: (v: boolean) => void;
}): JSX.Element {
        const menuItems = [
                {
                        id: 'challenges',
                        label: 'Challenges',
                        icon: Trophy,
                        path: '/challenges',
                },
                {
                        id: 'notifications',
                        label: 'Notifications',
                        icon: Bell,
                        path: '/notifications',
                },
                {
                        id: 'rules',
                        label: 'Rules',
                        icon: BookText,
                        path: '/rules',
                },
                {
                        id: 'score-board',
                        label: 'Score Board',
                        icon: ListOrdered,
                        path: '/score-board',
                },
                {
                        id: 'settings',
                        label: 'Settings',
                        icon: Settings,
                        path: '/settings',
                },
                {
                        id: 'users',
                        label: 'Users',
                        icon: Users,
                        path: '/users',
                },
        ];
        return (
                <div
                        className={cn(
                                'fixed lg:relative z-20 h-full w-72 lg:w-80 bg-gray-900 border-r-2 border-primary-500',
                                'transition-transform duration-300 flex flex-col shadow-2xl shadow-primary-500/20',
                                isOpen
                                        ? 'translate-x-0'
                                        : '-translate-x-full lg:translate-x-0'
                        )}
                >
                        <div className="p-4 border-b border-primary-500/30 flex items-center justify-between bg-gray-950">
                                <div className="flex items-center space-x-2">
                                        <Lock className="text-primary-400 w-5 h-5 lg:w-6 lg:h-6" />
                                        <span className="text-primary-400 font-bold text-base lg:text-lg tracking-wider">
                                                CYBEROPS
                                        </span>
                                </div>
                                <button
                                        onClick={() => setIsOpen(false)}
                                        className="text-primary-400 hover:text-primary-300 transition-colors lg:hidden"
                                >
                                        <X className="w-5 h-5" />
                                </button>
                        </div>

                        <nav className="flex-1 overflow-y-auto p-2 space-y-1">
                                {menuItems.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                                <NavLink
                                                        key={item.id}
                                                        to={item.path}
                                                        className={({
                                                                isActive,
                                                        }) =>
                                                                cn(
                                                                        'w-full flex items-center space-x-3 px-3 py-3 rounded transition-all group',
                                                                        isActive
                                                                                ? 'bg-primary-500/20 text-primary-400 border border-primary-500/50 shadow-lg shadow-primary-500/20'
                                                                                : 'text-gray-400 hover:bg-gray-800 hover:text-primary-400 border border-transparent hover:border-primary-500/30'
                                                                )
                                                        }
                                                >
                                                        <Icon className="w-5 h-5 flex-shrink-0" />
                                                        <span className="flex-1 text-left text-sm truncate">
                                                                {item.label}
                                                        </span>
                                                </NavLink>
                                        );
                                })}
                        </nav>
                        <div className="p-4 border-t border-primary-500/30 bg-gray-950">
                                <div className="flex items-center space-x-3 mb-3">
                                        <UserMenu />
                                        <div className="flex-1 min-w-0">
                                                <div className="text-sm text-primary-500 font-semibold truncate">
                                                        h4ck3r_00
                                                </div>
                                                <div className="text-xs text-gray-500 truncate">
                                                        root@localhost
                                                </div>
                                        </div>
                                </div>
                                <div className="text-xs text-gray-600 font-mono flex items-center justify-between">
                                        <span>
                                                <span className="text-primary-400">
                                                        &gt;
                                                </span>{' '}
                                                Session:
                                        </span>
                                        <span className="text-primary-400"></span>
                                </div>
                        </div>
                </div>
        );
}
