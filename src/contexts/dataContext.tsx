import { createContext, ReactNode, useContext, useState } from 'react'
import { ILivro } from '../types/types'
import { listaLivros } from './livros'

interface IDataContext {
	livros: ILivro[]
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
	) => void
}

const DataContext = createContext<IDataContext>(null)

export function DataProvider({ children }: { children: ReactNode }) {
	const [livros, setLivros] = useState(listaLivros)

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
		)
		const novoLivro = {
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
		}
		setLivros(prev => [...prev, novoLivro])
	}

	return (
		<DataContext.Provider value={{ livros, cadastrarLivro }}>
			{children}
		</DataContext.Provider>
	)
}

export default function useDataContext() {
	return useContext(DataContext)
}


