var imagem = document.querySelector('#imagem')
var titulo = document.querySelector('#titulo')
var sinopse = document.querySelector('#sinopse')



chamaApi('https://api.themoviedb.org/3/trending/movie/week?api_key=6521859e8b7c918bfaba021cfddac551&language=pt-BR');

/*chamaApi('https://api.themoviedb.org/3/trending/movie/week?api_key=6521859e8b7c918bfaba021cfddac551&language=pt-BR','#imagemFilme', conteudoImagem);*/

/*chamaApi('https://api.themoviedb.org/3/trending/movie/week?api_key=6521859e8b7c918bfaba021cfddac551&language=pt-BR','#sinopseFilme', conteudoSinopse);*/


function chamaApi (url){
	let httpClient = new XMLHttpRequest;
	var resposta;
	httpClient.open('GET',url);
	httpClient.send();
	
	httpClient.onreadystatechange = function(request){
		if(httpClient.readyState == 4 && httpClient.status == 200) {
			/*let divFilmes = document.querySelector(id)*/
			var resposta = JSON.parse(httpClient.responseText)

			for(let i = 0; i < resposta.results.length; i++){
				/*htmlFilmes = resposta.results[i].title + "<br/>"*/
				conteudoFilm(resposta.results[i].title, resposta.results[i].overview);
			}


			/*let conteudoHtml = funcao(resposta);
			divFilmes.innerHTML = conteudoHtml;*/
		}
	}

}


function conteudoFilm (title, overview){
	var filmeNovo = "<div class='row'> <div class='col-md-2' id='imagem'>" + "<img src='imagens/hanSolo.jpg'>" +	"</div>" + 
	"<div class='col-md-10'>" + "<h3 'id= 'filme'>" + title + "</h3>" +
	"<p' 'id='sinopse'>" + overview +	"</p>"		
	"</div></div>" ;

	var linha = document.querySelector("#novoFilmeLinha")
	var conteudoExistente = linha.innerHTML
	conteudoExistente = conteudoExistente + filmeNovo
	linha.innerHTML = conteudoExistente

}


/*
function conteudoFilm(resposta){

	let htmlFilmes = "";
	for(let i = 0; i < resposta.results.length; i++){
		htmlFilmes = resposta.results[i].title + "<br/>"
		
	}
	return htmlFilmes;
};




function conteudoSinopse(resposta){


	let htmlFilmes = "";
	for(let i = 0; i < resposta.results.length; i++){
		htmlFilmes = resposta.results[i].overview + "<br/>"

	}
	return htmlFilmes;
};		

/*
function conteudoImagem(resposta){

	let htmlFilmes = "";
	for(let i = 0; i < resposta.results.length; i++){
		htmlFilmes = resposta.results[i].title + "<br/>"
	}
	return htmlFilmes;
};
*/
