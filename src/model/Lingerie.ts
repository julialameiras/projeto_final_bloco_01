import { Produto } from "./Produto";

export class Lingerie extends Produto{
    
    private _tamanho: number;
    private _modelo: string; //duas opções de modelo: boy ou biquini; como acrescentar ao codigo?
    private _cor: string;

	constructor(id: number, nome: string, tipo: number, preco: number, tamanho: number, modelo: string, cor: string) {
        super(id, nome, tipo, preco);
		this._tamanho = tamanho;
        this._modelo = modelo;
        this._cor = cor;
	}

	public get tamanho(): number {
		return this._tamanho;
	}

	public set tamanho(value: number) {
		this._tamanho = value;
	}

    public get modelo(): string {
		return this._modelo;
	}

	public set modelo(value: string) {
		this._modelo = value;
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
        console.log(`\nModelo: ${this._modelo}`);
        console.log(`\nCor: ${this._cor}`);
    }
}