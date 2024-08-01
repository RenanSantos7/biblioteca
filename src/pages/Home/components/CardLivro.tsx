import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ILivro } from '../../../types/types';
import defaultStyles from '../../../styles/defaultStyles';
import theme from '../../../styles/themes/themeSwitcher';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface CardLivroProps {
	livro: ILivro;
}

export default function CardLivro(props: CardLivroProps) {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={styles.container}
			activeOpacity={0.9}
			onPress={() => {
				//@ts-expect-error
				navigation.navigate('Livro', { livro: props.livro })
			}}
		>
			<Image
				source={{ uri: props.livro.thumbnail }}
				style={styles.image}
			/>
			<View style={styles.textoBox}>
				<Text style={styles.titulo}>{props.livro.titulo}</Text>
				<Text style={styles.texto}>{props.livro.autores[0]}</Text>
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
		maxWidth: '50%',
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
