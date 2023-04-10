"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estoque = void 0;
class Estoque {
    _ID;
    _Produto;
    _Quantidade;
    constructor(id, produto, quantidade) {
        this._ID = id;
        this._Produto = produto;
        this.quantidade = quantidade;
    }
    get id() {
        return this._ID;
    }
    set id(id) {
        this._ID = id;
    }
    get produto() {
        return this._Produto;
    }
    set produto(produto) {
        this._Produto = produto;
    }
    get quantidade() {
        return this._Quantidade;
    }
    set quantidade(quantidade) {
        if (quantidade >= 0) {
            this._Quantidade = quantidade;
        }
        else {
            try {
                throw new Error('A quantidade do estoque não pode ser menor que 0.');
            }
            catch (e) {
                console.error(e.message);
            }
        }
    }
    ValorDoProdutoEmEstoque() {
        console.log(this._Produto.valorUnitario * this.quantidade);
    }
}
exports.Estoque = Estoque;
