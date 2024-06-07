// O método getElementById é o modo para comum de acessar um elemento HTML na página web. Esse método retorna a referência do elemento através do atributo ID ou null se a ID não for encontrada. Esse é um dos motivos do atributo id em uma página web ser único

//  Método getElementById -->

let primeiroTitulo = document.getElementById("primeiroTitulo")

primeiroTitulo.style.color = 'purple'
primeiroTitulo.innerText = 'AlanZoka'

let segundoTitulo = document.getElementById("segundoTitulo")

segundoTitulo.style.color = 'purple'
segundoTitulo.innerText = 'Maethe'

// O método getElementsByClassName retorna a coleção de todos os elementos do documento com a classe específica. Isso significa que esse método pode retornar mais de um elemento.

// Método getElementsByClassName -->

let Paragrafos = document.getElementsByClassName("Paragrafos")

// aplica para todos -->
for(i = 0; i < Paragrafos.length; i++){
    Paragrafos[i].style.color = 'green'
}
// aplica somente em um
// Paragrafos[1].style.color = 'green'
console.log(Paragrafos)
console.clear()

// O método getElementsByTagName retorna a coleção de todos os elementos do documento com a tag, ou seja, com a mesma marcação HTML. Isso significa que esse método pode retornar mais de um elemento.

// Método getElementsByTagName -->

let byTagName = document.getElementsByTagName("p")

console.log(byTagName)

for(c = 0; c < byTagName.length; c++){
    byTagName[c].style.color = 'black'
    byTagName[c].style.fontSize = '20px'
    byTagName[c].style.boxShadow = '3px 1px 5px #71dbd2'
    if(c % 2 == 0) {
        byTagName[c].style.backgroundColor = "#00b9bd"
    }else {
        byTagName[c].style.backgroundColor = '#fff'
    }
}

// O método getElementsByName retorna a coleção de todos os elementos do documento com o nome específico, ou seja, esse método verifica o atributo HTML name. Isso significa que esse método pode retornar mais de um elemento.

// > Método getElementsByName

let byName = document.getElementsByName('filho')


console.log(byName)
byName.forEach(funcao)


function funcao (cont, indice) {
    return byName[indice].style.color = 'pink'
}

// O método remove() permite remover um elemento do DOM

//Remover um elemento no DOM -->

let removendo = document.getElementById('remove1')
removendo.remove()

console.log(byTagName)

//A propriedade listStyle configura o estilo da lista e no exemplo para não mostrar o marcador da lista (o bullet point).

//Vamos alterar o estilo da lista não ordenada. Siga os passos para fazer isso:

let recebeLista= document.getElementById('pae')

recebeLista.style.listStyle = "none"