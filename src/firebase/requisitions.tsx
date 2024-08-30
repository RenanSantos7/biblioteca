import { addDoc, collection, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { Dispatch, SetStateAction } from 'react';

import db from './index.tsx';

export function getAllData(
	data: string,
	setData: Dispatch<SetStateAction<any>>
) {
	onSnapshot(collection(db, 'users'), snapshot => {
		let lista: any[] = [];
		snapshot.forEach(doc => {
			lista.push({
				id: doc.id,
				nome: doc.data()?.nome,
				idade: doc.data()?.idade,
				cargo: doc.data()?.cargo,
			});
		});
		setData(lista);
	})
}
