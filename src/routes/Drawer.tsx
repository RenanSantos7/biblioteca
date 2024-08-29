import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import theme from '../styles/themes/themeSwitcher';

import StackHome from './StackHome';
import SettingsPage from '../pages/Settings/SettingsPage';
import About from '../pages/About/About';
import Register from '../pages/Register';

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
						title: 'Início',
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
					name='Novo Livro'
					component={Register}
					options={{
						drawerIcon: ({ focused, color, size }) => {
							if (focused) {
								return (
									<MaterialIcon
										name='add'
										color={color}
										size={size}
									/>
								);
							}
							return (
								<MaterialIcon
									name='add'
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

				<Drawer.Screen
					name='Sobre'
					component={About}
					options={{
						drawerIcon: ({ focused, color, size }) => {
							if (focused) {
								return (
									<MaterialComIcon
										name='information'
										color={color}
										size={size}
									/>
								);
							}
							return (
								<MaterialComIcon
									name='information-outline'
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
