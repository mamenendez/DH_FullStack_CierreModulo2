const autos = require("./autos");

let concesionaria = {
  autos: ([] = autos),

  buscarAuto: function (patente) {
    let resultado = autos.filter(function (auto) {
      return auto.patente === patente;
    });
    if (resultado.length > 0) {
      return resultado[0];
    } else {
      return null;
    }
  },

  venderAuto: function (patente) {
    let miAutoAVender = this.buscarAuto(patente);
    if (miAutoAVender !== null) {
      miAutoAVender.vendido = true;
    }
  },

  autosParaLaVenta: function () {
    return this.autos.filter(function (listaAutosParaLaVenta) {
      return listaAutosParaLaVenta.vendido === false;
    });
  },

  autosNuevos: function () {
    return this.autosParaLaVenta().filter(function (listaAutosOk) {
      return listaAutosOk.km < 100;
    });
  },

  listaDeVentas: function () {
    let result = [];

    this.autos.forEach(function (elemento) {
      if (elemento.vendido === true) {
        result.push(elemento.precio);
      }
    });
    return result;
  },

  totalDeVentas: function () {
    if (this.listaDeVentas().length > 0) {
      return this.listaDeVentas().reduce(function (acumulador, elemento) {
        return acumulador + elemento;
      });
    }else {return 0;}
  },

  puedeComprar: function(unAuto, unaPersona)
  {
      if (unaPersona.capacidadDePagoTotal >= unAuto.precio  
            &&  unaPersona.capacidadDePagoEnCuotas >= unAuto.precio/unAuto.cuotas)  
      {return true;} else {return false;}
     
  },

  autosQuePuedeComprar: function(unaPersona)
  {
       let autosOk = [];
       this.autosParaLaVenta().forEach(element => {
         if (this.puedeComprar(element,unaPersona))
         {
            autosOk.push(element);
         }
      });  
      return autosOk;

      // let autosOk = this.autosParaLaVenta().map(function(elemento)
      // {
      //    return this.puedeComprar(elemento,unaPersona);
      // });

      //  this.autosParaLaVenta().forEach (function(elemento)
      // {
      //    this.puedeComprar(elemento,unaPersona);

      //    // if(this.puedeComprar(elemento,unaPersona)===true)
      //    // {
      //    //    autosOk.push(elemento);
      //    // }
      // });
            
  }
};
module.exports = concesionaria;
