const a = 1; // Los number tienen prioridad a la hora del comparar con otros tipos de datos el que tiene segunda prioridad es el booleano
const b = "1"; // Los string al compararse con numeros y booleanos se transforma en numero y en caso de compararse con un booleano el booleano se transforma en numero
const c = true;
const d = [];
const e = {};
const f = false;
const g = null;
const h = undefined;
const i = 0;

console.log(a, b, c, d, e, f, g, h);

console.log("a == b", a == b); // number con string
console.log("a === b", a === b); // number con string
console.log("b == c", b == c); // string con booleano
console.log("b === c", b === c); // string con booleano
console.log("c == a", a == c); // booleano con number
console.log("c === a", a === c); // booleano con number
console.log("d == e", d == e); // list con object
console.log("d === e", d === e); // list con object
console.log("d == f", d == f); // list con booleano false
console.log("d === f", d === f); //list con booleano false
console.log("e == f", e == f); // object con booleano false
console.log("e === f", e === f); // object con booleano false

console.log("object a booleano ", Boolean(e));
console.log("a == e", a == e); // number con object
console.log("a === e", a === e); // number con object
console.log("object a number ", Number(e));
console.log("c == e", c == e); // booleano con object
console.log("c === e", c === e); // booleano con object
console.log("c == e", c == Boolean(e)); // booleano con object a booleano
console.log("c === e", c === Boolean(e)); // booleano con object a booleano

console.log("f == i", f == i); // booleano con number
console.log("f === i", f === i); // booleano con number
console.log("g == i", g == i); //  object con number
console.log("g === i", g === i); // object con number
console.log("h == i", f == i); // undefine con number
console.log("h === i", f === i); // undefine con number

console.log("f == g", f == Boolean(g));
console.log("f === g", f === Boolean(g));
console.log("f == h", f == Boolean(h));
console.log("f === h", f === Boolean(h));
console.log("f == i", f == Boolean(i));
console.log("f === i", f === Boolean(i));

/**
 * crear una funcion que recibe un valor de tipo any y retorna un booleado, la condicion de que sea valido (true)
 * es que sea diferente de null, undifiend, false y 0
 */
// function requerido (value){
//     return Boolean(value);
// }

function saludar(nombre) {
  console.log("hola, " + nombre);
}

saludar("juan");

/**
 * crear una funcion que reciba un nombre de animal y una onomatopeya ambos de tipo string,e imprima en cosola '<nombre del animal> hace <onomatopeya>', la funcion se debe llamar expresar
 */

function expresar(animal, onomatopeya) {
  console.log(animal + " hace " + onomatopeya);
}

expresar("elefante", "bruu");
expresar("vaca", "muu");

// for (let index = 0; index < 20; index++) {
//   console.log("indice", index);
// }

for (let index = 0; index < 5; index++) {
  expresar("vaca", "muu");
}

//console.log("booleano a null ", Boolean(g));
//console.log("booleano a undefine ", Boolean(h));
//console.log("booleano a number ", Boolean(i));

const animal = "perro";
console.log(typeof animal);

function animalesLetrasPorLetras(animal) {
  for (let index = 0; index < animal.length; index++) {
    console.log(animal.at(index));
  }
  console.log();
}

animalesLetrasPorLetras(animal);
animalesLetrasPorLetras("parangarikutirimikuaro");

// voy hacer una function que se va a llamar expresarVariasVeces, recibe un nombre de animal, una onomatopeya y un numero de iteraciones //

function expresarVariasVeces(animal, onomatopeya, iteraciones) {
  for (let index = 0; index < iteraciones; index++) {
    expresar(animal, onomatopeya);
  }
  // console.log(animal + " hace " + onomatopeya);
}
expresarVariasVeces("vaca", "muu", 10);

// hacer una fuction que recibe un string y devuelva el string invertido o en reversa y se va a llamar revertir

function revertir(palabra) {
  let palabraRevertida = "";
  for (let index = 0; index < palabra.length; index++) {
    palabraRevertida =
      palabraRevertida + palabra.at(palabra.length - (index + 1));
  }
  return palabraRevertida;
}
console.log(revertir("elefante"));

const list = ["loro", "elefante", "perro", "gato"];

const list2 = list;

console.log(list, list2);

list2[0] = "tortuga";

console.log(list, list2);

const list3 = [...list];
list3[0] = "cocodrilo";
list2[1] = "caballo";
console.log(list, list3);

const perro = {
  nombre: "manchita",
  genero: "hembra",
  color: "blanca",
  peso: "12kg",
};

// fuerte tipada

console.log(perro?.nombre);
// dinamica
console.log(perro["nombre"]);

// contructor de objectos

console.log(Object.values(perro));

console.log(Object.keys(perro));

// crea una fuction que reciba un objecto e imprima los valores que tenga adentro de manera dinamica

function valoresDinamico(obj = {}) {
  const keys = Object.keys(obj);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    console.log(key, obj[key]);
  }
}

valoresDinamico(perro);

/**
 * dada los siguientes datos, calcular cuanto ha gastado cada cliente de la verdureria,
 * Angel  compro: 2 papas, 3 cebollas y 1 melon
 * Ana compro: 3 tomates, 1 papa
 * Pedro compro: 1 melon y 1 cebolla
 *
 * cada cebolla vale: 1
 * cada tomate vale: 2
 * cada papa vale: 3
 * cada melon vale: 4
 */
const angel = {
  papa: 2,
  cebolla: 3,
  melon: 1,
};

const ana = {
  tomate: 2,
  papa: 1,
};

const pedro = {
  melon: 1,
  cebolla: 1,
};

const verduras = {
  cebolla: 1,
  tomate: 2,
  papa: 3,
  melon: 4,
};



function calcularCuenta(cliente = {}) {
  let total = 0;
  const keys = Object.keys(cliente);

  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    total = total + verduras[key] * cliente[key];
  }
  return total;
}
const pedroCuenta = calcularCuenta(pedro);
console.log("pedro gasto en sus verduras", pedroCuenta, "$");

const anaCuenta = calcularCuenta(ana);
console.log("Ana gasto en sus verduras", anaCuenta, "$");

const angelCuenta = calcularCuenta(angel);
console.log("Angel gasto en sus verduras", angelCuenta, "$");


const verdurasCuenta = calcularCuenta(verduras);
console.log("Angel gasto en sus verduras", verdurasCuenta, "$");