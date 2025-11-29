import { Outlet } from 'react-router-dom';
import { type JSX } from 'react';

export default function PublicLayout(): JSX.Element {
        return (
                <>
                        <Outlet />
                </>
        );
}
