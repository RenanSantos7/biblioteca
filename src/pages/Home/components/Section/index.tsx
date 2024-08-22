import {
	ActivityIndicator,
	Dimensions,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import { FlatList } from 'react-native';
import { ILivro } from '../../../../types/types';
import { defaultGap } from '../../../../constants';
import CardLivro from '../CardLivro';
import defaultStyles from '../../../../styles/defaultStyles';
import theme from '../../../../styles/themes/themeSwitcher';

interface SectionProps {
	title: string;
	livros: ILivro[];
}

export default function Section(props: SectionProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.titulo2}>{props.title}</Text>
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
				style={{
					height: 300,
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	...defaultStyles,
	container: {
		marginTop: 0,
	},
	voidSection: {
		alignItems: 'center',
		justifyContent: 'center',
		width: Dimensions.get('screen').width,
		height: 150,
		paddingRight: 80,
	},
});
