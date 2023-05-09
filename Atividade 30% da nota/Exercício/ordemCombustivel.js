"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdemCombustivel = void 0;
class OrdemCombustivel {
    _veiculo;
    _qtdLitros;
    _data;
    _id;
    constructor(veiculo, qtdLitros, data, id) {
        this._veiculo = veiculo;
        this.qtdLitros = qtdLitros;
        this._data = data;
        this._id = id;
    }
    // getters e setters
    get veiculo() {
        return this._veiculo;
    }
    set veiculo(veiculo) {
        this._veiculo = veiculo;
    }
    get qtdLitros() {
        return this._qtdLitros;
    }
    set qtdLitros(qtdLitros) {
        if (qtdLitros <= this.veiculo.tanqueLitrosMax) {
            this._qtdLitros = qtdLitros;
        }
    }
    get data() {
        return this._data;
    }
    set data(data) {
        this._data = data;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
}
exports.OrdemCombustivel = OrdemCombustivel;
