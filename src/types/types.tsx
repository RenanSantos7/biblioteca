export interface ITheme {
	cores: {
		destaque: {
			main: string;
			light?: string;
			dark?: string;
		};
		texto: {
			main: string;
			light?: string;
			dark?: string;
		};
		background: {
			main: string;
			light?: string;
			dark?: string;
		};
		erro: {
			main: string;
			light?: string;
			dark?: string;
		};
	};
}

export interface ILivro {
    id: string;
	isbn: string;
	titulo: string;
	autores: string[];
	editora: string;
	dataPub: string;
	descricao: string;
	categorias: string[];
	thumbnail: string;
	lingua: string;
	numPaginas?: number;
	formato?: 'digital' | 'físico';
}
