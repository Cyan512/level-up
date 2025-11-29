import { type RouteObject, useRoutes } from 'react-router-dom';
import PageLoader from '@/ui/components/loader/PageLoader';
import NotFoundPage from '@/ui/pages/NotFoundPage';
import { type JSX, useEffect, useState } from 'react';
import privateRoutes from './PrivateRoutes';
import publicRoutes from './PublicRoutes';

export default function App(): JSX.Element | null {
        const [loading, setLoading] = useState(true);

        useEffect(() => {
                const timer = setTimeout(() => {
                        setLoading(false);
                }, 3000);

                return () => clearTimeout(timer);
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
