// metodo forEach
let frutas = ["banana", "pera", "uva", "melancia", "limão", "melão"]    

frutas.forEach(retornaInfo);
function retornaInfo(nomeFruta, indice){
    console.log(`nomeFruta: ${nomeFruta}`)
    console.log(`Indice: ${indice}`)

}
console.clear()

//arrow function

frutas.forEach(teste = (nomeFrutas, indice) =>{
    console.log(`nomeFruta: ${nomeFrutas}`)
    console.log(`Indice: ${indice}`)
})
//arrow function mais recente/minimalista
frutas.forEach((teste) => console.log(teste))
//ele vai retornar apenas o nome e não vai retornar o indice

console.clear()

let tarefas = [
    {
        id: 1,
        isPronta: true,
        nomeTarefa: "Pular"
    },
    {
        id:2,
        isPronta:true,
        nomeTarefa: "sair do chão"
    },
    {
        id:3,
        isPronta:false,
        nomeTarefa: "flutuar"
    },
]

tarefas.forEach((tarefa) => console.log(tarefa.nomeTarefa))

console.clear()

let numeros = [4, 9, 16, 25 ]
let novoArray = numeros.map(Math.sqrt)

console.log("Array antigo" + numeros)
console.log("Novo Array " + novoArray)

let mapText = tarefas.map((retornaText) => {
    console.log(retornaText.nomeTarefa)
})

console.clear()

let numeros2 = [3, 13, 24, 36, 47, 50, 60, 78, 88]

let resultado = numeros2.filter(retornaFiltro)

function retornaFiltro(num){
    return num > 30
}
console.log(resultado)

let tarefaFiltro = tarefas.filter((resultadoFiltro) => {
    return resultadoFiltro.isPronta === false
})

console.log(tarefaFiltro)
console.clear()

let sapatos = [
    {marca: "Nike", quantidade: 3},
    {marca: "Adidas", quantidade:5},
    {marca: "Puma", quantidade:7}
]
console.log(
    sapatos.find((retornaFind) => {
        return retornaFind.marca = "Puma"
    })
)








