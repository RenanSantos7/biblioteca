import { StyleSheet, TouchableHighlight } from 'react-native'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import FontAwesome6Icon from '@expo/vector-icons/FontAwesome6'
import theme from '../styles/themes/themeSwitcher'

export default function BtDrawer() {
	const navigation = useNavigation()
	return (
		<TouchableHighlight
			onPress={() => {
				navigation.dispatch(DrawerActions.openDrawer())
			}}
			style={styles.botao}
			underlayColor={theme.cores.destaque.light}
			activeOpacity={0.2}
		>
			<FontAwesome6Icon name='bars' size={24} />
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	botao: {
		// borderWidth: 1,
		// borderColor: 'red',
		padding: 4,
		borderRadius: 12,
		justifyContent: 'center',
		alignItems: 'center'
	}
});