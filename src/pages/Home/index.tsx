import {
	ActivityIndicator,
	FlatList,
	ListRenderItem,
	Text,
	View,
} from 'react-native';
import { useState } from 'react';

import { defaultGap } from '../../constants';
import BarraPesquisa from './components/BarraPesquisa';
import CardLivro from './components/CardLivro';
import FlexLine from '../../components/FlexLine';
import LeitorCodigo from './components/LeitorCodigo';
import Page from '../../components/Page';
import Scroll from '../../components/Scroll';
import Section from './components/Section';
import styles from './styles';
import theme from '../../styles/themes/themeSwitcher';
import useDataContext from '../../contexts/dataContext';

export default function Home() {
	const { livros, user } = useDataContext();
	const [pesquisa, setPesquisa] = useState('');

	return (
		<Page title={`Olá,  ${user.name}`}>
			<Scroll style={{ flex: 1 }}>
				<Section title='Recém cadastrados'>
					<FlatList
						data={livros}
						renderItem={({ item }) => <CardLivro livro={item} />}
						showsHorizontalScrollIndicator={false}
						ListEmptyComponent={() => (
							<View style={styles.containerCentralizado}>
								<ActivityIndicator
									color={theme.cores.destaque.main}
									size='large'
								/>
							</View>
						)}
						horizontal
						ItemSeparatorComponent={() => <View style={{ width: defaultGap }} />}
					/>
				</Section>
				
				<Section title='Favoritos'>
					<FlatList
						data={livros}
						renderItem={({ item }) => <CardLivro livro={item} />}
						showsHorizontalScrollIndicator={false}
						ListEmptyComponent={() => (
							<View style={styles.containerCentralizado}>
								<ActivityIndicator
									color={theme.cores.destaque.main}
									size='large'
								/>
							</View>
						)}
						horizontal
						ItemSeparatorComponent={() => <View style={{ width: defaultGap }} />}
					/>
				</Section>
				
				<Section title='Favoritos'>
					<FlatList
						data={livros.toReversed()}
						renderItem={({ item }) => <CardLivro livro={item} />}
						showsHorizontalScrollIndicator={false}
						ListEmptyComponent={() => (
							<View style={styles.containerCentralizado}>
								<ActivityIndicator
									color={theme.cores.destaque.main}
									size='large'
								/>
							</View>
						)}
						horizontal
						ItemSeparatorComponent={() => <View style={{ width: defaultGap }} />}
					/>
				</Section>
			</Scroll>

			<FlexLine
				justifyContent='space-between'
				style={styles.barraPesquisa}
			>
				<BarraPesquisa
					valor={pesquisa}
					setValor={setPesquisa}
				/>
				<LeitorCodigo />
			</FlexLine>
		</Page>
	);
}
