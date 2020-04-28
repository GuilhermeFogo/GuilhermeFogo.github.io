var app = new Vue ({
  el: '#app',
  data: {
     todos: [
      {text: 'Ensino médio (Concluído)'},
      {text: 'Senac Santo André - Técnico em Informática (Concluido)'},
      {text: 'Victory English Training (Cursando)'},
      {text: 'Ensino Superior- Faculdade Metodista (Cursando 7ºsemestre Sistemas de informação)'}
    ]
  }
});

var lista_certificados = new Vue({
	el: '#lista_certificados',
	 data: {
     nome: [
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
      {text: 'Certificado Alura PMP e CAMP parte1: Processos de Gerenciamento de Projetos'},
      {text: 'Certificado Alura PMP E CAPM PARTE 2: Gerenciamento de Integração'},
      {text: 'Certificado Alura PMP E CAPM PARTE 4: Gerenciamento de Tempo '},
      {text: 'Certificado Alura Java parte1: Primeiros Passos'},
      {text: 'Certificado Alura Java parte2: Introdução à Orientação a Objetos'},
      {text: 'Certificado Alura Java parte5: Pacotes e Java Lang'}
    ]
  }
});


var lista_img = new Vue({
  el: '#lista_img',
   data: {
    caminho: [
       {text: 'Certificado Gigabyte Curso Multiprofissional'},
       {text: 'Certificado Gigabyte Curso TI Java Script'},
       {text: 'Certificado Gigabyte Curso Hardware e Redes'},
       {text: 'Certificado Senac Curso Técnico em Informatica'},
       {text: 'img/Intel/segurancaInformacao1.PNG'},
       {text: 'img/Intel/segurancaInformacao2.PNG'},
       {text: 'Certificado Intel(Dialogo TI) Curso Cloud Computing'},
       {text: 'img/Intel/SoftwareLivre.PNG'},
       {text: 'img/BrasilTI/CertificateMicrosoftConseitoBasico.png'},
       {text: 'Certificado BrasilMais TI(Microsoft) Curso Fundamentos da linguagem C#'},
       {text: 'img/Sololearn/HTML.jpg'},
       {text: 'img/Sololearn/CSS.jpg'},
       {text: 'img/Sololearn/Javascript.jpg'},
       {text: 'img/Sololearn/PHP.jpg'},
       {text: 'img/Sololearn/CSS.jpg'},
       {text: 'img/Sololearn/Java.jpg'},
       {text: 'img/SoftBlue/PHP2017.PNG'},
       {text: 'img/GerenciamentoProjetos/PMP1 Processo de gerenciamento de projetos.PNG'},
       {text: 'img/GerenciamentoProjetos/PMP2 Gerenciamento de Integraçao.PNG'},
       {text: 'img/GerenciamentoProjetos/pmp4 Gerenciamento de tempo.PNG'},
       {text: 'img/Java/Java1 primeiros passos.PNG'},
       {text: 'img/Java/Java2 Orientacao Objetos.PNG'},
       {text: 'img/Java/Java5 Pacotes e java.lang object.PNG'}
    ]
  }
});
