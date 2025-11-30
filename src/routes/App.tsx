import { loadTheme } from '@/ui/pages/private/settings/pages/appearance/themeStorage';
import { type RouteObject, useRoutes } from 'react-router-dom';
import PageLoader from '@/ui/components/loader/PageLoader';
import { type JSX, useEffect, useState } from 'react';
import NotFoundPage from '@/ui/pages/NotFoundPage';
import privateRoutes from './PrivateRoutes';
import publicRoutes from './PublicRoutes';

export interface ThemeColors {
        primary: string;
        body: string;
        accent: string;
}

export default function App(): JSX.Element | null {
        const [loading, setLoading] = useState(true);
        const initial = loadTheme();

        useEffect(() => {
                const timer = setTimeout(() => {
                        setLoading(false);
                }, 3000);

                return () => clearTimeout(timer);
        }, []);

        const applyColors = (colors: ThemeColors) => {
                document.documentElement.style.setProperty(
                        '--color-primary',
                        colors.primary
                );
                document.documentElement.style.setProperty(
                        '--color-body',
                        colors.body
                );
                document.documentElement.style.setProperty(
                        '--color-accent',
                        colors.accent
                );
        };
        useEffect(() => {
                applyColors(initial);
        }, []);

        const routes = useRoutes([
                ...publicRoutes,
                ...privateRoutes,
                {
                        path: '*',
                        element: <NotFoundPage />,
                },
        ] satisfies RouteObject[]);

        if (loading) {
                return <PageLoader type="simple" />;
        }

        return routes;
}
