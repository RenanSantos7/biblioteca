import {
	ActivityIndicator,
	FlatList,
	StyleSheet,
	View,
} from 'react-native';

import { defaultGap } from '../../../../constants.tsx';
import { ILivro } from '../../../../types/types';
import homeStyles from '../../styles.tsx';
import theme from '../../../../styles/themes/themeSwitcher.tsx';
import CardLivro from '../CardLivro';
import Section from '../Section';

interface RecemProps {
	livros: ILivro[];
}

export default function Recem(props: RecemProps) {
	return (
		<Section title='Recém cadastrados'>
			<FlatList
				data={props.livros}
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
