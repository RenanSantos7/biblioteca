import { ReactNode } from 'react'
import { View, ViewStyle } from 'react-native'

interface FlexLineProps {
	children: ReactNode
	justifyContent?:
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
	alignItems?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline'
	wrap?: 'wrap' | 'nowrap'
	style?: ViewStyle
}

export default function FlexLine({
	justifyContent = 'flex-start',
	alignItems = 'center',
	wrap = 'wrap',
	children,
	style,
}: FlexLineProps) {
	return (
		<View
			style={[
				{
					flexDirection: 'row',
					flexWrap: wrap,
					justifyContent: justifyContent,
					alignItems: alignItems,
				},
				style,
			]}
		>
			{children}
		</View>
	)
}
