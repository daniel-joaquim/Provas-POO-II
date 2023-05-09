export abstract class Veiculo {

  protected _placa: string;
  protected _marca: string;
  protected _modelo: string;
  protected _tipoCombustivel: string;
  protected _tanqueLitrosMax: number;

  constructor(placa: string, marca: string, modelo: string, tipoCombustivel: string, tanqueLitrosMax: number) {
    this._placa = placa;
    this._marca = marca;
    this._modelo = modelo;
    this._tipoCombustivel = tipoCombustivel;
    this._tanqueLitrosMax = tanqueLitrosMax;
  }

  // getters e setters
  get placa(): string {
    return this._placa;
  }

  set placa(placa: string) {
    this._placa = placa;
  }

  get marca(): string {
    return this._marca;
  }

  set marca(marca: string) {
    this._marca = marca;
  }

  get modelo(): string {
    return this._modelo;
  }

  set modelo(modelo: string) {
    this._modelo = modelo;
  }

  get tipoCombustivel(): string {
    return this._tipoCombustivel;
  }

  set tipoCombustivel(tipoCombustivel: string) {
    this._tipoCombustivel = tipoCombustivel;
  }

  get tanqueLitrosMax(): number {
    return this._tanqueLitrosMax;
  }

  set tanqueLitrosMax(tanque: number) {
    this._tanqueLitrosMax = tanque;
  }
}
