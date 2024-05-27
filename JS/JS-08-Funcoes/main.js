// funcao
function soma(num1, num2, num3) { // parametros
    var num1 
    var num2 
    var num3

     return num1 + num2 + num3
}
console.log(soma(2, 3, 2)) //com
// console.log(soma) // sem parentese

console.clear()

// crie uma função e receba 4 valores e retorne apenas a media desses valores

function soma(num1, num2, num3, num4) {
    var num1
    var num2
    var num3
    var num4
    
    return (num1 + num2 + num3 + num4) / 4
}
console.log(soma(3, 4, 2, 4))   

console.clear()

const media2 = (num1, num2, num3, num4) =>{
    return (num1 + num2 + num3 + num4) / 4
}

console.log(media2(5,5,5,5))

console.clear()

function onloadTela() {
    alert("Sua tela esá carrega, Bem-Vindo")    
    console.log("Recarregou a tela")
}
console.clear()

const clique = () => {
    alert("Bem-Vindo, você clicou em mim")
    console.log("Você clicou em um botão")
}