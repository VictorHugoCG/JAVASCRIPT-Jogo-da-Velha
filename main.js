//Declaração de variáveis
let jogo = [];
let tabuleiro = [];
let quemJoga = 0; //0=jogador 1=cpu
let verifica;
let jogando = true;
let nivel = 1;
let jogadaCpu = 1;
let quemComeca = 1;


//Função de jogada do jogador
function jogar(p)
{
     //validando jogada
     //verificando se o jogo está rolando e se é a vez do jogador
     if((jogando == true) && (quemJoga == 0))
     {
        switch(p)
        {
            case 1:
                //verificando se a posição está vazia
                if(jogo[0][0]=="")
                {
                    //se a posição estiver livre recebe X
                    jogo[0][0]="X";
                    //passando a vez de jogar para a cpu
                    quemJoga=1;
                }
            break;
            case 2:
                //verificando se a posição está vazia
                if(jogo[0][1]=="")
                {
                    //se a posição estiver livre jogo recebe X
                    jogo[0][1]="X";
                    //passando a vez de jogar para a cpu
                    quemJoga=1;
                }
            break;
            case 3:
                //verificando se a posição está vazia
                if(jogo[0][2]=="")
                {
                    //se a posição estiver livre jogo recebe X
                    jogo[0][2]="X";
                    //passando a vez de jogar para a cpu
                    quemJoga=1;
                }
            break;
            case 4:
                //verificando se a posição está vazia
                if(jogo[1][0]=="")
                {
                    //se a posição estiver livre jogo recebe X
                    jogo[1][0]="X";
                    //passando a vez de jogar para a cpu
                    quemJoga=1;
                }
            break;
            case 5:
                //verificando se a posição está vazia
                if(jogo[1][1]=="")
                {
                    //se a posição estiver livre jogo recebe X
                    jogo[1][1]="X";
                    //passando a vez de jogar para a cpu
                    quemJoga=1;
                }
            break;
            case 6:
                //verificando se a posição está vazia
                if(jogo[1][2]=="")
                {
                    //se a posição estiver livre jogo recebe X
                    jogo[1][2]="X";
                    //passando a vez de jogar para a cpu
                    quemJoga=1;
                }
            break;
            case 7:
                //verificando se a posição está vazia
                if(jogo[2][0]=="")
                {
                    //se a posição estiver livre jogo recebe X
                    jogo[2][0]="X";
                    //passando a vez de jogar para a cpu
                    quemJoga=1;
                }
            break;
            case 8:
                //verificando se a posição está vazia
                if(jogo[2][1]=="")
                {
                    //se a posição estiver livre jogo recebe X
                    jogo[2][1]="X";
                    //passando a vez de jogar para a cpu
                    quemJoga=1;
                }
            break;
            case 9:
                //verificando se a posição está vazia
                if(jogo[2][2]=="")
                {
                    //se a posição estiver livre jogo recebe X
                    jogo[2][2]="X";
                    //passando a vez de jogar para a cpu
                    quemJoga=1;
                }
            break;          
        }
        //verificando se a jogada aconteceu e se a vez foi passada para a cpu
        if(quemJoga==1)
        {
            //atualizando o tabuleiro e testando a vitória
            //se verifica for diferente de vázio é pq há um vencedor
            //se venceu finaliza o jogo
            atualizaTabuleiro();
            verifica=verificaVitoria();
            if(verifica!="")
            {
                alert(verifica+" venceu!!!")
                jogando=false;
            }
            //senão venceu realiza a jogada da cpu
            cpuJoga();
        }            
     }
}

//Função para jogada da CPU
function cpuJoga()
{
    //verificando se o jogo está rolando
    if(jogando==true)
    {
        //sorteando uma linha uma coluna e verificando se está vazia
        //se estiver vazia realiza a jogada senão sorteia outra linha e coluna
        let l,c;
        if(nivel==1)
        {
            do
            {
                l=Math.round(Math.random()*2);
                c=Math.round(Math.random()*2);
            }while(jogo[l][c]!="");
            jogo[l][c]="O";
        }
        else if(nivel==2)
        {
            //NÍVEL 2
        }


        //Verificando se há um vencedor, se verifica for diferente de vázio é pq há um vencedor
        //se houver finaliza o jogo, senão passa a vez para a cpu
        verifica=verificaVitoria();
        if(verifica!="")
        {
            alert(verifica+" venceu!!!")
            jogando=false;
        }
        atualizaTabuleiro();
        quemJoga=0;
    }
}

//Função para verificar a vitória
function verificaVitoria()
{
    //verificando se os simbolos das linhas,colunas ou diagonais são iguais
    //se sim retorna o simbolo de uma das posições como resultado
    let l,c;
    //LINHAS
    for(l=0;l<3;l++)
    {
        if((jogo[l][0]==jogo[l][1]) && (jogo[l][1]==jogo[l][2]))
        {
            return jogo[l][0]
        }
    }

    //COLUNAS
    for(c=0;c<3;c++)
    {
        if((jogo[0][c]==jogo[1][c]) && (jogo[1][c]==jogo[2][c]))
        {
		return jogo[0][c]
		}
	}

	//DIAGONAIS
    if((jogo[0][0]==jogo[1][1]) && (jogo[1][1]==jogo[2][2]))
    {
		return jogo[0][0]
	}

    if((jogo[0][2]==jogo[1][1]) && (jogo[1][1]==jogo[2][0]))
    {
		return jogo[0][2]
	}
    //senão encontrar nenhum simbolo retorna vazio para indicar que não houve vencedor
    return ""
}

//Função para atualizar o tabuleiro
function atualizaTabuleiro()
{
    //Percorrendo os arrays jogo e tabuleiro para realizar a jogada com X ou O
    for(let l=0;l<3;l++)
    {
        for(let c=0;c<3;c++)
        {
            //verificando se a posicão recebeu um X e atribuindo ao tabuleiro
            if(jogo[l][c]=="X")
            {
                tabuleiro[l][c].innerHTML="X";
                tabuleiro[l][c].style.cursor="default"
            }
            //verificando se a posicão recebeu um O e atribuindo ao tabuleiro
            else if(jogo[l][c]=="O")
            {
                tabuleiro[l][c].innerHTML="O";
                tabuleiro[l][c].style.cursor="default"
            }
            //atualizando/limpando o tabuleiro
            else
            {
                tabuleiro[l][c].innerHTML="";
                tabuleiro[l][c].style.cursor="pointer"
            }
        }
    }
}

//Função inicializadora do jogo
function inicia()
{
    jogando=true;
    jogadaCpu=1;
    jogo=[["","",""],["","",""],["","",""]];
    tabuleiro=[[document.getElementById("p1"),document.getElementById("p2"),document.getElementById("p3")],[document.getElementById("p4"),document.getElementById("p5"),document.getElementById("p6")],[document.getElementById("p7"),document.getElementById("p8"),document.getElementById("p9")]];
    atualizaTabuleiro();
    //definando quem começa jogando através de um teste condicional
    if(quemComeca==1)
    {
        quemComeca=0;
        quemJoga=quemComeca;
        document.getElementById("dvQuemComeca").innerHTML="Quem começa: Jogador"
    }
    else
    {
        quemComeca=1;
        quemJoga=quemComeca;
        document.getElementById("dvQuemComeca").innerHTML="Quem começa: CPU"
        cpuJoga();
    }
}

window.addEventListener("load",inicia);