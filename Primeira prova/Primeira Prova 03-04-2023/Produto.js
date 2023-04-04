"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(id, descricao, fornecedor, ValorUnitario) {
        this._ID = id;
        this._Descricao = descricao;
        this._Fornecedor = fornecedor;
        this._ValorUnitario = ValorUnitario;
    }
    get ID() {
        return this._ID;
    }
    set ID(id) {
        this._ID = id;
    }
    get Descricao() {
        return this._Descricao;
    }
    set Descricao(descricao) {
        this._Descricao = descricao;
    }
    get Fornecedor() {
        return this._Fornecedor;
    }
    set ValorUnitario(valorUnitario) {
        if (valorUnitario <= 0) {
            throw new Error('O valor de cada unidade não pode ser menor ou igual a zero.');
        }
        this._ValorUnitario = valorUnitario;
    }
    get ValorUnitario() {
        return this._ValorUnitario;
    }
}
exports.Produto = Produto;
