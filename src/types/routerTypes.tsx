import { ILivro } from "./types";

export type DrawerParams = {
    StackHome: undefined;
    Cadastro: undefined;
    Opcoes: undefined;
    Sobre: undefined;
}

export type StackHomeParams = {
    Início: undefined;
    Livro: { livro: ILivro };
}