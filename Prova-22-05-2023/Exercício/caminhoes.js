"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caminhao = void 0;
const veiculo_1 = require("./veiculo");
class Caminhao extends veiculo_1.Veiculo {
    constructor(velocidade) {
        super(velocidade);
    }
}
exports.Caminhao = Caminhao;
