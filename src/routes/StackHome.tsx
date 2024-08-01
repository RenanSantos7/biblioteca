import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Livro from "../pages/Livro";
import { StackHomeParams } from "../types/routerTypes";

const Stack = createNativeStackNavigator<StackHomeParams>();

export default function StackHome() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Início"
                component={Home}
            />
            
            <Stack.Screen
                name="Livro"
                component={Livro}
            />
        </Stack.Navigator>
    )
};
