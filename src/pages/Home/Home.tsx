import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { styles } from './HomeStyles'
import useDataContext from '../../contexts/dataContext'
import CardLivro from './components/CardLivro'
import BarraPesquisa from './components/BarraPesquisa'
import LeitorCodigo from './components/LeitorCodigo'
import FlexLine from '../../components/FlexLine'
import { useState } from 'react'
import theme from '../../styles/themes/themeSwitcher'
import BtDrawer from '../../components/BtDrawer'
import { defaultGap } from '../../constants'
import Page from '../../components/Page'

interface HomeProps {}

export default function Home({ }: HomeProps) {
    const { livros, user } = useDataContext();
    const [pesquisa, setPesquisa] = useState('');

	return (
		<Page title={`Olá,  ${user.name}`}>           
			<FlatList
				data={livros}
				renderItem={({ item }) => <CardLivro livro={item} />}
				numColumns={2}
				columnWrapperStyle={{
					gap: defaultGap,
				}}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.containerCentralizado}>
                        <ActivityIndicator color={theme.cores.destaque.main} size='large' />
                    </View>
                )}
			/>
			
			<FlexLine
				justifyContent='space-between'
				style={styles.barraPesquisa}
			>
				<BarraPesquisa valor={pesquisa} setValor={setPesquisa} />
				<LeitorCodigo />
			</FlexLine>
		</Page>
	)
}
