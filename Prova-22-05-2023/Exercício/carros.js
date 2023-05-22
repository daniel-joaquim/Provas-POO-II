"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const veiculo_1 = require("./veiculo");
class Carro extends veiculo_1.Veiculo {
    constructor(velocidade) {
        super(velocidade);
    }
}
exports.Carro = Carro;
