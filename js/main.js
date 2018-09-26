
chamaApi('https://api.themoviedb.org/3/trending/movie/week?api_key=6521859e8b7c918bfaba021cfddac551&language=pt-BR','#exibeFilmes', conteudoFilm);

/*chamaApi('https://api.themoviedb.org/3/trending/movie/week?api_key=6521859e8b7c918bfaba021cfddac551&language=pt-BR','#imagemFilme', conteudoImagem);*/

chamaApi('https://api.themoviedb.org/3/trending/movie/week?api_key=6521859e8b7c918bfaba021cfddac551&language=pt-BR','#sinopse', conteudoSinopse);


function chamaApi (url, id, funcao){
	let httpClient = new XMLHttpRequest;
	var resposta;
	httpClient.open('GET',url);
	httpClient.send();
	
	httpClient.onreadystatechange = function(request){
		if(httpClient.readyState == 4 && httpClient.status == 200) {
			let divFilmes = document.querySelector(id)
			var resposta = JSON.parse(httpClient.responseText)
			let conteudoHtml = funcao(resposta);
			divFilmes.innerHTML = conteudoHtml;
		}
	}

};

function conteudoFilm(resposta){

	let htmlFilmes = "";
	for(let i = 0; i < resposta.results.length; i++){
		htmlFilmes += resposta.results[i].title + "<br/>"
		#sinopse = resposta.results[i].id;
	}
	return htmlFilmes;
};


/*
function conteudoSinopse(resposta){


let htmlFilmes = "";
	for(let i = 0; i < resposta.results.length; i++){
		htmlFilmes += resposta.results[i].overview + "<br/>"

	}
	return htmlFilmes;
};		

function conteudoImagem(resposta){

	let htmlFilmes = "";
	for(let i = 0; i < resposta.results.length; i++){
		htmlFilmes = resposta.results[i].title + "<br/>"
	}
	return htmlFilmes;
};
*/