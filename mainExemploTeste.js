
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

function buscaFilme(){
	var input = document.querySelector('#filmeBusca')
	var buscar = document.querySelector('#filmeBusca').value;
	var corpo1 = document.querySelector('#posicao1')
	corpo1.innerHTML = ''
	var corpo2 = document.querySelector('#posicao2')
	corpo2.innerHTML = ''
	chamaApi('https://api.themoviedb.org/3/search/movie?api_key=6521859e8b7c918bfaba021cfddac551&language=pt-BR&query='+buscar);
}



/*
local.Storage = pego o filme (objeto), converto em string, salvo no localStorage e converto em objeto para exibir

let httpClient = new XMLHttpRequest;
	
undefined
var resposta;
	
undefined
httpClient.open('GET','https://api.themoviedb.org/3/trending/movie/week?api_key=6521859e8b7c918bfaba021cfddac551&language=pt-BR');
	
undefined
httpClient.send();
undefined
httpClient
XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
var resposta = JSON.parse(httpClient.responseText)
undefined
resposta.results
(20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0: {adult: false, backdrop_path: "/6P3c80EOm7BodndGBUAJHHsHKrp.jpg", genre_ids: Array(6), id: 363088, original_language: "en", …}
1: {adult: false, backdrop_path: "/5DUqFLgkLsJxyqPCAcgTivZy2SX.jpg", genre_ids: Array(3), id: 348350, original_language: "en", …}
2: {id: 351286, video: false, vote_count: 4012, vote_average: 6.5, title: "Jurassic World: Reino Ameaçado", …}
3: {adult: false, backdrop_path: "/mabuNsGJgRuCTuGqjFkWe1xdu19.jpg", genre_ids: Array(4), id: 260513, original_language: "en", …}
4: {adult: false, backdrop_path: "/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg", genre_ids: Array(4), id: 299536, original_language: "en", …}
5: {adult: false, backdrop_path: "/uN6v3Hz4qI2CIqT1Ro4vPgAbub3.jpg", genre_ids: Array(3), id: 454992, original_language: "en", …}
6: {id: 447200, video: false, vote_count: 1076, vote_average: 6.1, title: "Arranha-Céu: Coragem Sem Limite", …}
7: {adult: false, backdrop_path: "/m03jul0YdVEOFXEQVUv6pOVQYGL.jpg", genre_ids: Array(4), id: 400155, original_language: "en", …}
8: {adult: false, backdrop_path: "/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg", genre_ids: Array(4), id: 335983, original_language: "en", …}
9: {adult: false, backdrop_path: "/5K0fgMaJSdEvqSsS8e3Ez4TpvXR.jpg", genre_ids: Array(2), id: 439015, original_language: "en", …}
10: {adult: false, backdrop_path: "/3P52oz9HPQWxcwHOwxtyrVV1LKi.jpg", genre_ids: Array(3), id: 383498, original_language: "en", …}
11: {adult: false, backdrop_path: "/kAErJpVU4ul9R3VzroM8awWrlT2.jpg", genre_ids: Array(3), id: 458423, original_language: "en", …}
12: {adult: false, backdrop_path: "/1hJbE72WiRuWH11QPNiHsvt29xA.jpg", genre_ids: Array(4), id: 442249, original_language: "en", …}
13: {adult: false, backdrop_path: "/5vlYaha6IpsTOUIPZExO7Ruvzyn.jpg", genre_ids: Array(4), id: 400535, original_language: "en", …}
14: {adult: false, backdrop_path: "/zuadOm7Hkp149xnKJTvGKcssp6r.jpg", genre_ids: Array(3), id: 449992, original_language: "id", …}
15: {adult: false, backdrop_path: "/hO1oTBGNxO5fBKVEuWnSpICJH7c.jpg", genre_ids: Array(1), id: 424139, original_language: "en", …}
16: {adult: false, backdrop_path: "/5BxrMNGl3YDiWgHCVJu8iLQoJDM.jpg", genre_ids: Array(2), id: 445651, original_language: "en", …}
17: {adult: false, backdrop_path: "/73iZGJA287epF2nf2UvSbjelvlK.jpg", genre_ids: Array(4), id: 424121, original_language: "en", …}
18: {adult: false, backdrop_path: "/ysM0PbmvxwojAUftlgdb8zjbK0l.jpg", genre_ids: Array(4), id: 402900, original_language: "en", …}
19: {adult: false, backdrop_path: "/x5xxJhbS2PCdwf8n4NzYZISspN1.jpg", genre_ids: Array(3), id: 467824, original_language: "ko", …}
length: 20
__proto__: Array(0)
localStorage.setItem ('chave',"resposta.results[0]")
undefined
localStorage.getItem ('chave')
"resposta.results[0]"
localStorage.setItem ('chave',resposta.results[0])
undefined
localStorage.getItem ('chave')
"[object Object]"
var aString = JSON.stringify(resposta.results[0])
undefined
aString
"{"adult":false,"backdrop_path":"/6P3c80EOm7BodndGBUAJHHsHKrp.jpg","genre_ids":[28,12,35,878,10749,10751],"id":363088,"original_language":"en","original_title":"Ant-Man and the Wasp","overview":"Após ter ajudado o Capitão América na batalha contra o Homem de Ferro na Alemanha, Scott Lang (Paul Rudd) é condenado a dois anos de prisão domiciliar, por ter quebrado o Tratado de Sokovia. Diante desta situação, ele foi obrigado a se aposentar temporariamente do posto de super-herói. Restando apenas três dias para o término deste prazo, ele tem um estranho sonho com Janet Van Dyne (Michelle Pfeiffer), que desapareceu 30 anos atrás ao entrar no mundo quântico em um ato de heroísmo. Ao procurar o dr. Hank Pym (Michael Douglas) e sua filha Hope (Evangeline Lilly) em busca de explicações, Scott é rapidamente cooptado pela dupla para que possa ajudá-los em sua nova missão: construir um túnel quântico, com o objetivo de resgatar Janet de seu limbo.","poster_path":"/azH25XpelbpzSEg8JoQVJQsFNF7.jpg","release_date":"2018-07-04","title":"Homem-Formiga e a Vespa","video":false,"vote_average":7,"vote_count":2911,"popularity":124.999}"
localStorage.setItem ('chave',aString)
undefined
localStorage.getItem ('chave')
"{"adult":false,"backdrop_path":"/6P3c80EOm7BodndGBUAJHHsHKrp.jpg","genre_ids":[28,12,35,878,10749,10751],"id":363088,"original_language":"en","original_title":"Ant-Man and the Wasp","overview":"Após ter ajudado o Capitão América na batalha contra o Homem de Ferro na Alemanha, Scott Lang (Paul Rudd) é condenado a dois anos de prisão domiciliar, por ter quebrado o Tratado de Sokovia. Diante desta situação, ele foi obrigado a se aposentar temporariamente do posto de super-herói. Restando apenas três dias para o término deste prazo, ele tem um estranho sonho com Janet Van Dyne (Michelle Pfeiffer), que desapareceu 30 anos atrás ao entrar no mundo quântico em um ato de heroísmo. Ao procurar o dr. Hank Pym (Michael Douglas) e sua filha Hope (Evangeline Lilly) em busca de explicações, Scott é rapidamente cooptado pela dupla para que possa ajudá-los em sua nova missão: construir um túnel quântico, com o objetivo de resgatar Janet de seu limbo.","poster_path":"/azH25XpelbpzSEg8JoQVJQsFNF7.jpg","release_date":"2018-07-04","title":"Homem-Formiga e a Vespa","video":false,"vote_average":7,"vote_count":2911,"popularity":124.999}"
var filmeExibir = JSON.parse(localStorage.getItem('chave'))
undefined
filmeExibir
{adult: false, backdrop_path: "/6P3c80EOm7BodndGBUAJHHsHKrp.jpg", genre_ids: Array(6), id: 363088, original_language: "en", …}
adult: false
backdrop_path: "/6P3c80EOm7BodndGBUAJHHsHKrp.jpg"
genre_ids: (6) [28, 12, 35, 878, 10749, 10751]
id: 363088
original_language: "en"
original_title: "Ant-Man and the Wasp"
overview: "Após ter ajudado o Capitão América na batalha contra o Homem de Ferro na Alemanha, Scott Lang (Paul Rudd) é condenado a dois anos de prisão domiciliar, por ter quebrado o Tratado de Sokovia. Diante desta situação, ele foi obrigado a se aposentar temporariamente do posto de super-herói. Restando apenas três dias para o término deste prazo, ele tem um estranho sonho com Janet Van Dyne (Michelle Pfeiffer), que desapareceu 30 anos atrás ao entrar no mundo quântico em um ato de heroísmo. Ao procurar o dr. Hank Pym (Michael Douglas) e sua filha Hope (Evangeline Lilly) em busca de explicações, Scott é rapidamente cooptado pela dupla para que possa ajudá-los em sua nova missão: construir um túnel quântico, com o objetivo de resgatar Janet de seu limbo."
popularity: 124.999
poster_path: "/azH25XpelbpzSEg8JoQVJQsFNF7.jpg"
release_date: "2018-07-04"
title: "Homem-Formiga e a Vespa"
video: false
vote_average: 7
vote_count: 2911
__proto__: Object
*/