"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    velocidade;
    constructor(velocidade) {
        this.velocidade = velocidade;
    }
    getVelocidade() {
        return this.velocidade;
    }
    verificarVelocidade() {
        if (this.velocidade > 100 + (100 * 0.05)) {
            console.log("Limite de velocidade excedido! Você foi multado!");
        }
        else if (this.velocidade > 100 - (100 * 0.05)) {
            console.log("Limite de velocidade próximo. Reduza a velocidade.");
        }
        else {
            console.log("Velocidade dentro do limite permitido.");
        }
    }
}
exports.Veiculo = Veiculo;
