import { Outlet } from 'react-router-dom';
import { type JSX } from 'react';
import Sidebar from '@/ui/components/Sidebar';

export default function PrivateLayout(): JSX.Element {
        return (
                <div className="flex">
                        <Sidebar />
                        <div className="flex-1p-4">
                                <Outlet />
                        </div>
                </div>
        );
}
