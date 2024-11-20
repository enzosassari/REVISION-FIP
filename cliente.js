"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var generadorId_1 = require("./generadorId");
var Cliente = /** @class */ (function () {
    function Cliente(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = this.setID();
        this.esVIP = false;
        this.acumulVisitas = 0;
        this.mascotas = [];
    }
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    Cliente.prototype.getTelefono = function () {
        return this.telefono;
    };
    Cliente.prototype.getID = function () {
        return this.id;
    };
    Cliente.prototype.getVIP = function () {
        return this.esVIP;
    };
    Cliente.prototype.getAcumulVisitas = function () {
        return this.acumulVisitas;
    };
    Cliente.prototype.getListasMascotas = function () {
        return this.mascotas;
    };
    //agrego metodo
    Cliente.prototype.muestroMascotasAsignadas = function () {
        return this.mascotas;
    };
    Cliente.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Cliente.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    Cliente.prototype.setID = function () {
        var idGenerado = new generadorId_1.Generador();
        var id = idGenerado.generadorIdUnico();
        return id;
    };
    Cliente.prototype.setVIP = function () {
        console.log("¿El cliente es vip?");
        if (this.acumulVisitas >= 0 && this.acumulVisitas < 5) {
            console.log("".concat(this.esVIP = false, ". No cuenta con las suficientes visitas."));
        }
        else {
            console.log("".concat(this.esVIP = true, ". Tiene las visitas requeridas para serlo."));
        }
    };
    Cliente.prototype.setAcumulVisitas = function (visitas) {
        this.acumulVisitas += visitas;
    };
    //AGREGO METODO QUE LUEGO UTILIZO EN VETERINARIA
    Cliente.prototype.adoptarPaciente = function (paciente) {
        this.mascotas.push(paciente);
    };
    //AGREGO METODO PARA VER LAS VISITAS
    Cliente.prototype.verCantVisitas = function () {
        console.log("El cliente ".concat(this.nombre, " tiene un total de: ").concat(this.acumulVisitas, " visitas"));
    };
    return Cliente;
}());
exports.Cliente = Cliente;
