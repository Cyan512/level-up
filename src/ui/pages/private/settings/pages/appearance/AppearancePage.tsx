import { type JSX } from 'react';
import { loadTheme, saveTheme, defaultColors } from './themeStorage';
import { useEffect, useState } from 'react';

export interface ThemeColors {
        primary: string;
        body: string;
        accent: string;
}

export default function AppearancePage(): JSX.Element {
        const initial = loadTheme();
        const [primary, setPrimary] = useState(initial.primary);
        const [body, setBody] = useState(initial.body);
        const [accent, setAccent] = useState(initial.accent);

        // Aplica los colores al HTML root
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

        // Al cargar el componente, aplicamos los colores guardados
        useEffect(() => {
                applyColors(initial);
        }, []);

        const updateColor = (token: string, value: string) => {
                const newValues = {
                        primary,
                        body,
                        accent,
                        [token]: value,
                };

                // Actualizar variables CSS en vivo
                applyColors(newValues);

                // Guardar en localStorage
                saveTheme(newValues);

                // Actualizar estado local de React
                if (token === 'primary') setPrimary(value);
                if (token === 'body') setBody(value);
                if (token === 'accent') setAccent(value);
        };

        return (
                <div>
                        <div>
                                <label htmlFor=""></label>
                                <div>
                                        <div>
                                                <input
                                                        type="color"
                                                        value={primary}
                                                        onChange={(e) =>
                                                                updateColor(
                                                                        'primary',
                                                                        e.target
                                                                                .value
                                                                )
                                                        }
                                                />
                                        </div>
                                        <input
                                                type="text"
                                                value={primary}
                                                onChange={(e) =>
                                                        updateColor(
                                                                'primary',
                                                                e.target.value
                                                        )
                                                }
                                        />
                                </div>
                        </div>
                        <button
                                onClick={() => {
                                        setPrimary(defaultColors.primary);
                                        setBody(defaultColors.body);
                                        setAccent(defaultColors.accent);
                                        saveTheme(defaultColors);
                                        applyColors(defaultColors);
                                }}
                                className="w-full bg-primary hover:bg-green-400  font-bold py-3 rounded transition-all flex items-center justify-center space-x-2"
                        >
                                restablecer
                        </button>
                </div>
        );
}
