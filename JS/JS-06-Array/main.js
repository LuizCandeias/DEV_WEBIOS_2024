//array
// var numeros = [-2,  40,  16,  111,  33,  64];

// console.log(numeros[3])

// var aleatorios = [true, "texto", 345, "texto", false]
// console.log(aleatorios);

// crie um array unidimensional com 7 posições em todas as posições insira o nome de 7 pessoas especiais em sua vida. retorne no console a pessoa na posição 3 e 7;

var topPessoas = ["Sueli", "Carlos","Leticia", "Davi", "Matheus", "Andre", "AiAi" , "Luiz"]

console.log(topPessoas[3],topPessoas[7]);
console.log(topPessoas[3]);
console.log(topPessoas[7]);

console.clear();

var bidi = [
    ['banana', 'maça', 'pera'],
    ['laranja', true, 1],
    [null, 'Uva', -350]
]

console.log(bidi[1][1]);

//para acessar a info utilizando arrau bidi passsamos no colchetes o indice da linha e depois coluna
 
console.clear();

var bidu = [
    ["Pipoca", "Arroz", "Feijão", "Batata"],
    ["Molho de tomate", "Alface", "Leite em pó", "Detergente"],
    ["Leite de coco", "Candida", "Maçã", "Vinagre"],
    ["Bolacha", "Azeite", "Limão", "Shampoo"]
]

console.log(`\n ${bidu[0][2]} \n ${bidu[1][3]} \n ${bidu[2][2]} \n ${bidu[3][3]}`);


console.log(bidu[0][2]);
console.log(bidu[1][3]);
console.log(bidu[2][2]);
console.log(bidu[3][3]);

console.clear();

let moda = ["Real", "Euro", "Coroa", "Dolar"]

console.clear();

let numArray = [2, 4, 6, 8, 10]
console.log(numArray);
let mudanca = numArray.toString();

console.log(mudanca);

console.clear();

var teste1 = [5, 10, 15, 20, 25, 30]

console.log(teste1)

mudanca2 = teste1.join(' * ')

console.log("Com toString");
console.log(mudanca);
console.log("Com join");
console.log(mudanca2);

console.clear();

let array = [0, 1, 2, 3, 4];
console.log(array.length);

console.clear();

let frutas = ['Banana', 'Laranja', 'Maça', 'Manga']
let x = frutas.pop();
console.log(frutas);
console.log(x);

console.clear();

let frutas2 = ['Banana', 'Laranja', 'Maça', 'Manga'];
let y = frutas2.push('kiwi');

console.log(frutas2);
console.log(y);

console.clear();

let frutas3 = ['Banana', 'Laranja', 'Maça', 'Manga']
let z = frutas.shift();
console.log(frutas3);
console.log(z);

console.clear();

let frutas4 = ['Banana', 'Laranja']
let w = frutas4.unshift('kiwi');
console.log(frutas4);
console.log(w);

console.clear();

let frutas5 = ['Banana', 'Laranja', 'Maça', 'Manga']
delete frutas5[2];
console.log(frutas5);