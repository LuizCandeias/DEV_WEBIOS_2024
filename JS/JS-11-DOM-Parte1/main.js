// DOM
// Link com arquivo html
// Para acessar do DOM, usar a tag "document"
// document.html                    

document.title = "Times"




// se for 1 > São paulo(cor de fundo vermelho) senão 0 corinthias ( cor de fundo preto ) -->


var time = prompt("Qual o nome do time?")
if(time == "São Paulo"){
    alert("O time é São Paulo")
    document.body.style.backgroundColor = "red"
    //createElement > serve para criar uma tag no HTML
    let nomeTime = document.createElement('h1')
    nomeTime.innerHTML = "São Paulo - Rogério Ceni"
    document.body.appendChild(nomeTime)
    // innerHTML > Inserir uma informação no HTML
}else if(time == "Corinthias"){
    alert("O time é Corinthias")
    document.body.style.backgroundColor = "Black"
    let nomeTime = document.createElement('h1')
    nomeTime.innerHTML = "Corinthias - Cássio"
    document.body.appendChild(nomeTime)
    nomeTime.style.color = "white"
}else if(time == "Palmeiras"){
    alert("O time é Palmeiras")
    document.body.style.backgroundColor = "green"
    let nomeTime = document.createElement('h1')
    nomeTime.innerHTML = "Palmeiras - Endrick. A lenda viva"
    document.body.appendChild(nomeTime)
}else{
    alert("Não sei qual é esse time")
}
    

// Tag "alert" = Mostra uma caixa de alerta contendo uma mensagem e um botão de OK.

// window.alert("NÃO SE MOVA")

// tag "confirm()" = Mostra uma caixa de diálogo contendo uma mensagem com um botão de OK e um de CANCEL

// window.confirm("QUER SOFRER AINDA IRMÃO?")

// tag prompt() = Mostra uma caixa de diálogo para  usuário entrar com algum dado.

// window.prompt("Deseja a morte?")

// tag "open()" = Abre uma nova janela no navegador.


// a tag "close()" = Fecha a janela atual do navegador


// a tag "setTimeout()" = Executa uma ação após um determinado tempo. Essa ação pode ser uma chamda de função, uma expressão de avaliação etc.



