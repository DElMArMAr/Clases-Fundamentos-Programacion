const cantidadDeClientes = 1;

let totalSegundos = 0;


for (let i = 1; i <= cantidadDeClientes; i++) {

  let tiempoCliente = 0;


  if (i % 2 === 0) {
    tiempoCliente = tiempoCliente + (i * 60);
    tiempoCliente = tiempoCliente + 45;
  } else {
    tiempoCliente = tiempoCliente + 20;
  }

 
  if (i % 10 === 0) {
    tiempoCliente = tiempoCliente + (18 * 60);
    tiempoCliente = tiempoCliente + 11;
  }


  if (i % 5 === 0) {
    if (i % 10 !== 0) {
      tiempoCliente = tiempoCliente + (37 * 60);
    }
  }


  totalSegundos = totalSegundos + tiempoCliente;
}


let tiempo = new Date(totalSegundos * 1000);

let horas = tiempo.getUTCHours();
let minutos = tiempo.getUTCMinutes();
let segundos = tiempo.getUTCSeconds();

// mostrar resultado simple
if (horas > 0) {
  console.log("A el cajero le va a tomar " + horas + " horas, " + minutos + " minutos y " + segundos + " segundos");
} else if (minutos > 0) {
  console.log("A el cajero le va a tomar " + minutos + " minutos y " + segundos + " segundos");
} else {
  console.log("A el cajero le va a tomar " + segundos + " segundos");
}
