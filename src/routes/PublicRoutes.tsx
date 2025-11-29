import PublicLayout from '@/ui/pages/public/PublicLayout.tsx';
import { AuthPage, HomePage } from '@/ui/pages/public';
import type { RouteObject } from 'react-router-dom';

const publicRoutes: RouteObject[] = [
        {
                element: <PublicLayout />,
                children: [
                        {
                                path: '/',
                                element: <HomePage />,
                        },
                ],
        },
        {
                path: 'auth',
                element: <AuthPage />,
        },
];

export default publicRoutes;
