import { StyleSheet } from "react-native";
import defaultStyles from "../../styles/defaultStyles";

export const styles = StyleSheet.create({
    ...defaultStyles,
    container: {
        flex: 1,
    },
    tituloContainer: {
        height: 150,
        justifyContent: 'flex-end',
        paddingHorizontal: 15,
        paddingVertical: 25,
    }
});