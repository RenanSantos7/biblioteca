import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import theme from '../styles/themes/themeSwitcher';

import StackHome from './StackHome';
import SettingsPage from '../pages/Settings/SettingsPage';
import About from '../pages/About/About';
import { DrawerParams } from '../types/routerTypes';
import Cadastro from '../pages/Cadastro';

const Drawer = createDrawerNavigator<DrawerParams>();

export default function DrawerRouter() {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				initialRouteName='StackHome'
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
					name='Cadastro'
					component={Cadastro}
					options={{
						drawerIcon: ({ focused, color, size }) => {
							if (focused) {
								return (
									<MaterialIcon
										name='add-circle'
										color={color}
										size={size}
									/>
								);
							}
							return (
								<MaterialIcon
									name='add-circle-outline'
									color={color}
									size={size}
								/>
							);
						},
					}}
				/>

				<Drawer.Screen
					name='Opcoes'
					component={SettingsPage}
					options={{
						title: 'Opções',
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
