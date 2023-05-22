export class Veiculo {

  private velocidade: number;

  constructor(velocidade: number) {
    this.velocidade = velocidade;
  }

  public getVelocidade(): number {
    return this.velocidade;
  }

  public verificarVelocidade(): void {
    if (this.velocidade > 100 + (100 * 0.05)) {
      console.log("Limite de velocidade excedido! Você foi multado!");
    } else if (this.velocidade > 100 - (100 * 0.05)) {
      console.log("Limite de velocidade próximo. Reduza a velocidade.");
    } else {
      console.log("Velocidade dentro do limite permitido.");
    }
  }
}