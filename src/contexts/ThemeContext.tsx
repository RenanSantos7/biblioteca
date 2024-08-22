import { createContext, ReactNode, useLayoutEffect } from 'react';
import { ITheme } from '../types/types';
import darkTheme from '../styles/themes/darkTheme';
import lightTheme from '../styles/themes/lightTheme';
import { useColorScheme } from 'react-native';

interface IThemeContext {
	getCurrentTheme: () => ITheme;
}

let currentTheme = lightTheme;

export const ThemeContext = createContext<IThemeContext>({
	getCurrentTheme: () => currentTheme,
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
	const colorScheme = useColorScheme();

	useLayoutEffect(() => {
		currentTheme = colorScheme === 'dark' ? darkTheme : lightTheme;
	}, [colorScheme]);

	return (
		<ThemeContext.Provider value={{ getCurrentTheme: () => currentTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
