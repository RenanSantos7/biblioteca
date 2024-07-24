import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ILivro } from '../../../types/types';
import defaultStyles from '../../../styles/defaultStyles';
import theme from '../../../styles/themes/themeSwitcher';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface CardLivroProps {
	livro: ILivro;
}

export default function CardLivro({ livro }: CardLivroProps) {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={styles.container}
			activeOpacity={0.9}
			onPress={() => navigation.navigate('Livro')}
		>
			<Image source={{ uri: livro.thumbnail }} style={styles.image} />
			<View style={styles.textoBox}>
				<Text style={styles.titulo}>{livro.titulo}</Text>
				<Text style={styles.texto}>{livro.autores[0]}</Text>
			</View>
		</TouchableOpacity>
	);
}

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
		marginBottom: 15,
	},
	textoBox: {
		padding: 15,
		paddingTop: 5,
	},
	titulo: {
		...defaultStyles.titulo2,
		textAlign: 'center',
	},
	texto: {
		...defaultStyles.texto,
		textAlign: 'center',
	},
	image: {
		width: '100%',
		height: 250,
		resizeMode: 'cover',
	},
});
