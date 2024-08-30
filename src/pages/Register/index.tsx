import { StyleSheet, Text, TextInput, View } from 'react-native';
import styles from './styles.tsx';
import Page from '../../components/Page.tsx';
import Scroll from '../../components/Scroll.tsx';
import Input from './components/Input/index.tsx';
import Button from '../../components/Button.tsx';
import { useEffect, useState } from 'react';

export default function Register() {
	const [btSaveIcon, setBtSaveIcon] = useState('content-save');
	const [nomeLivro, setnomeLivro] = useState('');
	const [autor, setAutor] = useState('');
	const [numPag, setNumPag] = useState('');

	useEffect(() => {
		if (nomeLivro.length > 0) {
			setBtSaveIcon('content-save-alert-outline');
		} else {
			setBtSaveIcon('content-save');
		}
	}, [nomeLivro]);

	return (
		<Page title='Novo livro'>
			<Scroll style={{ flex: 1 }}>
				<Input
					value={nomeLivro}
					setValue={setnomeLivro}
					placeholder='Nome do livro'
					autoFocus
				/>
                
                <Input
                    value={autor}
                    setValue={setAutor}
                    placeholder='Autor'
                />
				
                <Input
					value={numPag}
					setValue={setNumPag}
					placeholder='Número de páginas'
					inputMode='numeric'
				/>

				<Button icon={btSaveIcon} title='Salvar' onPress={() => {}} />
			</Scroll>
		</Page>
	);
}
