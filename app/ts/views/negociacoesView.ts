
import{ View } from './view';
import { Negociacoes } from '../models/Negociacoes';
import { Negociacao } from '../models/Negociacao';

export class NegociacoesView extends View<Negociacoes> {

  template(model: Negociacoes): string {
    return `
    <table class="table table-hover table-bordered">
    <thead>
        <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
        </tr>
    </thead>

    <tbody>

      ${model.arrayOf().map(negociacao => {
        return `<tr>
        <td>${negociacao.data.getDate()} / ${negociacao.data.getMonth() + 1} / ${negociacao.data.getFullYear()}</td>
        <td>${negociacao.quantidade}</td>
        <td>${negociacao.valor}</td>
        <td>${negociacao.getVolume()}</td>
        </tr>`
      }).join('')}

    </tbody>
    <tfoot>
    </tfoot>
    </table>
    <script>alert('cuidado')</script> 
    `;
  }
}
