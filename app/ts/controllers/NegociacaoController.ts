import { Negociacao, Negociacoes } from "../models/index";
import { MensagemView,NegociacoesView } from "../views/index";
import {logarTempoDeExecucao, throttle} from '../helpers/decorators/index';
import {INegociacaoParcial} from '../models/index';
import {NegociacaoService, Handler} from '../service/index';
import { Imprime } from "../helpers/decorators/imprime";
//index é um barrel que da o export de vários módulos de uma só vez


export class NegociacaoController {
  
  private _inputData: JQuery;
  private _inputQuantidade: JQuery;
  private _inputValor: JQuery;
  private _negociacoes: Negociacoes;
  private _negociacoesView: NegociacoesView;
  private _negociacaoService: NegociacaoService;
  private _mensagemView: MensagemView;

  constructor() {
    this._inputData = $("#data")
    this._inputQuantidade = $("#quantidade")
    this._inputValor = $("#valor")

    this._negociacoes = new Negociacoes();
    this._negociacoesView = new NegociacoesView('#negociacoesView', true);
    this._mensagemView = new MensagemView('#mensagemView');
    this._negociacoesView.update(this._negociacoes)
    this._negociacaoService = new NegociacaoService();
  }

  // @logarTempoDeExecucao()
  @throttle()
  adiciona(event: Event) {
    let data = new Date(this._inputData.val().replace('/-/g',','))

    if(!this.isWeekDay(data)) {
      this._mensagemView.update('Não é possível fazer essas negociações nos finais de semana');
      return;
    }

    const negociacao = new Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()))

    Imprime(negociacao);
    this._negociacoes.adicionaNegociacao(negociacao);

    this._negociacoesView.update(this._negociacoes)
    this._mensagemView.update('Negociação adicionada com sucesso');
  }

  @logarTempoDeExecucao()
  @throttle()
  async importaDados() {
    const isOK:Handler = (res: Response) => {
      if(res.ok) {
        return res;
      }else {
        throw new Error(res.statusText);
      }
    }

    const negociacoesJaImportadas = this._negociacoes.arrayOf()
    const negociacoesParaImportar = await this._negociacaoService.getNegociacoes(isOK)
    
    negociacoesParaImportar
      .filter(negociacao =>
        !negociacoesJaImportadas.some(jaImportada =>
        negociacao.isEqual(jaImportada))
      ).forEach(negociacao => 
        this._negociacoes.adicionaNegociacao(negociacao)
      )

    this._negociacoesView.update(this._negociacoes);


    

  }

  private isWeekDay(data: Date) {
    return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
  }
}

enum DiaDaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado
}