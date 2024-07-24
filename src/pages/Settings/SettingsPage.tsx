import { StyleSheet, Text, View } from 'react-native';
import defaultStyles from '../../styles/defaultStyles';
import FlexLine from '../../components/FlexLine';
import BtDrawer from '../../components/BtDrawer';

interface SettingsPageProps {
    
};

export default function SettingsPage({}: SettingsPageProps) {
    return (
        <View style={styles.containerPag}>
            <FlexLine style={{gap: 15}}>
                <BtDrawer />
                <Text style={styles.titulo1}>Configurações</Text>
            </FlexLine>
            <Text style={styles.texto}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum porro perferendis, consectetur natus id dolores quo corporis quis fuga impedit odit illum. Nulla sunt, voluptates fugiat ipsa modi laborum impedit.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    ...defaultStyles,
});