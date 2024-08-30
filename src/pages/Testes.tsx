import { StyleSheet, Text, View } from 'react-native';
import Page from '../components/Page';
import defaultStyles from '../styles/defaultStyles';

export default function Testes() {
    return (
        <Page title='Testes'>
            <Text style={styles.texto}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, culpa. Libero ipsa quia earum quo excepturi, praesentium corporis perferendis distinctio magni reprehenderit impedit dicta dignissimos blanditiis natus, laboriosam saepe eveniet.</Text>
        </Page>
    );
};

const styles = StyleSheet.create({
    ...defaultStyles,
    container: {
        flex: 1,
    },
});
