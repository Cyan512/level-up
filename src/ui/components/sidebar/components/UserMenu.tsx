import { useState, useRef, useEffect } from 'react';

export default function UserMenu() {
        const [open, setOpen] = useState(false);
        const menuRef = useRef<HTMLDivElement>(null);
        useEffect(() => {
                function handleClickOutside(e: MouseEvent) {
                        if (
                                menuRef.current &&
                                !menuRef.current.contains(e.target as Node)
                        ) {
                                setOpen(false);
                        }
                }
                document.addEventListener('mousedown', handleClickOutside);
                return () =>
                        document.removeEventListener(
                                'mousedown',
                                handleClickOutside
                        );
        }, []);

        return (
                <div className="relative" ref={menuRef}>
                        <figure
                                className="w-10 h-10 flex-shrink-0 overflow-hidden rounded cursor-pointer border border-primary-400/40"
                                onClick={() => setOpen(!open)}
                        >
                                <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_mAcrV3vVhLq6HK4c1liqGV59qhOwXdEGw&s"
                                        alt="User avatar"
                                        className="w-full h-full object-cover"
                                />
                        </figure>
                        {open && (
                                <div className="absolute bottom-10 mb-2 w-44 bg-gray-900 border border-primary-500/30 rounded-lg shadow-lg z-50">
                                        <button
                                                className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-gray-800"
                                                onClick={() =>
                                                        alert('Ver perfil')
                                                }
                                        >
                                                Ver perfil
                                        </button>
                                        <button
                                                className="w-full text-left px-3 py-2 text-sm text-red-400 hover:bg-gray-800"
                                                onClick={() =>
                                                        alert('Cerrar sesión')
                                                }
                                        >
                                                Cerrar sesión
                                        </button>
                                </div>
                        )}
                </div>
        );
}
