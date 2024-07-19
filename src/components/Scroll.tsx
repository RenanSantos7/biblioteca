import { ReactNode } from 'react';
import { ScrollView, View } from 'react-native';

interface ScrollProps {
	children: ReactNode;
}

export default function Scroll({ children }: ScrollProps) {
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={{
				borderRadius: 24,
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
