import { Produto } from "./Produto";

export class Estoque {
    private _ID: number;
    private _Produto: Produto;
    private _Quantidade: number;

    constructor(id: number, produto: Produto, quantidade: number) {
        this._ID = id;
        this._Produto = produto;
        //assim e válido
        //this._Quantidade = quantidade >= 0 ? quantidade : 0;
        //mas o correto seria assim
        this.quantidade = quantidade;
    }

    public get id(): number {
        return this._ID;
    }

    public set id(valor: number) {
        this._ID = valor;
    }

    public get produto(): Produto {
        return this._Produto;
    }

    public set produto(valor: Produto) {
        this._Produto = valor;
    }
    
    public get quantidade(): number {
        return this._Quantidade;
    }

    public set quantidade(valor: number) {
        if (valor >= 0) {
            this._Quantidade = valor;
        }else{
            console.log('A quantidade doestoque não pode ser menor que 0.');
        }
    }

    public ValorDoProdutoEmEstoque() {
        console.log(this._Produto._ValorUnitario * this._Quantidade);
    }
}
