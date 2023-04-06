"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(id, descricao, fornecedor, ValorUnitario) {
        this._ID = id;
        this._Descricao = descricao;
        this._Fornecedor = fornecedor;
        // assim já e válido
        //this._ValorUnitario = ValorUnitario > 0 ? ValorUnitario : 1 ;
        // mas o coreto seria assim
        this.ValorUnitario = ValorUnitario;
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
            // deixei comentado pra poder testar todo codigo de uma vez so
            //throw new Error('O valor de cada unidade não pode ser menor ou igual a zero.');
            console.log('O valor de cada unidade não pode ser menor ou igual a zero.');
        }
        else {
            this._ValorUnitario = valorUnitario;
        }
    }
    get ValorUnitario() {
        return this._ValorUnitario;
    }
}
exports.Produto = Produto;
