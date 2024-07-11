import { Produto } from "../model/Produto";

export interface ProdutoRepository{

    // Métodos do CRUD

    listarTodos(): void;
    listarPorId(id: number): void;
    cadastrar(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(id: number): void;

}