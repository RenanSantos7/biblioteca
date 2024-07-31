import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialComIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import theme from '../styles/themes/themeSwitcher';

interface ButtonProps {
	icon?: string;
	title: string;
	onPress: (arg: any) => any;
}

export default function Button(props: ButtonProps) {
	return (
		<TouchableOpacity
			activeOpacity={0.75}
			onPress={props.onPress}
			style={styles.botao}
		>
			{props.icon && (
				<MaterialComIcons name={props.icon} color='white' size={16} />
			)}
			<Text style={styles.botaoTexto}>{props.title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	botao: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 10,
		backgroundColor: theme.cores.destaque.main,
		marginVertical: 20,
		borderRadius: 12,
		paddingVertical: 20,
		paddingHorizontal: 32,
		elevation: 2,
		alignSelf: 'center',
	},
	botaoTexto: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16,
	},
});
