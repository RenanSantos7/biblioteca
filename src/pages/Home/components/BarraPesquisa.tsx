import { Dispatch, SetStateAction } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6'

import defaultStyles from '../../../styles/defaultStyles';
import theme from '../../../styles/themes/themeSwitcher';
import FlexLine from '../../../components/FlexLine';

interface BarraPesquisaProps {
    valor: string;
    setValor: Dispatch<SetStateAction<string>>;
};

export default function BarraPesquisa({valor, setValor}: BarraPesquisaProps) {
    return (
        <FlexLine style={styles.container}>
            <FontAwesomeIcon
                name='magnifying-glass'
            />
            <TextInput
                value={valor}
                onChangeText={text => setValor(text)}
                cursorColor={theme.cores.texto.dark}
                selectionColor={theme.cores.destaque.light}
                style={styles.input}
                placeholder='Pesquise aqui por um livro...'
                selectTextOnFocus
            />
        </FlexLine>
    );
};

const styles = StyleSheet.create({
    ...defaultStyles,
    container: {
        flex: 1,
    },
    input: {
        fontSize: 16,
        padding: 8
    }
});