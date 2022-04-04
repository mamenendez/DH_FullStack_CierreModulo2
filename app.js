const autos = require("./autos.js");
const { autosQuePuedeComprar } = require("./concesionaria.js");
const con = require("./concesionaria.js");
const persona = require("./persona.js");

//console.log(autos)


//console.log(con.buscarAuto("APL123"));

//console.log(con.venderAuto("APL123"));

//console.log(con.autosParaLaVenta());

//console.log(con.autosNuevos());

//console.log(con.listaDeVentas());

//console.log(con.totalDeVentas());

//console.log(persona);

// const unaPersona =  persona;
// const unAuto = con.buscarAuto("APL123");
// console.log(con.puedeComprar(unAuto,unaPersona));

 const unaPersona =  persona;
 console.log(con.autosQuePuedeComprar(persona));
