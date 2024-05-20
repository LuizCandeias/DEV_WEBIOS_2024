var string = "Os alunos estão ";
var string2 = "reprovados ";
var string3 = "ou aprovados? ";
var num1 = 2
var num2 = 4
var olhaAi = " reprovados"

//template string
console.log(string + string2 + string3 );
console.clear();

//concatenas string e fazer ao mesmo tempo contas matematicas
console.log(`${string + string2 + string3 + ( num1 * num2) + olhaAi}`);
 
console.clear();

var texto1 = "IOS fez uma excursão na TOTVS com três cabritinhos (alunos)"


console.log(texto1.charAt(0));
console.log(texto1[2]);


console.clear();

var texto2 = "IOS"
var texto3 = "Está chovendo hamburguer"

console.log(`na variavel texto2 tem ${texto2.length} caracteres`);


console.log(`na variavel texto2 tem ${texto3.length} caracteres`);

console.clear();

var texto4 = "aqui está em minusculo"
var texto5 = "AQUI ESTÁ EM MAIÚSCULO"

console.log(`Minusculo: ${texto5.toLowerCase()}`);
console.log(`Maiusculo: ${texto4.toUpperCase()}`);

console.clear();

var str = "Mozilla"

console.log(str);
console.log(str.substring(1, 3));
console.log(str.substring(3));

console.clear();

var texto6 = "Olha a pipoca"

console.log(texto6.replace('pipoca', 'popcorn'));


console.clear();

var texto7 = "                            Olha a carreta        "

console.log(texto7.trim());