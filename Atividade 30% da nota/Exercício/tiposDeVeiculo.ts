import { Veiculo } from "./veiculo";

export class Carro extends Veiculo {

    constructor(placa: string, marca: string, modelo: string, tipoCombustivel: string) {
        super(placa, marca, modelo, tipoCombustivel, 76);
    }
    
}
export class Caminhao extends Veiculo {

    constructor(placa: string, marca: string, modelo: string, tipoCombustivel: string) {
        super(placa, marca, modelo, tipoCombustivel, 440);
    }


}


