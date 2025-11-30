const THEME_KEY = 'theme-colors';

export interface ThemeColors {
        primary: string;
        body: string;
        accent: string;
}

export const defaultColors: ThemeColors = {
        primary: '#00c950',
        body: '#0ea5e9',
        accent: '#22c55e',
};

export function loadTheme(): ThemeColors {
        try {
                const data = localStorage.getItem(THEME_KEY);
                return data ? JSON.parse(data) : defaultColors;
        } catch {
                return defaultColors;
        }
}

export function saveTheme(colors: ThemeColors) {
        localStorage.setItem(THEME_KEY, JSON.stringify(colors));
}
