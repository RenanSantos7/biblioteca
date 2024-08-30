import { View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { DrawerParams } from '../../types/routerTypes';
import BarraPesquisa from './components/BarraPesquisa';
import FlexLine from '../../components/FlexLine';
import FloatingBtn from '../../components/FloatingBtn';
import Page from '../../components/Page';
import Scroll from '../../components/Scroll';
import Section from './components/Section';
import useDataContext from '../../contexts/dataContext.mod.tsx';
import styles from './styles';
import LeitorCodigo from './components/LeitorCodigo';


export default function Home() {
	const { livros, user } = useDataContext();
	const [pesquisa, setPesquisa] = useState('');

	const navigation = useNavigation<NavigationProp<DrawerParams>>();

	return (
		<Page title={`Olá,  ${user.name}`}>
			<Scroll style={{ flex: 1 }}>
				<Section
					title='Recém cadastrados'
					livros={livros}
				/>
				<Section title='Favoritos' livros={livros} />
				<Section title='Outros' livros={livros.toReversed()} />
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

			<View style={styles.fab}>
				<FloatingBtn
					icon='add'
					onPress={() => {
						navigation.navigate('Cadastro')
					}}
				/>
			</View>
		</Page>
	);
}
