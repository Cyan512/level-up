import PrivateLayout from '@/ui/pages/private/PrivateLayout';
import type { RouteObject } from 'react-router-dom';
import {
        ChallengesPage,
        NotificationsPage,
        RulesPage,
        ScoreBoardPage,
        SettingsPage,
        UserProfilePage,
        UsersPage,
} from '@/ui/pages/private';

const privateRoutes: RouteObject[] = [
        {
                element: <PrivateLayout />,
                children: [
                        {
                                path: 'challenges',
                                element: <ChallengesPage />,
                        },
                        {
                                path: 'notifications',
                                element: <NotificationsPage />,
                        },
                        {
                                path: 'rules',
                                element: <RulesPage />,
                        },
                        {
                                path: 'score-board',
                                element: <ScoreBoardPage />,
                        },
                        {
                                path: 'settings',
                                element: <SettingsPage />,
                        },
                        {
                                path: 'user',
                                element: <UserProfilePage />,
                        },
                        {
                                path: 'users',
                                element: <UsersPage />,
                        },
                ],
        },
];

export default privateRoutes;
