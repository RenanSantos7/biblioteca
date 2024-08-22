import { Image, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ILivro } from '../../../../types/types';
import { StackHomeParams } from '../../../../types/routerTypes.tsx';
import styles from './styles.tsx';

interface CardLivroProps {
	livro: ILivro;
	invisible?: boolean;
}

type NagigationType = NavigationProp<StackHomeParams>;

export default function CardLivro(props: CardLivroProps) {
	const navigation = useNavigation<NagigationType>();

	if (props.invisible) {
		return <View style={[styles.container, styles.invisible]} />;
	}

	return (
		<TouchableOpacity
			style={styles.container}
			activeOpacity={0.9}
			onPress={() => {
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
