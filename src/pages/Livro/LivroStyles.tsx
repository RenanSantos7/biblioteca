import { StyleSheet } from 'react-native';
import defaultStyles from '../../styles/defaultStyles';
import theme from '../../styles/themes/themeSwitcher';

export const styles = StyleSheet.create({
	...defaultStyles,
	capa: {
		width: '100%',
		height: 550,
		resizeMode: 'contain',
		marginVertical: 15,
	},
	linha: {
		borderBottomWidth: 1,
		borderColor: theme.cores.texto.light,
		paddingVertical: 8,
	},
    tabela: {
        marginVertical: 10
    },
	colunaDestaque: {
		width: '25%',
	},
	textoDestaque: {
		color: theme.cores.texto.dark,
		fontWeight: 'bold',
		fontSize: 16,
	},
	texto: {
		fontSize: 16,
		lineHeight: 24,
		color: theme.cores.texto.main,
	},
});
