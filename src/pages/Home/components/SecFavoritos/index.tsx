import {
	ActivityIndicator,
	Dimensions,
	FlatList,
	StyleSheet,
	View,
} from 'react-native';

import { defaultGap } from '../../../../constants.tsx';
import { ILivro } from '../../../../types/types.tsx';
import homeStyles from '../../styles.tsx';
import theme from '../../../../styles/themes/themeSwitcher.tsx';
import CardLivro from '../CardLivro/index.tsx';
import Section from '../Section/index.tsx';

interface FavoritosProps {
	livros: ILivro[];
}

export default function Favoritos(props: FavoritosProps) {
	return (
		<Section title='Favoritos'>
			<FlatList
				data={props.livros}
				renderItem={({ item }) => <CardLivro livro={item} />}
				showsHorizontalScrollIndicator={false}
				ListEmptyComponent={() => (
					<View style={styles.voidSection}>
						<ActivityIndicator
							color={theme.cores.destaque.main}
							size='large'
						/>
					</View>
				)}
				horizontal
				ItemSeparatorComponent={() => (
					<View style={{ width: defaultGap }} />
				)}
			/>
		</Section>
	);
}

const styles = StyleSheet.create({
	...homeStyles,
});
