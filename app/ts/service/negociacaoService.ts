import { INegociacaoParcial, Negociacao } from "../models/index";

export class NegociacaoService{

  getNegociacoes(handler: Handler): Promise<Negociacao[]> {
    return fetch('http://localhost:8080/dados')
    .then(res => handler(res))
    .then(res => res.json())
    .then((dados: INegociacaoParcial[]) => 
      dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
    )
    // .catch(err => console.log(err));
  }

}


export interface Handler{
  (res: Response): Response;
}