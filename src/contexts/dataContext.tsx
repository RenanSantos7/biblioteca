import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ILivro } from '../types/types';
import { listaLivros } from './livros';

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
}

const usuario = {
	name: 'Renan',
};

const DataContext = createContext<IDataContext>(null);

export function DataProvider({ children }: { children: ReactNode }) {
	const [livros, setLivros] = useState<ILivro[]>(listaLivros);
	const [user, setuser] = useState(usuario);

	function cadastrarLivro(
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
		const novoLivro:ILivro = {
			id: `${proxId + 1}`,
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
			status: 'Não lido'
		};
		setLivros(prev => [...prev, novoLivro]);
	}

	useEffect(() => {
		
	}, []);

	return (
		<DataContext.Provider value={{
			user,
			livros, cadastrarLivro
		}}>
			{children}
		</DataContext.Provider>
	);
}

export default function useDataContext() {
	return useContext(DataContext);
}
