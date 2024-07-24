import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import theme from '../styles/themes/themeSwitcher';

import Home from '../pages/Home/Home';
import SettingsPage from '../pages/Settings/SettingsPage';
import StackHome from './StackHome';

const Drawer = createDrawerNavigator();

export default function DrawerRouter() {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				initialRouteName='Início'
				screenOptions={{
					headerShown: false,
					drawerStyle: {
						backgroundColor: theme.cores.background.light,
					},
					drawerActiveBackgroundColor: theme.cores.destaque.light,
					drawerActiveTintColor: theme.cores.destaque.dark,
				}}
			>
				<Drawer.Screen
					name='StackHome'
					component={StackHome}
					options={{
						drawerIcon: ({ focused, color, size }) => {
							if (focused) {
								return (
									<MaterialComIcon
										name='home-variant'
										color={color}
										size={size}
									/>
								);
							}
							return (
								<MaterialComIcon
									name='home-variant-outline'
									color={color}
									size={size}
								/>
							);
						},
					}}
				/>

				<Drawer.Screen
					name='Opções'
					component={SettingsPage}
					options={{
						drawerIcon: ({ focused, color, size }) => {
							if (focused) {
								return (
									<IonIcon
										name='settings-sharp'
										color={color}
										size={size}
									/>
								);
							}
							return (
								<IonIcon
									name='settings-outline'
									color={color}
									size={size}
								/>
							);
						},
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
