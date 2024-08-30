import { StyleSheet, Text, TextInput, View } from 'react-native';
import theme from '../../../../styles/themes/themeSwitcher';
import { Dispatch, SetStateAction } from 'react';

interface InputProps {
	placeholder: string;
    autoFocus?: boolean;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
	inputMode?:
		| 'none'
		| 'text'
		| 'decimal'
		| 'numeric'
		| 'tel'
		| 'search'
		| 'email'
		| 'url';
}

export default function Input({ inputMode = 'text', ...props }: InputProps) {
	return (
		<TextInput
			placeholder={props.placeholder}
			style={[styles.input, { borderColor: theme.cores.cinza[400] }]}
			cursorColor={theme.cores.cinza[100]}
			selectionColor={theme.cores.destaque.light}
			selectionHandleColor={theme.cores.destaque.main}
			autoFocus={props.autoFocus}
            inputMode={inputMode}
            value={props.value}
            onChangeText={text => props.setValue(text)}
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: 'red',
		padding: 5,
		borderRadius: 8,
	},
});
