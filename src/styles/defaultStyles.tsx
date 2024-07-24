import { StyleSheet } from "react-native";
import theme from "./themes/themeSwitcher";

const defaultStyles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: theme.cores.background.main,
    },
    containerPag: {
        flex: 1,
        paddingHorizontal: 15,
    },
    titulo1: {
        fontSize: 32,
        color: theme.cores.destaque.dark,
    },
    titulo2: {
        fontSize: 16,
        fontWeight: '500',
        color: theme.cores.texto.dark
    },
    texto: {
        fontSize: 14,
        color: theme.cores.texto.main
    }
});

export default defaultStyles;