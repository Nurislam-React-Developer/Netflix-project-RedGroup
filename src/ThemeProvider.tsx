import { PropsWithChildren, useEffect, useState } from 'react';
import { ThemeContext, ThemeType } from './themeContext';

const ThemeProvider = ({ children }: PropsWithChildren) => {
	const [theme, setTheme] = useState<ThemeType>(() => {
		return (localStorage.getItem('theme') as ThemeType) || 'dark';
	});

	useEffect(() => {
		document.documentElement.classList.toggle('dark', theme === 'dark');
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
	};
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
