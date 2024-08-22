import { Image, Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { ILivro } from '../../types/types';
import styles from './styles';
import Button from '../../components/Button';
import FlexLine from '../../components/FlexLine';
import Scroll from '../../components/Scroll';
import Page from '../../components/Page';
import { StackHomeParams } from '../../types/routerTypes';

type LivroRouteProp = RouteProp<StackHomeParams, 'Livro'>;

export default function Livro() {
	const route = useRoute<LivroRouteProp>();
	const livro: ILivro = route.params.livro;

	return (
		<Page title={livro.titulo}>
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
								Categorias:
							</Text>
						</View>
						<View>
							{livro.categorias.map((categoria, i) => (
								<Text key={i} style={styles.texto}>
									{categoria}
								</Text>
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
					<FlexLine style={styles.linha}>
						<View style={styles.colunaDestaque}>
							<Text style={styles.textoDestaque}>Status:</Text>
						</View>
						<View>
							<Text style={styles.texto}>{livro.status}</Text>
						</View>
					</FlexLine>

					<Button
						title={'Marcar como lido'}
						icon='book-check-outline'
						onPress={() => alert('Lido')}
					/>
				</View>
			</Scroll>
		</Page>
	);
}
