import { StyleSheet } from "react-native";
import defaultStyles from "../../../../styles/defaultStyles";
import theme from "../../../../styles/themes/themeSwitcher";

const styles = StyleSheet.create({
	...defaultStyles,
	container: {
		flex: 1,
		backgroundColor: theme.cores.background.light,
		alignItems: 'center',
		elevation: 1,
		borderRadius: 12,
		gap: 10,
		overflow: 'hidden',
		width: 150,
		// height: 300,
		marginBottom: 1,
	},
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
	textoBox: {
		padding: 15,
		paddingTop: 5,
	},
	titulo: {
		...defaultStyles.titulo3,
		textAlign: 'center',
	},
	texto: {
		...defaultStyles.texto,
		textAlign: 'center',
	},
	invisible: {
		backgroundColor: 'transparent',
		elevation: 0,
	}
});

export default styles;