import { Veiculo } from "./veiculo";

export class OrdemCombustivel {

  private _veiculo: Veiculo;
  private _qtdLitros: number;
  private _data: Date;
  private _id: number;

  constructor(veiculo: Veiculo, qtdLitros: number, data: Date, id: number) {
    this._veiculo = veiculo;
    this.qtdLitros = qtdLitros;
    this._data = data;
    this._id = id;
  }

  // getters e setters
  get veiculo(): Veiculo {
    return this._veiculo;
  }

  set veiculo(veiculo: Veiculo) {
    this._veiculo = veiculo;
  }

  get qtdLitros(): number {
    return this._qtdLitros;
  }

  set qtdLitros(qtdLitros: number) {
    if (qtdLitros <= this.veiculo.tanqueLitrosMax) {
      this._qtdLitros = qtdLitros;
    }
  }

  get data(): Date {
    return this._data;
  }

  set data(data: Date) {
    this._data = data;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }
}
