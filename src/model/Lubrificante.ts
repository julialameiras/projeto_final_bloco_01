import { Produto } from "./Produto";

export class Lubrificante extends Produto{
    
    private _tamanho: number;
    private _sabor: string;

	constructor(id: number, nome: string, tipo: number, preco: number, tamanho: number, sabor: string) {
        super(id, nome, tipo, preco);
		this._tamanho = tamanho;
        this._sabor = sabor;
	}

	public get tamanho(): number {
		return this._tamanho;
	}

	public set tamanho(value: number) {
		this._tamanho = value;
	}

    public get sabor(): string {
		return this._sabor;
	}

	public set sabor(value: string) {
		this._sabor = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`\nTamanho: ${this._tamanho}`);
        console.log(`\nSabor: ${this._sabor}`);
    }
}