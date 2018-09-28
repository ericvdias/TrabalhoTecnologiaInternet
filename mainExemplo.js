var imagem = document.querySelector('#imagem')
var titulo = document.querySelector('#titulo')
var sinopse = document.querySelector('#sinopse')
var linkImagem = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/'
var codImagem;
var idMovie;
var imagemFundo;

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
				codImagem = linkImagem+resposta.results[i].poster_path;
				idMovie = resposta.results[i].id;
				imagemFundo = linkImagem+resposta.results[i].backdrop_path;
				conteudoFilm(resposta.results[i].title, resposta.results[i].overview);
				
			}

		}
	}

}

//<img src="+imagemFundo+">
function conteudoFilm (title, overview){
	var filmeNovo = "<div class='row'> <div class='col-md-4'>" + 
	"<div id=imagem> <img src="+codImagem+"></div> </div>" + 
	"<div class='col-md-8'>" + "<h3 'id= 'filme'>" + title + "</h3>" +
	"<p' 'id='sinopse'>" + overview +	"</p>"		
	"</div> </div>" ;

	var linha = document.querySelector("#novoFilmeLinha")
	var conteudoExistente = linha.innerHTML
	conteudoExistente = conteudoExistente + filmeNovo
	linha.innerHTML = conteudoExistente

}




/*

Tópicos Programação II:
AWT e Swing 
Gerenciadores de Layout
Componentes do Swing
Herança, Polimorfismo, Sobrecarga, Sobreposição, Encapsulamento
Eventos
Analise de códigos
Classes, atributos e métodos

*/ 