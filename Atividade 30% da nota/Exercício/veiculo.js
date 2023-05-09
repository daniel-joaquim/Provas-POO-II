"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    _placa;
    _marca;
    _modelo;
    _tipoCombustivel;
    _tanqueLitrosMax;
    constructor(placa, marca, modelo, tipoCombustivel, tanqueLitrosMax) {
        this._placa = placa;
        this._marca = marca;
        this._modelo = modelo;
        this._tipoCombustivel = tipoCombustivel;
        this._tanqueLitrosMax = tanqueLitrosMax;
    }
    // getters e setters
    get placa() {
        return this._placa;
    }
    set placa(placa) {
        this._placa = placa;
    }
    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
    get modelo() {
        return this._modelo;
    }
    set modelo(modelo) {
        this._modelo = modelo;
    }
    get tipoCombustivel() {
        return this._tipoCombustivel;
    }
    set tipoCombustivel(tipoCombustivel) {
        this._tipoCombustivel = tipoCombustivel;
    }
    get tanqueLitrosMax() {
        return this._tanqueLitrosMax;
    }
    set tanqueLitrosMax(tanque) {
        this._tanqueLitrosMax = tanque;
    }
}
exports.Veiculo = Veiculo;
