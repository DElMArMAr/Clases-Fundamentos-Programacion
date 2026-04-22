const list = ['Ana', 88, 'Carlos', 76, 'Karina', 63];

let suma = 0;
let contador = 0;

let aprobados = "";
let reprobados = "";

let nuevaLista = [];

//  lista
for (let i = 0; i < list.length; i += 2) {
  let nombre = list[i];
  let nota = Number(list[i + 1]);

  suma = suma + nota;
  contador = contador + 1;

  // vaprueba
  if (nota >= 70) {
    if (aprobados === "") {
      aprobados = nombre;
    } else {
      aprobados = aprobados + ", " + nombre;
    }
  } else {
    if (reprobados === "") {
      reprobados = nombre;
    } else {
      reprobados = reprobados + ", " + nombre;
    }
  }

  // convertir 
  let letra = "";

  if (nota >= 95) {
    letra = "A";
  } else if (nota >= 90) {
    letra = "B";
  } else if (nota >= 80) {
    letra = "C";
  } else if (nota >= 70) {
    letra = "D";
  } else {
    letra = "F";
  }

  nuevaLista.push(nombre);
  nuevaLista.push(letra);

  console.log("La calificación de " + nombre + " es " + letra);
}

// promedio
let promedio = (suma / contador).toFixed(2);

// resultados
console.log("El promedio de calificaciones es: " + promedio);
console.log("Los estudiantes que aprobaron son: " + aprobados);
console.log("Los estudiantes que no aprobaron son: " + reprobados);
console.log("La lista transformada es:", nuevaLista);