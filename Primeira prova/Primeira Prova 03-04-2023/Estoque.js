"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estoque = void 0;
class Estoque {
    constructor(id, produto, quantidade) {
        this._ID = id;
        this._Produto = produto;
        //assim e válido
        //this._Quantidade = quantidade >= 0 ? quantidade : 0;
        //mas o correto seria assim
        this.quantidade = quantidade;
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
    get quantidade() {
        return this._Quantidade;
    }
    set quantidade(valor) {
        if (valor >= 0) {
            this._Quantidade = valor;
        }
        else {
            console.log('A quantidade doestoque não pode ser menor que 0.');
        }
    }
    ValorDoProdutoEmEstoque() {
        console.log(this._Produto._ValorUnitario * this._Quantidade);
    }
}
exports.Estoque = Estoque;
