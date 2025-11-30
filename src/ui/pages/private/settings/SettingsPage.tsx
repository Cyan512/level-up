import { NavLink, Outlet } from 'react-router-dom';
import { cn } from '@/ui/hooks/tailwind-utils.ts';
import { type JSX } from 'react';
import { Palette, Settings, Lock } from 'lucide-react';

export default function SettingsPage(): JSX.Element {
        const sections = [
                {
                        id: 'appearance',
                        label: 'Appearance',
                        icon: Palette,
                        path: 'appearance',
                },
                {
                        id: 'privacy',
                        label: 'Privacy',
                        icon: Lock,
                        path: 'privacy',
                },
        ];
        return (
                <div>
                        <div className="mb-8">
                                <div className="flex items-center space-x-3 mb-2">
                                        <Settings className="w-8 h-8" />
                                        <h1 className="text-3xl lg:text-4xl font-bold">
                                                Settings
                                        </h1>
                                </div>
                                <p>
                                        Manage your account settings and
                                        preferences
                                </p>
                        </div>
                        <div>
                                <div>
                                        <div>
                                                <div>
                                                        <nav>
                                                                {sections.map(
                                                                        (
                                                                                section
                                                                        ) => {
                                                                                const Icon =
                                                                                        section.icon;
                                                                                return (
                                                                                        <NavLink
                                                                                                to={
                                                                                                        section.path
                                                                                                }
                                                                                                key={
                                                                                                        section.id
                                                                                                }
                                                                                                className={({
                                                                                                        isActive,
                                                                                                }) =>
                                                                                                        cn(
                                                                                                                '',
                                                                                                                isActive
                                                                                                                        ? ''
                                                                                                                        : ''
                                                                                                        )
                                                                                                }
                                                                                        >
                                                                                                <Icon />
                                                                                                <span>
                                                                                                        {
                                                                                                                section.label
                                                                                                        }
                                                                                                </span>
                                                                                        </NavLink>
                                                                                );
                                                                        }
                                                                )}
                                                        </nav>
                                                </div>
                                        </div>
                                </div>
                                <div>
                                        <div className="border-2 border-primary-500 rounded-lg p-6 lg:p-8">
                                                <Outlet />
                                        </div>
                                </div>
                        </div>
                </div>
        );
}
