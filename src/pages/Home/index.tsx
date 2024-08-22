import { useState } from 'react';

import BarraPesquisa from './components/BarraPesquisa';
import FlexLine from '../../components/FlexLine';
import Page from '../../components/Page';
import Scroll from '../../components/Scroll';
import styles from './styles';
import useDataContext from '../../contexts/dataContext';
import Favoritos from './components/SecFavoritos';
import Section from './components/Section';

export default function Home() {
	const { livros, user } = useDataContext();
	const [pesquisa, setPesquisa] = useState('');

	return (
		<Page title={`Olá,  ${user.name}`}>
			<Scroll style={{ flex: 1 }}>
				{/* <Recem livros={livros} /> */}
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
				{/* <LeitorCodigo /> */}
			</FlexLine>
		</Page>
	);
}
