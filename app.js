// const autos = require("./autos.js");
// const { autosQuePuedeComprar } = require("./concesionaria.js");
// const con = require("./concesionaria.js");
// const persona = require("./persona.js");

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

//  const unaPersona =  persona;
//  console.log(con.autosQuePuedeComprar(persona));

//Servidor.
const express = require('express');
const path= require('path');

const app = express();


app.listen(3000,() => {
    console.log("Servidor corriendo");
});

app.get('/',function(req,res)
{
    res.sendFile(path.resolve(__dirname,'./views/index.html'));
});


app.get('/contacto',function(req,res)
{
    res.send([1,2,3,'Tute', "Hola"]);
} );

app.get('/un-objeto', function(req, res)
{
    res.send({
            Name: "Matias",
            Apellido: "Menendez"
        });
} );


app.get('/about-us', function (req,res) {
    let pathCompleto = path.join(__dirname,'./views/about-us.html');
    res.sendFile(pathCompleto);
});





