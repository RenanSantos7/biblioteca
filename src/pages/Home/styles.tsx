import { StyleSheet } from "react-native";
import defaultStyles from "../../styles/defaultStyles";
import theme from "../../styles/themes/themeSwitcher";

const styles = StyleSheet.create({
    ...defaultStyles,
    barraPesquisa: {
        backgroundColor: theme.cores.background.light,
        borderRadius: 12,
        elevation: 1,
        marginTop: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        gap: 10,
    },
    containerCentralizado: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 250,
    }
});

export default styles;