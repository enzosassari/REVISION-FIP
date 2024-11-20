"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
var generadorId_1 = require("./generadorId");
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, direccion) {
        this.id = this.generarId(); //USO METODO GENERAR ID PARA GENERAR UN NUMERO RANDOM
        this.nombre = nombre;
        this.direccion = direccion;
        this.clientes = [];
        this.pacientes = [];
    }
    //METODO PARA GENERAR ID ALEATORIA
    Veterinaria.prototype.generarId = function () {
        var idGenerado = new generadorId_1.Generador();
        var id = idGenerado.generadorIdUnico();
        return id;
    };
    Veterinaria.prototype.getId = function () {
        return this.id;
    };
    Veterinaria.prototype.getNombre = function () {
        return this.nombre;
    };
    Veterinaria.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Veterinaria.prototype.getDireccion = function () {
        return this.direccion;
    };
    Veterinaria.prototype.setDireccion = function (nuevaDireccion) {
        this.direccion = nuevaDireccion;
    };
    Veterinaria.prototype.agregarCliente = function (clientes) {
        this.clientes.push(clientes);
    };
    //AGREGO METODO PARA MOSTRAR CLIENTES ....
    Veterinaria.prototype.muestroClientes = function () {
        console.log("Los clientes son: ", this.clientes);
    };
    //METODO PARA BUSCAR CLIENTE POR ID
    Veterinaria.prototype.buscarClientePorId = function (id) {
        return this.clientes.find(function (clientes) { return clientes.getID() === id; });
    };
    //METODO PARA ELIMINAR CLIENTE
    Veterinaria.prototype.bajaCliente = function (id) {
        this.clientes = this.clientes.filter(function (clientes) { return clientes.getID() !== id; });
    };
    //METODO PARA MODIFICAR CLIENTE
    Veterinaria.prototype.modificarCliente = function (id, nuevoNombre, nuevoTelefono) {
        var cliente = this.clientes.find(function (cliente) { return cliente.getID() === id; });
        if (cliente) {
            if (nuevoNombre)
                cliente.setNombre(nuevoNombre);
            if (nuevoTelefono)
                cliente.setTelefono(nuevoTelefono);
            console.log("Cliente con id '".concat(id, "' modificado"));
        }
        else {
            console.log("Cliente con id '".concat(id, "' no encontrado"));
        }
    };
    //METODO PARA AGREGAR MASCOTA
    Veterinaria.prototype.agregarMascota = function (mascotas) {
        this.pacientes.push(mascotas);
    };
    //ASIGNAR PACIENTE A DUEÑO
    Veterinaria.prototype.asignarPacienteADueño = function (paciente, idDueño) {
        var duenio = this.clientes.find(function (clientes) { return clientes.getID() === idDueño; });
        if (duenio) {
            duenio.adoptarPaciente(paciente);
            paciente.setIdPaciente(idDueño);
        }
        else {
            console.log('Dueño no encontrado');
        }
    };
    //MOSTRAR CLIENTE Y SUS MASCOTAS
    Veterinaria.prototype.clienteYmascotas = function (cliente) {
        console.log("Cliente : ", cliente.getNombre());
        console.log("Mascotas: ", cliente.muestroMascotasAsignadas());
    };
    //AGREGO METODO PARA MOSTRAR MASCOTAS ....
    Veterinaria.prototype.muestroMascotas = function () {
        console.log("Las mascotas son: ", this.pacientes);
    };
    //METODO PARA ELIMINAR MASCOTA
    Veterinaria.prototype.bajaMascota = function (nombre) {
        this.pacientes = this.pacientes.filter(function (mascotas) { return mascotas.getNombreMascota() !== nombre; });
    };
    //METODO PARA MODIFICAR MASCOTA
    Veterinaria.prototype.modificarMascota = function (nombre, nuevaEdad, nuevaEspecie) {
        var mascota = this.pacientes.find(function (pacientes) { return pacientes.getNombreMascota() === nombre; });
        if (mascota) {
            if (nuevaEdad)
                mascota.setEdad(nuevaEdad);
            if (nuevaEspecie)
                mascota.setEspecie(nuevaEspecie);
            console.log("Paciente con nombre '".concat(nombre, "' modificado"));
        }
        else {
            console.log("Paciente con nombre '".concat(nombre, "}' no encontrado"));
        }
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;
