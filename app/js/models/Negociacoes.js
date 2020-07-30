System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacoes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacoes = class Negociacoes {
                constructor() {
                    this._negociacoes = [];
                }
                adicionaNegociacao(negociacao) {
                    this._negociacoes.push(negociacao);
                }
                arrayOf() {
                    return [].concat(this._negociacoes);
                }
                isEqual(negociacoes) {
                    return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.arrayOf());
                }
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
