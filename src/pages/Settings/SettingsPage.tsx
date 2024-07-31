import { StyleSheet, Text, View } from 'react-native';
import defaultStyles from '../../styles/defaultStyles';
import FlexLine from '../../components/FlexLine';
import BtDrawer from '../../components/BtDrawer';
import Page from '../../components/Page';
import Button from '../../components/Button';

interface SettingsPageProps {
    
};

export default function SettingsPage({}: SettingsPageProps) {
    return (
        <Page title='Configurações'>
            <Text style={styles.texto}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum porro perferendis, consectetur natus id dolores quo corporis quis fuga impedit odit illum. Nulla sunt, voluptates fugiat ipsa modi laborum impedit.</Text>

            <Button title={'Botão'} onPress={() => {}} />
        </Page>
    );
};

const styles = StyleSheet.create({
    ...defaultStyles,
});