"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedVeterinaria = void 0;
var RedVeterinaria = /** @class */ (function () {
    function RedVeterinaria(nombre) {
        this.nombre = nombre;
        this.veterinarias = [];
        this.proveedores = [];
    }
    RedVeterinaria.prototype.getNombre = function () {
        return this.nombre;
    };
    RedVeterinaria.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    //****AGREGO ESTE METODO PARA CHEQUEAR */
    RedVeterinaria.prototype.getVeterinarias = function () {
        console.log("Las veterinarias son : ", this.veterinarias);
    };
    //*****************************************/
    RedVeterinaria.prototype.AltaVeterinaria = function (veterinaria) {
        this.veterinarias.push(veterinaria);
    };
    RedVeterinaria.prototype.BajaVeterinaria = function (nombreVeterinaria) {
        this.veterinarias = this.veterinarias.filter(function (veterinaria) { return veterinaria.getNombre() !== nombreVeterinaria; });
    };
    RedVeterinaria.prototype.modificarVeterinaria = function (id, nuevoNombre, nuevaDireccion) {
        var veterinaria = this.veterinarias.find(function (vet) { return vet.getId() === id; });
        if (veterinaria) {
            if (nuevoNombre)
                veterinaria.setNombre(nuevoNombre);
            if (nuevaDireccion)
                veterinaria.setDireccion(nuevaDireccion);
            console.log("Veterinaria con id '".concat(id, "' modificada."));
        }
        else {
            console.log("Veterinaria con id '".concat(id, "' no encontrada."));
        }
    };
    //CREO ESTE METODO PARA MOSTRAR LOS PROVEEDORES
    RedVeterinaria.prototype.mostrarProveedores = function () {
        console.log("Los proveedores son  : ", this.proveedores);
    };
    //*************************** */
    RedVeterinaria.prototype.AltaProveedor = function (proveedor) {
        this.proveedores.push(proveedor);
    };
    RedVeterinaria.prototype.BajaProveedor = function (nombreProveedor) {
        this.proveedores = this.proveedores.filter(function (proveedor) { return proveedor.getNomProveedor() !== nombreProveedor; });
    };
    RedVeterinaria.prototype.ModificarProveedor = function (id, nuevoNombre, nuevoTelefono) {
        var proveedores = this.proveedores.find(function (prov) { return prov.getId() === id; });
        if (proveedores) {
            if (nuevoNombre)
                proveedores.setNomProveedor(nuevoNombre);
            if (nuevoTelefono)
                proveedores.setTelefono(nuevoTelefono);
            console.log("Proveedor con id '".concat(id, "' modificado."));
        }
        else {
            console.log("Proveedor con id '".concat(id, "' no encontrado."));
        }
    };
    return RedVeterinaria;
}());
exports.RedVeterinaria = RedVeterinaria;
