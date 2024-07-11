import Cl_contador from "./Cl_contador.js";
import Cl_persona from "./Cl_persona.js";

let persona1 = new Cl_persona("Luis", 15);
let persona2 = new Cl_persona("Ana", 19);
let persona3 = new Cl_persona("José", 21);
let persona4 = new Cl_persona("Carmen", 17);
let persona5 = new Cl_persona("Rosa", 18);
let persona6 = new Cl_persona("José", 22);
let persona7 = new Cl_persona("María", 17);
let persona8 = new Cl_persona("Luz", 19);
let persona9 = new Cl_persona("Rafael", 23);
let persona10 = new Cl_persona("Liz", 15);
let persona11 = new Cl_persona("Marcos", 20);
let persona12 = new Cl_persona("Leo", 16);

let contador = new Cl_contador();
contador.procesarp(persona1);
contador.procesarp(persona2);
contador.procesarp(persona3);
contador.procesarp(persona4);
contador.procesarp(persona5);
contador.procesarp(persona6);
contador.procesarp(persona7);
contador.procesarp(persona8);
contador.procesarp(persona9);
contador.procesarp(persona10);
contador.procesarp(persona11);
contador.procesarp(persona12);

let salida = document.getElementById("salida");
salida.innerHTML += `Cantidad de personas: ${contador.cantTotal()} <br>`;
salida.innerHTML += `Cantidad de personas mayores de edad: ${contador.cantidadM()} <br>`;
salida.innerHTML += `Porcentaje de personas mayores de edad: ${contador
  .porcPerMayoresEdad()
  .toFixed(2)}% <br>`;
