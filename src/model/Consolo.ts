import { Produto } from "./Produto";

export class Consolo extends Produto{
    
    private _tamanho: number;
    private _cor: string;

	constructor(id: number, nome: string, tipo: number, preco: number, tamanho: number, cor: string) {
        super(id, nome, tipo, preco);
		this._tamanho = tamanho;
        this._cor = cor;
	}

	public get tamanho(): number {
		return this._tamanho;
	}

	public set tamanho(value: number) {
		this._tamanho = value;
	}

    public get cor(): string {
		return this._cor;
	}

	public set cor(value: string) {
		this._cor = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`\nTamanho: ${this._tamanho}`);
        console.log(`\nCor: ${this._cor}`);
    }
}