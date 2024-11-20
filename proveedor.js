"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proveedor = void 0;
var generadorId_1 = require("./generadorId");
var Proveedor = /** @class */ (function () {
    function Proveedor(nomProveedor, telefono) {
        this.nomProveedor = nomProveedor;
        this.telefono = telefono;
        this.idProveedor = this.generarId();
    }
    //METODO PARA GENERAR ID ALEATORIA
    Proveedor.prototype.generarId = function () {
        var idGenerado = new generadorId_1.Generador();
        var id = idGenerado.generadorIdUnico();
        return id;
    };
    Proveedor.prototype.getId = function () {
        return this.idProveedor;
    };
    Proveedor.prototype.getNomProveedor = function () {
        return this.nomProveedor;
    };
    Proveedor.prototype.setNomProveedor = function (nomProveedor) {
        this.nomProveedor = nomProveedor;
    };
    Proveedor.prototype.getTelefono = function () {
        return this.telefono;
    };
    Proveedor.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    return Proveedor;
}());
exports.Proveedor = Proveedor;
