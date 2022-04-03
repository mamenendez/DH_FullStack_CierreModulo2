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
};
module.exports = concesionaria;
