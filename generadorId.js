"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generador = void 0;
var Generador = /** @class */ (function () {
    function Generador() {
        this.idsGenerados = [];
    }
    Generador.prototype.generadorIdUnico = function () {
        var id;
        do {
            id = Math.floor(Math.random() * 100);
        } while (this.idsGenerados.includes(id)); // Verifica que el ID no exista en el arreglo
        this.idsGenerados.push(id); // Agrega el ID al arreglo para mantener registro
        return id;
    };
    return Generador;
}());
exports.Generador = Generador;
