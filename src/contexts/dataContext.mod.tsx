import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from 'react';
import { ILivro } from '../types/types';
import { addDoc, collection, getDocs, onSnapshot } from 'firebase/firestore';
import db from '../firebase';

type LivroSemId = Omit<ILivro, 'id'>;

interface IDataContext {
	user: {
		name: string;
	};
	livros: ILivro[];
	cadastrarLivro: (
		isbn: string,
		titulo: string,
		autores: string[],
		editora: string,
		dataPub: string,
		descricao: string,
		categorias: string[],
		thumbnail: string,
		lingua: string,
		numPaginas?: number,
		formato?: 'digital' | 'físico',
	) => void;
	loading: boolean;
}

const usuario = {
	name: 'Renan',
};

const DataContext = createContext<IDataContext>(null);

export function DataProvider({ children }: { children: ReactNode }) {
	const [livros, setLivros] = useState<ILivro[]>([]);
	const [user, setUser] = useState(usuario);
	const [loading, setLoading] = useState(false);

	function getAllBooks() {
		getDocs(collection(db, 'livros')).then(snapshot => {
			let lista: any[] = [];
			snapshot.forEach(doc => {
				lista.push({
					id: doc.id,
					...doc.data(),
				});
			});
			setLivros(lista);
		});
	}

	async function cadastrarLivro(
		isbn: string,
		titulo: string,
		autores: string[],
		editora: string,
		dataPub: string,
		descricao: string,
		categorias: string[],
		thumbnail: string,
		lingua: string,
		numPaginas?: number,
		formato?: 'digital' | 'físico',
	) {
		const proxId = livros.reduce(
			(maxId, livro) => Math.max(maxId, Number(livro.id)),
			0,
		);
		const novoLivro: LivroSemId = {
			isbn: isbn,
			titulo: titulo,
			autores: autores,
			editora: editora,
			dataPub: dataPub,
			descricao: descricao,
			categorias: categorias,
			thumbnail: thumbnail,
			lingua: lingua,
			numPaginas: numPaginas,
			formato: formato,
			status: 'Não lido',
		};
		await addDoc(collection(db, 'livros'), novoLivro);
		setLivros(prev => [...prev, { id: String(proxId), ...novoLivro }]);
	}

	useEffect(() => {
		getAllBooks();
	}, []);

	useEffect(() => {
		if (livros) {
			setLoading(false);
		} else {
			setLoading(true);
		}
	}, [livros]);

	return (
		<DataContext.Provider
			value={{
				user,
				livros,
				cadastrarLivro,
				loading,
			}}
		>
			{children}
		</DataContext.Provider>
	);
}

export default function useDataContext() {
	return useContext(DataContext);
}
