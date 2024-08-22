import { StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import theme from '../styles/themes/themeSwitcher';

interface FloatingBtnProps {
	icon: string;
	color?: string;
	onPress: () => void;
}

export default function FloatingBtn({
    color = theme.cores.destaque.main,
	...props
}: FloatingBtnProps) {
	return (
        <TouchableOpacity
            style={[styles.container, {backgroundColor: color}]}
            onPress={props.onPress}
        >
            <MaterialIcon
                name={props.icon}
                size={32}
                color='white'
            />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 65,
		height: 65,
        borderRadius: 65,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
	},
});
