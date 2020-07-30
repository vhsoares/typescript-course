System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(data, quantidade, valor) {
                    this.data = data;
                    this.quantidade = quantidade;
                    this.valor = valor;
                }
                getVolume() {
                    return this.valor * this.quantidade;
                }
                paraTexto() {
                    return `Data: ${this.data.toISOString()}
      Quantidade: ${this.quantidade}
      Valor: ${this.valor}
    `;
                }
                isEqual(negociacao) {
                    return this.data.getDate() == negociacao.data.getDate() &&
                        this.data.getMonth() == negociacao.data.getMonth() &&
                        this.data.getFullYear() == negociacao.data.getFullYear();
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
