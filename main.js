// types de données primitives
let name = "Landry"; // string
// console.log(name);
let age = 25; // number
// console.log(age);
let isAdmin = true; // boolean
// console.log(isAdmin);

// types de données complexes
let person1 = {
  name: "Laclass Dev",
  age: 30,
  isAdmin: true,
  city: "Douala",
  address: "Deido",
  fruits: ["Orange"],
};

let person0 = {
  name: "Landry",
  age: 25,
  isAdmin: false,
  city: "Yaoundé",
  address: "Awae",
  fruits: ["Ananas", "Papaye"],
};
// console.log(person);

let persons = [person0, person1];

// console.log(persons[1].fruits);

// Les opérateurs

// Opérateurs Mathématiques
let a = 5;
let b = 3;
// console.log("la somme: ", a + b);
// console.log("la soustraction: ", a - b);
// console.log("le produit: ", a * b);
// console.log("La division: ", a / b);
// console.log("Le reste de la division | le  Modulo: ", a % b);

// Les opérateurs logiques
let isHappy = true;
let isRich = false;
// console.log(isHappy && isRich);
// console.log(isHappy || isRich);

// les opérateurs de comparaison
let x = 5; // number
let y = 5; // number
console.log(y >= x);
console.log(y < x);
console.log(y === x);
let z = "5"; // string
console.log("egalité: ", z == x);
console.log("egalité strict: ", z === x);
console.log("différent: ", x !== z);

// Structures de contrôle
// Structure conditionnelle
let note = 17;
if (note >= 10) {
  console.log("Vous êtes admis");
} else {
  console.log("Vous avez échoué");
}

// opérateur ternaire
let decision = note >= 10 ? "Vous avez réussi" : "Vous avez échoué";
console.log("nouvelle decision: ", decision);

// Les boucles
// Boucle pour | for Loop
for (let i = 0; i < 100; i++) {
  // NB: i++ est pareil que i=i+1
  console.log(i + 1, " Je ne vais plus bavarder");
}

// Boucle tant que | While Loop
let n = 0;
while (n < 100) {
  console.log(n + 1, " Je vais coder tous les jours");
  n = n + 1;
}

// Les Fonctions
// Fonctions classiques
function sayHello(name = "Landry") {
  // return "Hello " + name + " !👋🏾";
  return `Hello ${name} ! 👋🏾`;
}
console.log(sayHello("Antoine"));

const salutation = sayHello();
console.log("méthode 2: ", salutation);

// Fonctions flêchées
const sayHello2 = (name = "BOUBOU") => {
  return `Hello ${name} ! 👋🏾`;
};

console.log(sayHello2("Lisette"));
