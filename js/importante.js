$(document).ready(function(){
    $(".mensagem").click(function(){
    	var campo_nome = $(".nome").val();
        alert("Sua menagem:"+ campo_nome+" foi enviada");
    });
});