export default class Livro {
	private static nextId: number = 0;
	private _id: string;
	public isbn: string;
	public titulo: string;
	public autores: string[];
	public editora: string;
	public dataPub: string;
	public descricao: string;
	public categorias: string[];
	public thumbnail: string;
	public lingua: string;
	public numPaginas?: number;
	public formato?: 'digital' | 'físico';

	constructor(
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
		formato?: 'digital' | 'físico'
	) {
		this._id = String(Livro.nextId++);
		this.isbn = isbn;
		this.titulo = titulo;
		this.autores = autores;
		this.editora = editora;
		this.dataPub = dataPub;
		this.descricao = descricao;
		this.categorias = categorias;
		this.thumbnail = thumbnail;
		this.lingua = lingua;
		this.numPaginas = numPaginas;
		this.formato = formato;
	}

	get id() {
		return this._id
	}
}
