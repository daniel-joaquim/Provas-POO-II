import { OrdemCombustivel } from "./ordemCombustivel";

export class ControleOrdemCombustivel {
  private _ordensCombustivel: OrdemCombustivel[];

  constructor() {
    this._ordensCombustivel = [];
  }

  // método para adicionar uma ordem de combustível
  adicionarOrdemCombustivel(ordemCombustivel: OrdemCombustivel): void {
    this._ordensCombustivel.push(ordemCombustivel);
  }

  // método para listar as ordens de combustível
  listarOrdensCombustivel(): void {
    for (let ordemCombustivel of this._ordensCombustivel) {
      console.log(`ID: ${ordemCombustivel.id}`);
      console.log(`Veículo: ${ordemCombustivel.veiculo.constructor.name} - Marca: ${ordemCombustivel.veiculo.marca} - Modelo: ${ordemCombustivel.veiculo.modelo} - Placa: ${ordemCombustivel.veiculo.placa} - Tipo de Combustível: ${ordemCombustivel.veiculo.tipoCombustivel}`);
      console.log('Quantidade de litros abastecidos: ' + (ordemCombustivel.qtdLitros || ordemCombustivel.qtdLitros == 0 ? ordemCombustivel.qtdLitros : 'Quantidade de combustível excedente! Limite para este veículo: ' + ordemCombustivel.veiculo.tanqueLitrosMax));
      console.log(`Data da ordem: ${ordemCombustivel.data.toLocaleString()}`);
      console.log('------------------------------------------------------------------');
    }
  }

  // método para obter a quantidade total de litros abastecidos
  obterTotalLitrosAbastecidos(): number {
    let totalLitros = 0;
    for (let ordemCombustivel of this._ordensCombustivel) {
      totalLitros += ordemCombustivel.qtdLitros ? ordemCombustivel.qtdLitros : 0;
    }
    return totalLitros;
  }
}
