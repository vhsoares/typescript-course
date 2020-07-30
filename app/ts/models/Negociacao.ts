import { Imprimivel } from "./Imprimivel";
import { Igualavel } from "./Igualavel";

export class Negociacao implements Imprimivel, Igualavel<Negociacao>{

  // private _data: Date;
  // private _quantidade: number;
  // private _valor: number;

  constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {
    // this._data = data;
    // this._quantidade = quantidade;
    // this._valor = valor;
  }

  getVolume(): number {
    return this.valor * this.quantidade;
  }

  paraTexto() {
    return `Data: ${this.data.toISOString()}
      Quantidade: ${this.quantidade}
      Valor: ${this.valor}
    `
  }

  isEqual(negociacao: Negociacao) {
    return this.data.getDate() == negociacao.data.getDate() &&
    this.data.getMonth() == negociacao.data.getMonth() &&
    this.data.getFullYear() == negociacao.data.getFullYear()
  }
}