/*
Ensino médio (Concluído)
Senac Santo André - Técnico em Informática (Concluido)
Victory English Training (Cursando)
Ensino Superior- Faculdade Metodista 
(Cursando 4ºsemestre Sistemas de informação)
*/
var app = new Vue ({
  el: '#app',
  data: {
     todos: [
      {text: 'Ensino médio (Concluído)'},
      {text: 'Senac Santo André - Técnico em Informática (Concluido)'},
      {text: 'Victory English Training (Cursando)'},
      {text: 'Ensino Superior- Faculdade Metodista (Cursando 4ºsemestre Sistemas de informação)'}
    ]
  }
});

var lista_certificados = new Vue({
	el: '#lista_certificados',
	 data: {
     todos: [
      {text: 'Certificado Gigabyte Curso Multiprofissional'},
      {text: 'Certificado Gigabyte Curso TI Java Script'},
      {text: 'Certificado Gigabyte Curso Hardware e Redes'},
      {text: 'Certificado Senac Curso Técnico em Informatica'},
      {text: 'Certificado Intel(Dialogo TI) Curso Segurança da Informação I'},
      {text: 'Certificado Intel(Dialogo TI) Curso Segurança da Informação II'},
      {text: 'Certificado Intel(Dialogo TI) Curso Cloud Computing'},
      {text: 'Certificado Intel(Dialogo TI) Curso sortware livre'},
      {text: 'Certificado BrasilMais TI(Microsoft) Curso desenvolvimento de software'},
      {text: 'Certificado BrasilMais TI(Microsoft) Curso Fundamentos da linguagem C#'},
      {text: 'Certificado Sololearn Curso Fundamentos do HTML'},
      {text: 'Certificado Sololearn Curso Fundamentos do CSS'},
      {text: 'Certificado Sololearn Curso Fundamentos do JavaScript'},
      {text: 'Certificado Sololearn Curso Fundamentos do PHP'},
      {text: 'Certificado Sololearn Curso Fundamentos do SQL'},
      {text: 'Certificado Sololearn Curso Fundamentos do Java'},
      {text: 'Certificado Softblue phpacademy 2017'},
      {text: 'Certificado Alura ITIL Foundation 1:Introdução ao Gerenciamento de TI'},
      {text: 'Certificado Alura PMP e CAMP parte1: Processos de Gerenciamento de Projetos'}

      
    ]
  }
});


/*
-Certificado Gigabyte Curso Multiprofissional
-Certificado Gigabyte Curso TI Java Script
-Certificado Gigabyte Curso Hardware e Redes
-Certificado Senac Curso Técnico em Informatica
-Certificado Intel(Dialogo TI) Curso Segurança da Informação I
-Certificado Intel(Dialogo TI) Curso Segurança da Informação II
-Certificado Intel(Dialogo TI) Curso Cloud Computing
-Certificado Intel(Dialogo TI) Curso sortware livre
-Certificado BrasilMais TI(Microsoft) Curso desenvolvimento de software
-Certificado BrasilMais TI(Microsoft) Curso Fundamentos da linguagem C#
-Certificado Sololearn Curso Fundamentos do HTML
-Certificado Sololearn Curso Fundamentos do CSS
-Certificado Sololearn Curso Fundamentos do JavaScript
-Certificado Sololearn Curso Fundamentos do PHP
-Certificado Sololearn Curso Fundamentos do SQL
-Certificado Sololearn Curso Fundamentos do Java
-Certificado Softblue phpacademy 2017

*/





var links_certificados = new Vue({
	el: '#links_certificados',
	data: {
		todos:[
			{text: 'img/imagem.png'}
		]
	}
});