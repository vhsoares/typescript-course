import { Negociacao } from "./Negociacao";
import {logarTempoDeExecucao} from '../helpers/decorators/index'
import { Igualavel } from "./Igualavel";

export class Negociacoes implements Igualavel<Negociacoes> {
  private _negociacoes: Array<Negociacao> = [];

  // @logarTempoDeExecucao()
  adicionaNegociacao(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }

  arrayOf(): Array<Negociacao> {
    return ([] as Negociacao[]).concat(this._negociacoes);
  }

  isEqual(negociacoes: Negociacoes): boolean {
    return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.arrayOf());
  }
}