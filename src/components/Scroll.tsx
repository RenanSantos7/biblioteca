import { ReactNode } from 'react';
import { ScrollView, View, ViewStyle } from 'react-native';

interface ScrollProps {
	children: ReactNode;
	style?: ViewStyle
}

export default function Scroll({ children, style }: ScrollProps) {
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={{
				borderRadius: 24,
				...style
			}}
		>
			<View
				style={{
					gap: 18
				}}
			>
				{children}
			</View>
		</ScrollView>
	);
}
