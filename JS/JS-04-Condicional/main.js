//IF
//Se todos os alunos estiverem com a blusa e o crachá então todos recebem 10

var todosDeCracha = true
var todosDeBlusa = true

if (todosDeBlusa && todosDeCracha) {
    console.log("Todos Recebem 10 em js"); 
    
}

console.clear();

var todosDeCracha = false


if (todosDeCracha == true) {
    console.log("Todos Recebem 10 em js"); 
    
} else {console.log("Zeroo pra todoss");}


// console.clear();

// var Numero1 = prompt("Digite um numero")

// if (Numero1 % 2  === 0) {
// console.log(alert("Este numero é Par"))
// } else {
//     console.log(alert("Este numero é impar"));
// }

console.clear();

var numero1 = 4
var numero2 = 2

if (numero1 > numero2) {
console.log("Numero1 é maior que o numero 2");
    
} else {
    console.log("Numero1 é menor");
}
    
console.clear();

numero1 > numero2 ? console.log("Numero1 é maior"):
console.log("numero1 é menor");

console.clear();

let mes = "janeiro";

if (mes == "janeiro") {
    console.log("verão");  
}
else if (mes == "junho"){
    console.log("Outono");
}
else if (mes == "agosto"){
    console.log("inverno");
}else{
    console.log("que mes você está?");
}


console.clear();

switch (mes) {
    case "janeiro":
        console.log("Verão");
        break;
    case "Julho":
        console.log("Outono");
        break;
    case "junho":
        console.log("Primavera");
        break;
    default:
        console.log("Inverno");
        break;
}

    console.clear();


switch (mes.toLowerCase()) {
    case "dezembro":
    case "janeiro":
    case "fevereiro":
        console.log("Verão");
        break;
    case "março":
    case "abril":
    case "maio":
        console.log("Outono");
        break;
    case "junho":
    case "julho":
    case "agosto":
        console.log("Inverno");
        break;
    case "setembro":
    case "outubro":
    case "novembro":
        console.log("Primavera");
        break;
    default:
        console.log("Que mês você está?");
        break;
}







