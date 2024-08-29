import { ITheme } from '../../types/types';

export const lightTheme: ITheme = {
	cores: {
		destaque: {
			main: '#8470f3',
			light: '#B8B8FF',
			dark: '#52459c',
			darker: '#2e226d',
		},
		texto: {
			main: '#8c8c8c',
			dark: '#010101',
			light: '#50505020',
		},
		background: {
			main: '#f6f6f6',
			light: '#fcfcfc',
		},
		erro: {
			main: '#df4c12',
		},
		cinza: {
			100: 'hsl(0, 0%, 10%)',
			200: 'hsl(0, 0%, 23%)',
			300: 'hsl(0, 0%, 36%)',
			400: 'hsl(0, 0%, 49%)',
			500: 'hsl(0, 0%, 62%)',
			600: 'hsl(0, 0%, 75%)',
			700: 'hsl(0, 0%, 90%)',
		},
	},
};
