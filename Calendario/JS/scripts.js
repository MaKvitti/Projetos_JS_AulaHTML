var hoje = new Date();
var mes = hoje.getMonth();
var ano = hoje.getFullYear();

	var meses = new Array();
	meses[0]= "Janeiro"; 
	meses[1]="Fevereiro";
	meses[2]= "Março";
	meses[3]= "Abril";
	meses[4]= "Maio";
	meses[5]="Junho";
	meses[6]= "Julho";
	meses[7]= "Agosto";
	meses[8]= "Setembro";
	meses[9]= "Outubro";
	meses[10]="Novembro";
	meses[11]="Dezembro";

function star(){
	var ApMesAno = document.getElementById("mesAno");
	ApMesAno.innerHTML = meses[mes] + " " + ano;
		cale(mes,ano);

}

function prox(){
	if(mes === 11){
        ano = ano +1;
    }
    else {
        ano=ano;
    }
    mes = (mes + 1) % 12; 
	
	star(mes,ano);
	
	
}

function ante(){
	if(mes === 0){
        ano = ano-1;
    }
    else{
        ano=ano;
    }

    if(mes === 0){
        mes=11;
    }
    else{
        mes=mes-1;
    }
	star(mes,ano);
	

}

var ajudaPd = -1;
var ajudaDnM =-1;
		
function cale(mes,ano){

	var Pd = (new Date(ano, mes)).getDay();// retorna que dia da semana começa o mes;
	ajudaPd = Pd;
	var DnM = 32 - new Date(ano, mes, 32).getDate();//retorna quatidade de dias no mes;
	ajudaDnM = DnM;

			//for para limpar os dias;
			for(var di = 0 ; di < 42;di++){
				document.getElementById(di).innerHTML = " "; //limpa o texto
				document.getElementById(di).style.background = '#FFFFFF';//limpa o fundo
				
			}
			
			//for para imprimir os dias;
			var contabela =Pd;	    			
    	 	for(var di = 1 ; di < DnM+1 ;di++){

				if(di  === hoje.getDate() && ano === hoje.getFullYear() && mes === hoje.getMonth())
					document.getElementById(contabela).style.background = '#990000';

				document.getElementById(contabela).innerHTML = di;
		
				contabela++; 
			}

			
		} 
	   		

var salvaqui = Array();
var contador = 0;
var t1 = 0;

function salvar(el){
	
	t1 = el.id;	
	var contabela =ajudaPd;	 
	 			
    	 	for(var dic = 1 ; dic < ajudaDnM+1 ;dic++){

				if(t1 == contabela){

					var diaApa = dic;
					cor(t1);

				}
		
				contabela++; 
			}

	if(typeof diaApa === "undefined"){


	}
	else{
		salvaqui[contador]= "<br>" + diaApa + " de " + meses[mes]+ " de " + ano;
		contador++;

	}
	
	
}

function cor(t1){
	
	var elemento = document.getElementById(t1);  
	elemento.style.background = '#ffcccc';

}

function imp(){

		var elemento = document.getElementById("quadrado");
		 elemento.style.background = '#990000';
		
		 for(var dic = 0 ; dic < salvaqui.length ;dic++){

			elemento.innerHTML = salvaqui;
			
		}
     
	 
}
