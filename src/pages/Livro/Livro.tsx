import { Button, Image, StyleSheet, Text, View } from 'react-native';
import FlexLine from '../../components/FlexLine';
import useDataContext from '../../contexts/dataContext';
import { styles } from './LivroStyles';
import Scroll from '../../components/Scroll';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Livro() {
	const { livros } = useDataContext();
	const livro = livros[0];

	return (
		<View style={styles.containerPag}>
			<FlexLine>
				<Text style={styles.titulo1}>{livro.titulo}</Text>
			</FlexLine>

			<Scroll>
				<Image source={{ uri: livro.thumbnail }} style={styles.capa} />

				<View>
					<Text style={styles.texto}>{livro.descricao}</Text>
				</View>

				<View style={styles.tabela}>
					<FlexLine style={styles.linha}>
						<View style={styles.colunaDestaque}>
							<Text style={styles.textoDestaque}>Autores: </Text>
						</View>
						<View>
							{livro.autores.map(autor => (
								<Text style={styles.texto}>{autor}</Text>
							))}
						</View>
					</FlexLine>

					<FlexLine style={styles.linha}>
						<View style={styles.colunaDestaque}>
							<Text style={styles.textoDestaque}>Editora: </Text>
						</View>
						<View>
							<Text style={styles.texto}>{livro.editora}</Text>
						</View>
					</FlexLine>

					<FlexLine style={styles.linha}>
						<View style={styles.colunaDestaque}>
							<Text style={styles.textoDestaque}>
								Publicação:{' '}
							</Text>
						</View>
						<View>
							<Text style={styles.texto}>{livro.dataPub}</Text>
						</View>
					</FlexLine>

					<FlexLine style={styles.linha}>
						<View style={styles.colunaDestaque}>
							<Text style={styles.textoDestaque}>
								Categorias:{' '}
							</Text>
						</View>
						<View>
							{livro.categorias.map(categoria => (
								<Text style={styles.texto}>{categoria}</Text>
							))}
						</View>
					</FlexLine>

					{livro.numPaginas && (
						<FlexLine style={styles.linha}>
							<View style={styles.colunaDestaque}>
								<Text style={styles.textoDestaque}>
									Número de páginas:
								</Text>
							</View>
							<View>
								<Text style={styles.texto}>
									{livro.numPaginas}
								</Text>
							</View>
						</FlexLine>
					)}

					{livro.formato && (
						<FlexLine style={styles.linha}>
							<View style={styles.colunaDestaque}>
								<Text style={styles.textoDestaque}>
									Formato:
								</Text>
							</View>
							<View>
								<Text style={styles.texto}>
									{livro.formato}
								</Text>
							</View>
						</FlexLine>
					)}
				</View>
			</Scroll>
		</View>
	);
}
