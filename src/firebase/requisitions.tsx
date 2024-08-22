import { doc, getDoc } from 'firebase/firestore';
import db from './index.tsx';

export function getData() {
	getDoc(doc(db, 'livros', 'TBvbjcRJGtuJdoQCyf9d')).then(snapshot => {
		console.log(snapshot.data());
	});
}
