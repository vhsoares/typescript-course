System.register(["./view"], function (exports_1, context_1) {
    "use strict";
    var view_1, NegociacoesView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (view_1_1) {
                view_1 = view_1_1;
            }
        ],
        execute: function () {
            NegociacoesView = class NegociacoesView extends view_1.View {
                template(model) {
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
        </tr>`;
                    }).join('')}

    </tbody>
    <tfoot>
    </tfoot>
    </table>
    <script>alert('cuidado')</script> 
    `;
                }
            };
            exports_1("NegociacoesView", NegociacoesView);
        }
    };
});
