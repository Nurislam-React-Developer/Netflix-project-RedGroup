import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({
	theme: 'light',
	toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem('theme') || 'light';
	});

	const toggleTheme = () => {
		setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
	};

	useEffect(() => {
		localStorage.setItem('theme', theme);
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
