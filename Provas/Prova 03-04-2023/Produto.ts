import { Fornecedor } from "./Fornecedor";

export class Produto {
    private _ID: number;
    private _Descricao: string;
    protected _Fornecedor: Fornecedor;
    private _valorUnitario: number;

    constructor(id: number, descricao: string, fornecedor: Fornecedor, ValorUnitario: number) {
        this._ID = id;
        this._Descricao = descricao;
        this._Fornecedor = fornecedor;
        this.valorUnitario = ValorUnitario;
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

    set valorUnitario(ValorUnitario: number) {
        if (ValorUnitario <= 0) {
           throw new Error('O valor de cada unidade não pode ser menor ou igual a zero.');
        } else {
            this._valorUnitario = ValorUnitario;
        }
    }

    get valorUnitario(): number {
        return this._valorUnitario;
    }
}

