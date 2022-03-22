 // Variaveis globais
var temp = null; //Armazena o tempo
var contador = 0; //controla qual pergunta esta 
var pontuacao = 0;//pontuacao do jogo
var vidaJogo = 2;//quantidade de vidas, no caso 3 
var TempoJogo = 60;//tempo para responder o quiz inteiro

function iniciar()
{
    //Carregamento a pagina do jogo
    window.location.href = "jogo.html";
}
function jogo()
{   
    criarPerguntas();
    criarRespostas();
    criandoVida();
    document.getElementById('PontuacaoM').innerHTML = pontuacao;
}
function criarPerguntas()
{         
        var perguntaP = Array();
        perguntaP[0]='Pergunta 1 - Qual o jogador mais vezes campeão da NBA ?';
        perguntaP[1]='Pergunta 2 - Qual foi o primeiro brasileiro a jogar a NBA ?';
        perguntaP[2]='Pergunta 3 - Qual o tecnico mais vitorioso da NBA ?';
        perguntaP[3]='Pergunta 4 - Qual o jogador que possui mais MVPs ?';

        var pergunta = document.createElement('h3')
        pergunta.id = "pergunta";
        document.getElementById('PerguntaM').appendChild(pergunta);
        document.getElementById("pergunta").innerHTML = perguntaP[contador];
        
}
function criarRespostas()
{        
            var respostaP = Array();
                respostaP['p0'] = Array();
                    respostaP['p0'][0] = 'Bill Russell';
                    respostaP['p0'][1] = 'Michael Jordan';
                    respostaP['p0'][2] = 'Lebron James';
                    respostaP['p0'][3] = 'Kobe Bryant';
                respostaP['p1'] = Array();
                    respostaP['p1'][0] = 'Nenê Hilário';
                    respostaP['p1'][1] = 'Rolando Junior';
                    respostaP['p1'][2] = 'Oscar Schmidt';
                    respostaP['p1'][3] = 'Alex Garcia';
                respostaP['p2'] = Array();
                    respostaP['p2'][0] = 'Pat Riley';
                    respostaP['p2'][1] = 'Gregg Popovich';
                    respostaP['p2'][2] = 'John Kundla';
                    respostaP['p2'][3] = 'Phill Jackson';
                respostaP['p3'] = Array();
                    respostaP['p3'][0] = 'Bill Russell';
                    respostaP['p3'][1] = 'Kareem Abdul-Jabbar ';
                    respostaP['p3'][2] = 'Michael Jordan';
                    respostaP['p3'][3] = 'LeBron James';
          
            //criando elemento HTML
            for(i=0;i<4;i++)
            {
               
                var resposta = document.createElement("div");
                resposta.id = "resposta_" + i;
                resposta.onclick = function(){Verificacao(this)};
                document.getElementById("respostaM").appendChild(resposta);
                }
                

            //criando respostas
            for(j=0;j<4;j++)
            {
                document.getElementById("resposta_"+ j).innerHTML = respostaP["p"+contador][j];
            }

}
function Verificacao(qualResposta)
{   
    
    var ControleResposta = qualResposta.id;
    switch(contador)
    {
        case 0:
                
                if(ControleResposta === "resposta_0" )
                {
                    contador++;
                    
                    pontos(1);
                    jogo();
                }
                else
                {
                    
                    pontos(0);
                    jogo();
                }
            
        break;
        case 1:
                if(ControleResposta === "resposta_1" )
                {
                    contador++;
                     
                    pontos(1);
                    jogo();
                }
                else
                {
                    pontos(0);
                    jogo();
                   
                }
           
        break;
        case 2:
                if(ControleResposta === "resposta_3" )
                {
                    contador++;
                     
                    pontos(1);
                    jogo();
                    
                }
                else
                {
                    pontos(0);
                    jogo();
                   
                }
            
        break;
        case 3:
                if(ControleResposta === "resposta_1" )
                {
                    //contador++;
                    pontos(1);
                }
                else
                {
                    pontos(0);
                    jogo();
                    
                }
            
        break;
        
    }
}
function pontos(pontosid)
{
     if(pontosid == 1)
     {
            pontuacao = pontuacao +100;
           
            
     }
     if(pontuacao == 400 ){

        fimDeJogo(true);

    }
     if(pontosid == 0){

        vida();
     }
}
function vida()
{   
    vidaJogo--;
    if(vidaJogo < 0)
    {
        window.alert("Acabou suas vidas, voce perdeu !!!");
        window.location.href = "index.html";
    }
}
function criandoVida(){

        document.getElementById("vidaM").innerHTML = vidaJogo+1;
        

}
function AtualizarTempo(){

    TempoJogo--;
    if(TempoJogo <= 0){
        fimDeJogo(false);
        return;
    }
    document.getElementById('tempoM').innerHTML = TempoJogo;

    //chamar esta mesma funcao depois de 1 segundo 

    timerId = setTimeout("AtualizarTempo("+ TempoJogo +")",1000);
}
function fimDeJogo(ganhou)
{
        clearTimeout(timerId);
        if(ganhou)
        {
            window.alert("Parabens,voce ganhou !!!!");
            window.location.href = "index.html";
        }
        else
        {
            window.alert("Tempo Acabou, voce perdeu!!!");
            window.location.href = "index.html";
        }
           
}
