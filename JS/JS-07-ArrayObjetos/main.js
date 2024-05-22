let pessoa = {
    CorDosOlhos: "Preto", 
    Altura: 1.86,
    corCabelo: "Castanho Escuro",
    nome: 'Luiz',
    sobrenome: 'Candeias',
    hobbie: ['Basquete', 'Musicas', 'League Of Legends'],
    //criar outro objeto
    endereco: {
        rua: 'alto sucuriu',
        numero: 81,
        cidade: "são paulo",
        estado: 'SP'    
    }
}
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.sobrenome)//retornar apenas uma propriedade
console.log(pessoa.hobbie)//retorna todos os hobbies
console.log(pessoa.hobbie[2])//retorna apenas uma informação do hobbie
console.log(pessoa.endereco)//retorna todo o endereço
console.log(pessoa.endereco.cidade)//retorna apenas uma informação do endereço

console.clear()
/// crie mais 2 objetos com duas tarefas diferentes, uma dessas tarefas terá a propriedade isPronta com o valor false
let tarefa = [
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
    }
]
console.log(tarefa)
console.log(tarefa[1]) // retorna um objeto
console.log(tarefa[1].nomeTarefa)// retorna uma única propriedade de um objeto

console.clear()

let recebeJAINSON = JSON.stringify(pessoa)

console.log(pessoa)
console.log(recebeJAINSON)

console.clear()

var JSONITO = '{"CorDosOlhos":"Preto","Altura":1.86,"corCabelo":"Castanho Escuro","nome":"Luiz","sobrenome":"Candeias","hobbie":["Basquete","Musicas","League Of Legends"],"endereco":{"rua":"alto sucuriu","numero":81,"cidade":"são paulo","estado":"SP"}}'

console.log(JSONITO)
console.log(JSON.parse(JSONITO))