"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caminhao = exports.Carro = void 0;
const veiculo_1 = require("./veiculo");
class Carro extends veiculo_1.Veiculo {
    constructor(placa, marca, modelo, tipoCombustivel) {
        super(placa, marca, modelo, tipoCombustivel, 76);
    }
}
exports.Carro = Carro;
class Caminhao extends veiculo_1.Veiculo {
    constructor(placa, marca, modelo, tipoCombustivel) {
        super(placa, marca, modelo, tipoCombustivel, 440);
    }
}
exports.Caminhao = Caminhao;
