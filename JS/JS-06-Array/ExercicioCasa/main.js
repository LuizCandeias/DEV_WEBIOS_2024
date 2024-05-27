//Exercicio 1

let iRay = ["HTML", 1993,"CSS", 1996, "Bootstrap", 2011, "JS" , 1995, "React", 2013, "Java", 1995]

console.log(iRay);
console.log(iRay.length);
console.log(iRay[6]);
let mudanca = iRay.toString()
console.log(mudanca);
console.log(typeof mudanca);
console.log(iRay.join(" / "));
let shIray = iRay.unshift("IOS");
console.log(iRay);
console.log(shIray);

//Ecercicio 2

let segundoIray = [
    ["HTML", 1993, "CSS", 1996],
    ["Bootstrap", 2011, "JS", 1995],
    ["React", 2013, "Java", 1995]
];

console.log(segundoIray);
console.log(segundoIray.length);
console.log(segundoIray[2][1]);
segundoIray[1][2] = "JavaScript"
console.log(segundoIray);
delete segundoIray[2][2];
console.log(segundoIray);
let pushIray = segundoIray.push("Pipoca");
console.log(segundoIray);