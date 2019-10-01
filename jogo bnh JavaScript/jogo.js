var timerId = null;
function iniciaJogo(){

var valorCombo = document.getElementById("select").value;
// variavel que indica o nivel do jogo selecionado pelo jogador

	

var nivel_jogo = valorCombo; 

//criamos uma variavel para receber os tempos de cada uma das dificuldades
var tempo_segundos = 0;




//atribuimos um tempo para cada dificuldade dentro da variavel que criamos para isso.
if(nivel_jogo==1){// facil -> 120 seg

	tempo_segundos=15;
}
if (nivel_jogo==2) {// normal -> 60 seg

	tempo_segundos=10;
}
if (nivel_jogo==3) {//dificil -> 30 seg

	tempo_segundos=5;
}

//inserindo segundos no input com base na escolha da dificuldade(input recebe o valor da variavel tempo_segundos)

document.getElementById('cronometro').value=tempo_segundos;

//criamos a quantidade de baloes

var qtde_baloes=10;

criaBaloes(qtde_baloes);


//imprime qtde baloes inteiros
document.getElementById('viloes').innerHTML = qtde_baloes;
document.getElementById('baloes_estourados').innerHTML=0;


contagem_tempo(tempo_segundos + 1)
}

function contagem_tempo(segundos){

segundos= segundos- 1;
//o parametro segundos é sempre igual a ele mesmo menos 1
if (segundos == -1){
clearTimeout(timerId);// para a contagem.
alert("você perdeu !");
window.location.reload()
return false;


}
document.getElementById('cronometro').value = segundos;
//o id cronometro recebe em seu valor o parametro segundos 
timerId = setTimeout("contagem_tempo("+segundos+")",1000);
//timer id recebe o parametro segundos que na vdd e o tempo segundo e a cada 1 segundo adiciona ele mesmo outra vez

}

function criaBaloes(qtde_baloes){

		for(var i = 1; i<= qtde_baloes; i++){
			var balao = document.createElement("img");
			balao.src = 'imagens/vilao.png';
			balao.onclick = function(){ estourar(this);}
			//chama um onclick na function estourar e parametriza o proprio balao
			balao.id = 'b'+i;
			// cada balao gerado ganha um id.
			document.getElementById('cenario').appendChild(balao);

		}

}
function estourar (e){
	//function guarda o valor dos baloes no parametro e 

	var id_balao= e.id;
	// var id_balao recebe o id de cada balao

	//limpa o onclick do balao clicado
	document.getElementById(id_balao).setAttribute("onclick","");

	document.getElementById(id_balao).src = 'imagens/midorya.png';
	//troca a imagen do id referenciado pela que ele esta setando apos o igual
 pontuacao(-1);

}


	function pontuacao(acao){
		//passa o valor da tag html para as variavel

		var viloeseiros = document.getElementById('viloes').innerHTML;
		var baloes_estourados = document.getElementById('baloes_estourados').innerHTML;
// converte o valor das variaveis para inteiro para realizar a peracao.
		viloeseiros = parseInt(viloeseiros);
		baloes_estourados = parseInt(baloes_estourados);
//ele cria novas variaveis e diz que seus valores sao o valor da variavel antiga mais a acao que no caso é a -1
		viloeseiros = viloeseiros + acao;
		//o inverso da anterior com uma regrinha de sinal apenas.
		baloes_estourados = baloes_estourados - acao;

		//alert(viloeseiros);
		//alert(baloes_estourados);
//mostra os valores dentro das minhas variaveis

		document.getElementById('viloes').innerHTML = viloeseiros;
		document.getElementById('baloes_estourados').innerHTML = baloes_estourados;

//transforma o valor dos meus ids no valor das variaveis

situacao_jogo(viloeseiros);
	}

	function situacao_jogo(viloeseiros){
if (viloeseiros==0) {
	alert('Você conseguiu herói !');
	window.location.reload()
	
parar_jogo();

}

	}
	function parar_jogo(){

		clearTimeout(timerId);
			
	}
