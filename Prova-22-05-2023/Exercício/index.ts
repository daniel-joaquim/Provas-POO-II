import { Carro } from "./carros";
import { Moto } from "./motos";
import { Caminhao } from "./caminhoes";

const carro1 = new Carro(120);
const moto1 = new Moto(103);
const caminhao1 = new Caminhao(80);

carro1.verificarVelocidade();
moto1.verificarVelocidade();
caminhao1.verificarVelocidade();