"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estoque = void 0;
class Estoque {
    constructor(id, produto, quantidade) {
        this._ID = id;
        this._Produto = produto;
        this._Quantidade = quantidade >= 0 ? quantidade : 0;
    }
    get id() {
        return this._ID;
    }
    set id(valor) {
        this._ID = valor;
    }
    get produto() {
        return this._Produto;
    }
    set produto(valor) {
        this._Produto = valor;
    }
    get voz() {
        return this._Quantidade;
    }
    set voz(valor) {
        if (valor >= 0) {
            this._Quantidade = valor;
        }
    }
    ValorDoProdutoEmEstoque() {
        console.log(this._Produto._ValorUnitario * this._Quantidade);
    }
}
exports.Estoque = Estoque;
