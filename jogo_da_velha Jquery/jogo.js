var rodada =1;
var matriz= Array(3);
//variavel que controla a rodada e a matriz. lista de jogadas

matriz['a']=Array(3);
matriz['b']=Array(3);
matriz['c']=Array(3);

matriz['a'][1]=0;
matriz['a'][2]=0;
matriz['a'][3]=0;

matriz['b'][1]=0;
matriz['b'][2]=0;
matriz['b'][3]=0;

matriz['c'][1]=0;
matriz['c'][2]=0;
matriz['c'][3]=0;
$(document).ready(function(){

 $('#inicia_jogo').click(function(){

 if ($('#campo1').val()== ''){
 	alert('digite um apelido!');
 	return false;
 }
 //pega o valor dos campos e ja faz uma validação

 if ($('#campo2').val()==''){

 	alert('digite um valor valido');
 	return false;
//pega o valor dos campos e faz uma validação
 }
//pega os nomes digitados e manda pro span
$('#jg1').html($('#campo1').val());
//span recebe o vlor de  campo 1 no html
$('#jg2').html($('#campo2').val());

	

//visualização das paginas.
$('#pagina_inicial').hide();
$('#palco_jogo').show();
});

 $('.jogada').click(function(){
var id_jogada = this.id;
$('#'+id_jogada).off();
//impede que o campo com id clickado contiue puxando o evento click
jogada(id_jogada);
//rcebe o valor da id das divs(cada div clickada)
 });

 function jogada(id){
 	var icone='';
 	var ponto=0;

 	if((rodada%2)==1){
 		icone= 'url("imagens/marcacao_1.png")'

 		ponto=-1;
 	}
 	else
 	{
 		icone= 'url(imagens/marcacao_2.png)'
        ponto=1;
 	}
//faz uma conta para saber qual a vez co base no resto da divisao que retorna impar ou par.
rodada++;
$('#'+id).css('background-image',icone);
//a cada rodada é adicionado a img do click do jogador no css.

var linha_coluna = id.split('-');
//linha coluna recebe todos os arrays truncados pelo parametro que no caso é "-"
//a linha a,b,c recebe ponto em 1,2,3.
matriz[linha_coluna[0]][linha_coluna[1]]=ponto;

verifica_combo();
 }
 function verifica_combo(){

 	//horizontal
 	var pontos=0;
 	for (var i = 1;i <=3; i++) {
 		pontos=pontos+matriz['a'][i];
 		//var pontos vale 0
 		//var i enquanto for menor ou igual a 3 ela soma 1
 		//var pontos recebe pontos + o valor do array a em uma das 3 casas 1,2,3.

 	}
 	ganhador(pontos);
 	var pontos=0;
 	for (var i =1;i<=3;i++){

 		pontos=pontos+matriz['b'][i];
 	}
 	ganhador(pontos);
 	var pontos=0;
 	for(var i=1;i<=3;i++){

 		pontos=pontos+matriz['c'][i];
 	}
 	ganhador(pontos);

 	//vertical
 	for (var l = 1;l<=3;l++){

    pontos=0;
 	pontos+=matriz['a'][l];
 	pontos+=matriz['b'][l];
 	pontos+=matriz['c'][l];

 	ganhador(pontos);
 }
 //diagonal
 pontos=0;
 pontos=matriz['a'][1]+matriz['b'][2]+matriz['c'][3];
 ganhador(pontos);
 //pontos começa com 0
 //pontos recebe a soma dessas 3 casas da matriz 
 //a function ganhador e chamada para conferir o resultado da soma dentro da variavel pontos

 pontos=0;
 pontos=matriz['a'][3]+matriz['b'][2]+matriz['c'][1];
 ganhador(pontos);
 //inverso da diagonal onde s trocamos a ordem da soma da esquerda para a direita.
 
}
 function ganhador(pontos){
 	if (pontos == -3) {

 		var jog_1= $('#campo1').val();


 		alert(jog_1 + ' é ganhador!!!');
 	}
 	else if (pontos == 3) {

 		var jog_2 = $('#campo2').val();

 		alert(jog_2 + ' é ganhador!!!');
 	}


 }


});