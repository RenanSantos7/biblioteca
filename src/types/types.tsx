export interface ITheme {
	cores: {
		destaque: {
			main: string;
			light?: string;
			dark?: string;
			darker?: string;
		};
		texto: {
			main: string;
			light?: string;
			dark?: string;
			darker?: string;
		};
		background: {
			main: string;
			light?: string;
			dark?: string;
			darker?: string;
		};
		erro: {
			main: string;
			light?: string;
			dark?: string;
			darker?: string;
		};
		cinza: {
			100: string;
			200: string;
			300: string;
			400: string;
			500: string;
			600: string;
			700: string;
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
	status: 'Lido' | 'Não lido' | 'De lado' | 'Abandonado';
}
