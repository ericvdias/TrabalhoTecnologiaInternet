/*var imagem = document.querySelector('#imagem')
var titulo = document.querySelector('#titulo')
var sinopse = document.querySelector('#sinopse')*/
var linkImagem = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2'
var codImagem;
var idMovie;
var imagemFundo;
var exibetitulo;

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
				if(i == 0 || i % 2 == 0){
					exibetitulo = resposta.results[i].title;
					conteudoFilmPos1(resposta.results[i].title, resposta.results[i].overview);

				} else{
					conteudoFilmPos2(resposta.results[i].title, resposta.results[i].overview);
				}
			}

		}
	}
}

function conteudoFilmPos1 (title, overview){
	var filmeNovo = "<div class=row id=posicao1>" +
	"<div class=col-md-7 show-image>" + 
	"<div id=imagem> <img src="+codImagem+" title="+exibetitulo+" >" +
	"</div>" +
	"</div>" + 
	"<div class=col-md-5>" + "<h3 id= filme>" + title + "</h3>" +
	"<p class=block-with-text id=sinopse>" + overview +	"</p>" +
	"<a hef = # class='btn btn-success' data-toggle='tooltip' data-placement='bottom' title='Adicionar na Minha Lista' btn-custom'><span class='glyphicon glyphicon-thumbs-up'></span>" +
	"</a>" +
	"</div>" +
	"</div>" ;

	var linha = document.querySelector("#posicao1")
	var conteudoExistente = linha.innerHTML
	conteudoExistente = conteudoExistente + filmeNovo
	linha.innerHTML = conteudoExistente

}

function conteudoFilmPos2 (title, overview){
	var filmeNovo = "<div class=row id=posicao2>" +
	"<div class=col-md-7 show-image>" + 
	"<div id=imagem> <img src="+codImagem+">" +
	"</div>" +
	"</div>" + 
	"<div class=col-md-5>" + "<h3 id= filme>" + title + "</h3>" +
	"<p class=block-with-text id=sinopse>" + overview +	"</p>" +
	"<a hef = # class='btn btn-success' data-toggle='tooltip' data-placement='bottom' title='Adicionar na Minha Lista' btn-custom'><span class='glyphicon glyphicon-thumbs-up'></span>" +
	"</a>" +
	"</div>" +
	"</div>" ;

	var linha = document.querySelector("#posicao2")
	var conteudoExistente = linha.innerHTML
	conteudoExistente = conteudoExistente + filmeNovo
	linha.innerHTML = conteudoExistente

}

function chamaFilme(){
	var input = document.querySelector('#filmeBusca')
	var pes = document.querySelector('#filmeBusca').value;
	var corpo = document.querySelector('#posicao2')
	corpo.innerHTML = ''
	chamaApi('https://api.themoviedb.org/3/search/movie?api_key=6521859e8b7c918bfaba021cfddac551&language=en-US&query='+pes);
	if(input.value == ''){
		chamaApi('https://api.themoviedb.org/3/trending/movie/week?api_key=6521859e8b7c918bfaba021cfddac551')
	}
	input.value = ''
}