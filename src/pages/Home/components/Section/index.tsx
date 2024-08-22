import { StyleSheet, Text, View } from 'react-native';
import { ReactNode } from 'react';

import defaultStyles from '../../../../styles/defaultStyles';

interface SectionProps {
	title: string;
	children: ReactNode;
}

export default function Section(props: SectionProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.titulo2}>{props.title}</Text>
			{props.children}
		</View>
	);
}

const styles = StyleSheet.create({
	...defaultStyles,
	container: {
		marginTop: 10,
	},
});
