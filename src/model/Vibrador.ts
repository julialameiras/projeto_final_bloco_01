import { Produto } from "./Produto";

export class Vibrador extends Produto{
    
    private _categoria: string; //bullets ou dildos (como acrescentar essa informação?)

	constructor(id: number, nome: string, tipo: number, preco: number, categoria: string) {
        super(id, nome, tipo, preco);
		this._categoria = categoria;
	}

	public get categoria(): string {
		return this._categoria;
	}

	public set categoria(value: string) {
		this._categoria = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`\nCategoria: ${this._categoria}`);
    }
}