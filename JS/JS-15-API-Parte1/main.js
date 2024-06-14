// Função para fazer o request na API
function getImage(e) {
    // Busca a url da API no HTML
    let url_api = document.getElementById('url_api').innerText;
    // console.log(url_api);
    // Função fetch para buscar dados na API
    fetch(url_api, {
    method: 'GET',
    })
    .then((response) => {return response.json();}).then((data) => 
    {
        console.log(data);
        document.getElementById('json_aqui').innerText =
        JSON.stringify(data);
        console.log(data.message)
        let imagem = `
        <img class="rounded img-fluid" src="${data.message}" />
        `;
    // Insere a imagem no elemento HTML com id imagem_aqui
        document.querySelector('#imagem_aqui').innerHTML = imagem;
    });
    }

    // quando for usar API sempre usar o fetch!!

    // fetch(URL).then(receber o JSON).catch(Tratar o JSON e mostrar as informações em tela para o usuário).catch(catch é para tratar erros retornados pela API)