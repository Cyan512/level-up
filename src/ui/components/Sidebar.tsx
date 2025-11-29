import { cn } from '@/ui/hooks/tailwind-utils';
import { NavLink } from 'react-router-dom';
import { type JSX } from 'react';
import {
        Trophy,
        Bell,
        BookText,
        ListOrdered,
        Settings,
        User,
        Users,
} from 'lucide-react';

export default function Sidebar(): JSX.Element {
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
                        id: 'user',
                        label: 'My Profile',
                        icon: User,
                        path: '/user',
                },
                {
                        id: 'users',
                        label: 'Users',
                        icon: Users,
                        path: '/users',
                },
        ];
        return (
                <>
                        <nav>
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
                                                                                ? 'bg-green-500/20 text-green-400 border border-green-500/50 shadow-lg shadow-green-500/20'
                                                                                : 'text-gray-400 hover:bg-gray-800 hover:text-green-400 border border-transparent hover:border-green-500/30'
                                                                )
                                                        }
                                                >
                                                        <Icon />
                                                        <span>
                                                                {item.label}
                                                        </span>
                                                </NavLink>
                                        );
                                })}
                        </nav>
                </>
        );
}
