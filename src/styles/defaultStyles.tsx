import { StyleSheet } from "react-native";
import theme from "./themes/themeSwitcher";

const defaultStyles = StyleSheet.create({
    appContainer: {
        flex: 1,
        // backgroundColor: theme.cores.background.main,
    },
    titulo1: {
        fontSize: 32,
        color: theme.cores.destaque.dark,
    },
    titulo2: {
        fontSize: 20,
        fontWeight: '600',
        color: theme.cores.destaque.darker,
        marginBottom: 18
    },
    titulo3: {
        fontSize: 14,
        fontWeight: '500',
        color: theme.cores.texto.dark
    },
    texto: {
        fontSize: 12,
        color: theme.cores.texto.main
    }
});

export default defaultStyles;