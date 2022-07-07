import React from 'react';
import { useEffect } from 'react';
import { useState, createContext } from 'react';

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        }
    }
    // light theme as the default
    return 'light';
}

export const ThemeContext = createContext();

export const ThemeProvider = ({ initiaTheme, children }) => {
    const [theme, setTheme] = useState(getInitialTheme);

    const rawSetTheme = (rawTheme) => {
        const root = window.document.documentElement;
        const isDark = rawTheme === 'Dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(rawTheme);

        localStorage.setItem('color-theme', rawTheme);
    }

    if (initiaTheme) {
        rawSetTheme(initiaTheme);
    }

    useEffect(() => { rawSetTheme(theme) }, [theme]);

    return (<ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>)
};
