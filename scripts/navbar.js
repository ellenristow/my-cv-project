document.addEventListener('DOMContentLoaded', () => {
	//DomCL - é um evento disparado após o html ser carregado
	fetch('../navbar.html') //busca o ficheiro navbar.html e retorna uma promisse com uma resposta
		.then(res => res.text()) //assim que recebe converte o conteúdo em texto (aqui html)
		.then(data => {
			document.getElementById('navbar-placeholder').innerHTML = data;
		}); //assim que for convertido em texto, será injetado num elemento com id 'navbar-placeholder' pelo innerHTML
});
