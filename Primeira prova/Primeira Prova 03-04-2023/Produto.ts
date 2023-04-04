import { Fornecedor } from "./Fornecedor";

export class Produto {
    private _ID: number;
    private _Descricao: string;
    protected _Fornecedor: Fornecedor;
    public _ValorUnitario: number;

    constructor(id: number, descricao: string, fornecedor: Fornecedor, ValorUnitario: number) {
        this._ID = id;
        this._Descricao = descricao;
        this._Fornecedor = fornecedor;
        this._ValorUnitario = ValorUnitario;
    }

    get ID(): number {
        return this._ID;
    }

    set ID(id: number) {
        this._ID = id;
    }

    get Descricao(): string {
        return this._Descricao;
    }

    set Descricao(descricao: string) {
        this._Descricao = descricao;
    }

    get Fornecedor(): Fornecedor {
        return this._Fornecedor;
    }

    set ValorUnitario(valorUnitario: number) {
        if (valorUnitario <= 0) {
            throw new Error('O valor de cada unidade não pode ser menor ou igual a zero.');
        }
        this._ValorUnitario = valorUnitario;
    }

    get ValorUnitario(): number {
        return this._ValorUnitario;
    }
}

