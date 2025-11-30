import PrivateLayout from '@/ui/pages/private/PrivateLayout';
import type { RouteObject } from 'react-router-dom';
import {
        ChallengesPage,
        NotificationsPage,
        RulesPage,
        ScoreBoardPage,
        SettingsPage,
        AppearancePage,
        PrivacyPage,
        UserProfilePage,
        ProfilePage,
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
                                children: [
                                        {
                                                path: 'appearance',
                                                element: <AppearancePage />,
                                        },
                                        {
                                                path: 'privacy',
                                                element: <PrivacyPage />,
                                        },
                                ],
                        },
                        {
                                path: 'users',
                                element: <ProfilePage />,
                        },
                        {
                                path: 'user',
                                element: <UserProfilePage />,
                        },
                ],
        },
];

export default privateRoutes;
