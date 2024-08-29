import { StyleSheet, Text, View } from 'react-native';
import { FAB } from '@rneui/themed';
import theme from '../../../../styles/themes/themeSwitcher';

interface BtCadastroProps {
    onPress?: (arg?: any) => any
}

export default function BtCadastro(props: BtCadastroProps) {
	return (
		<View>
		    <FAB
    			style={{ margin: 20, marginBottom: 75 }}
    			placement='right'
    			color={theme.cores.destaque.main}
                icon={{ name: 'add', color: '#fff' }}
                onPress={props.onPress}
    		/>
		</View>
	);
}
