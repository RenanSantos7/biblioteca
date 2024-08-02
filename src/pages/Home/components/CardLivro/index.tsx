import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ILivro } from '../../../../types/types';
import styles from './styles.tsx';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface CardLivroProps {
	livro: ILivro;
	invisible?: boolean;
}

export default function CardLivro(props: CardLivroProps) {
	const navigation = useNavigation();

	if (props.invisible) {
		return <View style={[styles.container, styles.invisible]} />;
	}

	return (
		<TouchableOpacity
			style={styles.container}
			activeOpacity={0.9}
			onPress={() => {
				//@ts-expect-error
				navigation.navigate('Livro', { livro: props.livro });
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
