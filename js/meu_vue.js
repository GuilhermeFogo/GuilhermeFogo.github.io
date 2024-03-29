var app = new Vue({
  el: '#app',
  data: {
    todos: [
      {
        text: 'Universidade Metodista de São Paulo',
        status:'Concluido',
        campus:'Campus Rudge Ramos - SBC',
        tipo:'Bacharelado em Sistemas de Informação',
        anofim: '2020'
      },
      {
        text: 'Senac',
        status:'Concluido',
        campus:'Senac Santo André', 
        tipo: 'Técnico em Informatica',
        anofim: '2016'
      }
    ],
  }
});

var lista_certificados = new Vue({
  el: '#lista_certificados',
  data: {
    nome: [
      { text: 'Certificado Gigabyte Curso Multiprofissional', link: '' },
      { text: 'Certificado Gigabyte Curso TI Java Script', link: '' },
      { text: 'Certificado Gigabyte Curso Hardware e Redes', link: '' },
      { text: 'Certificado Senac Curso Técnico em Informatica', link: '' },
      { text: 'Certificado Intel(Dialogo TI) Curso Segurança da Informação I', link: 'img/Intel/segurancaInformacao1.PNG' },
      { text: 'Certificado Intel(Dialogo TI) Curso Segurança da Informação II', link: 'img/Intel/segurancaInformacao2.PNG' },
      { text: 'Certificado Intel(Dialogo TI) Curso Cloud Computing', link: '' },
      { text: 'Certificado Intel(Dialogo TI) Curso sortware livre', link: 'img/Intel/SoftwareLivre.PNG' },
      { text: 'Certificado BrasilMais TI(Microsoft) Curso desenvolvimento de software', link: 'img/BrasilTI/CertificateMicrosoftConseitoBasico.png' },
      { text: 'Certificado BrasilMais TI(Microsoft) Curso Fundamentos da linguagem C#', link: '' },
      { text: 'Certificado Sololearn Curso Fundamentos do HTML', link: 'img/Sololearn/HTML.jpg' },
      { text: 'Certificado Sololearn Curso Fundamentos do CSS', link: 'img/Sololearn/CSS.jpg' },
      { text: 'Certificado Sololearn Curso Fundamentos do JavaScript', link: 'img/Sololearn/Javascript.jpg' },
      { text: 'Certificado Sololearn Curso Fundamentos do PHP', link: 'img/Sololearn/PHP.jpg' },
      { text: 'Certificado Sololearn Curso Fundamentos do SQL', link: 'img/Sololearn/SQL.jpg' },
      { text: 'Certificado Sololearn Curso Fundamentos do Java', link: 'img/Sololearn/Java.jpg' },
      { text: 'Certificado Softblue phpacademy 2017', link: 'img/SoftBlue/PHP2017.PNG' },
      { text: 'Certificado Alura PMP e CAMP parte1: Processos de Gerenciamento de Projetos', link: 'img/GerenciamentoProjetos/PMP1 Processo de gerenciamento de projetos.PNG' },
      { text: 'Certificado Alura PMP E CAPM PARTE 2: Gerenciamento de Integração', link: 'img/GerenciamentoProjetos/PMP2 Gerenciamento de Integraçao.PNG' },
      { text: 'Certificado Alura PMP E CAPM PARTE 4: Gerenciamento de Tempo ', link: 'img/GerenciamentoProjetos/pmp4 Gerenciamento de tempo.PNG' },
      { text: 'Certificado Alura Java parte1: Primeiros Passos', link: 'img/Java/Java1 primeiros passos.PNG' },
      { text: 'Certificado Alura Java parte2: Introdução à Orientação a Objetos', link: 'img/Java/Java2 Orientacao Objetos.PNG' },
      { text: 'Certificado Alura Java parte5: Pacotes e Java Lang', link: 'img/Java/Java5 Pacotes e java.lang object.PNG' }
    ].reverse()
  }
});

var listIdioma = new Vue({
  el: '#idiomas',
  data: {
    myidiomas: [
      { nome: 'Português', nivel: 'Fluente' },
      { nome: 'Inglês', nivel: 'Intermediario' },
    ]
  }
});

var texto_Abertura = new Vue({
  el: '#abertura',
  data:{
    texto: "Sempre estar em constante aprendizado com a área de TI, atuando ativamente no crescimento profissional focando no Desenvolvimento seguro de programas"
  }
});

var empregos = new Vue({
  el:'#emprego',
  data:{
    empregos:[
      {
        nome_empresa:'Mazars',
        link:'https://por.mazars.com.br/',
        periodo:'Atualmete',
        img:'img/Mazars.png',
        atividade:'Realizando atividades de analises contabeis usando o excel e ferramtas de ETL, ajudando na adequação de perojetos de LGPD e por fim atuando como testador',
        cargo:'Assistente de Sistemas I',
      },
      {
        nome_empresa:'Viajanet',
        link:'https://www.viajanet.com.br/',
        periodo:'1 ano e 4 meses',
        img:'img/Viajanet.jpg',
        atividade:'Atuando diretamente na  criação e manutenção de sistemas internos da empresa, utilizando a tecnologia C#, Angular com a metodologia Scrum',
        cargo:'Estagiario de Desenvolvimento de Sistemas',
      }
    ]
  }
});
