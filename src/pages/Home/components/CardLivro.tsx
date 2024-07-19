import { StyleSheet, Text, View } from 'react-native'
import { ILivro } from '../../../types/types'
import defaultStyles from '../../../styles/defaultStyles'
import theme from '../../../styles/themes/themeSwitcher'
import { Image } from 'react-native'

interface CardLivroProps {
	livro: ILivro
}

export default function CardLivro({ livro }: CardLivroProps) {
	return (
		<View style={styles.container}>
            <Image
                source={{ uri: livro.thumbnail }}
                style={styles.image}
            />
			<View>
			    <Text style={styles.titulo}>{livro.titulo}</Text>
    			<Text style={styles.texto}>{livro.autores[0]}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	...defaultStyles,
	container: {
		flex: 1,
        backgroundColor: theme.cores.background.light,
        alignItems: 'center',
        elevation: 1,
        padding: 15,
        marginBottom: 15,
        borderRadius: 24,
        gap: 10
    },
    titulo: {
        ...defaultStyles.titulo2,
        textAlign: 'center'
    },
    texto: {
        ...defaultStyles.texto,
        textAlign: 'center'
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    }
})
