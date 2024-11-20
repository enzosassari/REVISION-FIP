"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
var Paciente = /** @class */ (function () {
    function Paciente(nombre, especie, edad) {
        this.esExotica = false;
        this.idPaciente = 0;
        this.nombre = nombre;
        this.setEspecie(especie); //<---------MODIFICACION  OJO! 
        this.edad = edad;
    }
    Paciente.prototype.setIdPaciente = function (id) {
        this.idPaciente = id;
    };
    Paciente.prototype.getIdPaciente = function () {
        return this.idPaciente;
    };
    Paciente.prototype.getNombreMascota = function () {
        return this.nombre;
    };
    Paciente.prototype.setNombreMascota = function (nombre) {
        this.nombre = nombre;
    };
    Paciente.prototype.getEspecie = function () {
        return this.especie;
    };
    Paciente.prototype.setEspecie = function (especie) {
        this.especie = especie;
        if (especie != "perro" && especie != "gato") {
            this.esExotica = true;
        }
        else {
            this.esExotica = false;
        }
    };
    Paciente.prototype.getEdad = function () {
        return this.edad;
    };
    Paciente.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    return Paciente;
}());
exports.Paciente = Paciente;
