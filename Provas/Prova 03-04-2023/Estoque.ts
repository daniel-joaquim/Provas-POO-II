import { Produto } from "./Produto";

export class Estoque {
    private _ID: number;
    private _Produto: Produto;
    public _Quantidade: number;

    constructor(id: number, produto: Produto, quantidade: number) {
        this._ID = id;
        this._Produto = produto;
        this.quantidade = quantidade;
    }

    public get id(): number {
        return this._ID;
    }

    public set id(id: number) {
        this._ID = id;
    }

    public get produto(): Produto {
        return this._Produto;
    }

    public set produto(produto: Produto) {
        this._Produto = produto;
    }

    public get quantidade(): number {
        return this._Quantidade;
    }

    public set quantidade(quantidade: number) {
        if (quantidade >= 0) {
            this._Quantidade = quantidade;
        } else {
            throw new Error('A quantidade do estoque não pode ser menor que 0.');
        }
    }

    public ValorDoProdutoEmEstoque() {
        console.log(this._Produto.valorUnitario * this.quantidade);
    }
}
