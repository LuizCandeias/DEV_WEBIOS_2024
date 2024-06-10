
function addimg(){
    const imagem = document.createElement('img');
    imagem.src = 'C:\Users\User\Documents\DEV_WEBIOS_2024\JS\JS-12-DOM-Parte2\ExercicioCasa\TheUmbrellaAcademy_Season2_Episode6_00_29_02_22R-296ca5af7ccd49849cb3792277600df3.webp' 
    imagem.alt = 'Umbrella Academy';
    document.getElementById('containerImagem').appendChild(imagem)
    document.body.style.backgroundColor = '#262525'
}
function exibirMensagem(){
    const Mensagem = prompt("Por favor, digite seu nome:")
    if (Mensagem) { 
        const Mensagem2 = document.getElementById("Mensagem2")
        Mensagem2.textContent = `Olá, ${Mensagem} bem-vindo à nossa academia!`; 
    }
}

function mostrarTabuada(){
    
    let numero = prompt("Por favor, insira um número para gerar a tabuada:");

    numero = parseInt(numero);

    if (isNaN(numero)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        const p = document.createElement('p');
        p.textContent = `${numero} x ${i} = ${resultado}`;
        resultDiv.appendChild(p);
    }
}