System.register(["./view"], function (exports_1, context_1) {
    "use strict";
    var view_1, MensagemView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (view_1_1) {
                view_1 = view_1_1;
            }
        ],
        execute: function () {
            MensagemView = class MensagemView extends view_1.View {
                template(model) {
                    return model;
                }
            };
            exports_1("MensagemView", MensagemView);
        }
    };
});
