import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import IonIcon from 'react-native-vector-icons/Ionicons'

import theme from '../styles/themes/themeSwitcher'

import Home from '../pages/Home/Home'
import SettingsPage from '../pages/Settings/SettingsPage'

const Tab = createBottomTabNavigator()

export default function TabRouter() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName='Início'
				screenOptions={{
					headerShown: false,
					tabBarActiveTintColor: theme.cores.destaque.main,
                    tabBarInactiveTintColor: theme.cores.destaque.main,
                    tabBarStyle: {
                        backgroundColor: theme.cores.background.light
                    }
				}}
			>
				<Tab.Screen
					name='Início'
					component={Home}
					options={{
						tabBarIcon: ({ focused, color }) => {
							if (focused) {
								return (
									<MaterialComIcon
										name='home-variant'
										color={color}
										size={28}
									/>
								)
							}
							return (
								<MaterialComIcon
									name='home-variant-outline'
									color={color}
									size={28}
								/>
							)
						},
					}}
				/>

                <Tab.Screen
                    name='Opções'
                    component={SettingsPage}
                    options={{
                        tabBarIcon: ({ focused, color }) => {
							if (focused) {
								return (
									<IonIcon
										name='settings-sharp'
										color={color}
										size={28}
									/>
								)
							}
							return (
								<IonIcon
									name='settings-outline'
									color={color}
									size={28}
								/>
							)
						},
                    }}
                />
			</Tab.Navigator>
		</NavigationContainer>
	)
}
