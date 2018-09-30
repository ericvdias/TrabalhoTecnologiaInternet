/*var imagem = document.querySelector('#imagem')
var titulo = document.querySelector('#titulo')
var sinopse = document.querySelector('#sinopse')*/
var linkImagem = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2'
var codImagem;
var idMovie;
var imagemFundo;

chamaApi('https://api.themoviedb.org/3/trending/movie/week?api_key=6521859e8b7c918bfaba021cfddac551&language=pt-BR');

function chamaApi (url){
	let httpClient = new XMLHttpRequest;
	var resposta;
	httpClient.open('GET',url);
	httpClient.send();
	
	httpClient.onreadystatechange = function(request){
		if(httpClient.readyState == 4 && httpClient.status == 200) {
			
			var resposta = JSON.parse(httpClient.responseText)

			for(let i = 0; i < resposta.results.length; i++){
				
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
	var filmeNovo = "<div class=row id=novoFilmeLinha> <div class=col-md-4 show-image>" + 
	"<div id=imagem> <img src="+codImagem+" alt=minha imagem></div></div>" + 
	"<div class=col-md-8>" + "<h3 id= filme>" + title + "</h3>" +
	"<p id=sinopse>" + overview +	"</p>"		
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