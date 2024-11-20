"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redVeterinaria_1 = require("./redVeterinaria");
var veterinaria_1 = require("./veterinaria");
var cliente_1 = require("./cliente");
var paciente_1 = require("./paciente");
var proveedor_1 = require("./proveedor");
//CREO UNA RED VETERINARIA
var redVeterinaria = new redVeterinaria_1.RedVeterinaria("Red Veterinaria 1");
//CREO VETERINARIAS
var vete1 = new veterinaria_1.Veterinaria("Veterinaria Pelicano", "Pringles 3502");
var vete2 = new veterinaria_1.Veterinaria("Vete plus", "talcahuano 218");
//CREO PROVEEDORES
var proveedor1 = new proveedor_1.Proveedor("Hierros gonzalez", 22845754);
var proveedor2 = new proveedor_1.Proveedor("Ciuffo", 2254522);
//CREO CLIENTES
var cliente1 = new cliente_1.Cliente("Agustin", 228456452);
var cliente2 = new cliente_1.Cliente("Juana", 54545);
//CREO MASCOTAS 
var mascota1 = new paciente_1.Paciente("Firulais", "perro", 4);
var mascota2 = new paciente_1.Paciente("Negro", "iguana", 22);
var mascota3 = new paciente_1.Paciente("gina", "perro", 3);
var mascota4 = new paciente_1.Paciente("omar", "loro", 4);
//DOY DE ALTA DOS VETERINARIAS EN LA RED
redVeterinaria.AltaVeterinaria(vete1);
redVeterinaria.AltaVeterinaria(vete2);
//DOY DE ALTA DOS PROVEEDORES EN LA RED
redVeterinaria.AltaProveedor(proveedor1);
redVeterinaria.AltaProveedor(proveedor2);
//*********************************************************************************************************************** */
//MUESTRO LAS VETERINARIAS ok
//redVeterinaria.getVeterinarias(); 
//MUESTRO LOS PROVEEDORES ok
//redVeterinaria.mostrarProveedores(); 
//ELIMINO UNA VETERINARIA ok
//redVeterinaria.BajaVeterinaria("Vete plus"); 
//redVeterinaria.getVeterinarias(); 
//ELIMINO UN PROVEEDOR ok
//redVeterinaria.BajaProveedor("Ciuffo"); 
//redVeterinaria.mostrarProveedores();
//MODIFICO UN PROVEEDOR ok
//redVeterinaria.ModificarProveedor(proveedor1.getId(),"la casa de los hierros");
//redVeterinaria.mostrarProveedores(); 
//MODIFICO UNA VETERINARIA ok
//redVeterinaria.modificarVeterinaria(vete1.getId(),"La iguana"); 
//redVeterinaria.getVeterinarias(); 
//****************************************************************************************************************** */
//AGREGO CLIENTES A VETERINARIA
vete1.agregarCliente(cliente1);
vete1.agregarCliente(cliente2);
//AGREGO MASCOTAS A VETERINARIA
vete1.agregarMascota(mascota1);
vete1.agregarMascota(mascota2);
vete1.agregarMascota(mascota3);
vete1.agregarMascota(mascota4);
//ASIGNO MASCOTAS A CLIENTE 1
vete1.asignarPacienteADueño(mascota1, cliente1.getID());
vete1.asignarPacienteADueño(mascota2, cliente1.getID());
//ASIGNO MASCOTAS A CLIENTE 2
vete1.asignarPacienteADueño(mascota3, cliente2.getID());
vete1.asignarPacienteADueño(mascota4, cliente2.getID());
//MUESTRO MASCOTAS DE CLIENTE 1 Y 2 POR CLIENTE
//cliente1.muestroMascotasAsignadas(); 
//console.log ("..................."); 
//cliente2.muestroMascotasAsignadas(); 
//MUESTRO CLIENTES DE VETERINARIA ok
//vete1.muestroClientes(); 
//MUESTRO MASCOTAS DE VETERINARIA ok
//vete1.muestroMascotas(); 
//UTILIZO EL ACUMULADOR DE VISITAS Y LUEGO MUESTRO LAS CANTIDADES DE VISITAS DEL CLIENTE Y LUEGO MUESTRO SI ES VIP
//cliente1.setAcumulVisitas(1); 
//cliente1.verCantVisitas();
//cliente1.setVIP(); //<--MUESTRO SI ES VIP
//MUESTRO TODOS LOS CLIENTES Y SUS MASCOTAS:
//vete1.clienteYmascotas(cliente1); 
//vete1.clienteYmascotas(cliente2); 
//ELIMINO CLIENTE 1
//vete1.muestroClientes(); 
//console.log ("ELIMINO CLIENTE 1 Y MUESTRO"); 
//vete1.bajaCliente(cliente1.getID());
//vete1.muestroClientes();
//MODIFICO CLIENTE 1
//vete1.muestroClientes();
//console.log ("MODIFICO CLIENTE 1 Y MUESTRO");
//vete1.modificarCliente(cliente1.getID(),"Enzo",2236361319); 
//vete1.muestroClientes(); 
//ELIMINO PACIENTE gina
//vete1.muestroMascotas(); 
//console.log ("ELIMINO MASCOTA gina Y MUESTRO"); 
//vete1.bajaMascota("gina"); 
//vete1.muestroMascotas(); 
//MODIFICO PACIENTE omar
//vete1.muestroMascotas();
//console.log("MODIFICO PACIENTE OMAR Y MUESTRO");
//vete1.modificarMascota("omar",6,"gato"); 
//vete1.muestroMascotas(); 
//MUESTRO LOS ID GENERADOS DE FORMA ALEATORIA Y UNICA
console.log("El id de la veterinaria 1 es: ", vete1.getId());
console.log("El id de la veterinaria 2 es: ", vete2.getId());
