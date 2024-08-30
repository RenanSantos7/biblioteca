import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { defaultGap } from '../constants';
import BtDrawer from './BtDrawer';
import FlexLine from './FlexLine';
import defaultStyles from '../styles/defaultStyles';
import theme from '../styles/themes/themeSwitcher';

interface PageProps {
	title: string;
	children: ReactNode;
}

const limitarTexto = (texto: string, limite: number) => {
	if (texto.length <= limite) {
		return texto;
	}
	return texto.substring(0, limite) + '...';
};

export default function Page(props: PageProps) {
	return (
		<View style={styles.containerPag}>
			<View style={styles.tituloContainer}>
				<FlexLine style={{ gap: defaultGap }}>
					<BtDrawer />
					<Text
						style={styles.titulo1}
						numberOfLines={1}
						ellipsizeMode='tail' // ou "head", "middle", "clip"
					>
						{limitarTexto(props.title, 20)}
					</Text>
				</FlexLine>
			</View>
			{props.children}
		</View>
	);
}

const styles = StyleSheet.create({
	...defaultStyles,
	containerPag: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: theme.cores.background.main,
    },
	tituloContainer: {
		// height: 150,
		justifyContent: 'flex-end',
		paddingVertical: 10,
	},
});
