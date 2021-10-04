//

/*
    A Estrutura Condicional possibilita a escolha de um grupo de ações e estruturas a serem executadas quando determinadas condições são ou não satisfeitas. 
    A Estrutura Condicional pode ser Simples ou Composta. A Estrutura Condicional Simples executa um comando ou vários comandos se a condição for verdadeira.
*/

// 0 '' null [] {} undefined false

if(true) {
    console.log('verdade')
}

if(true) {
    console.log('verdade')
} else {
    console.log('falso')
}

if(true) {
    console.log('verdade')
} else if(true) {
    console.log('verdade')
} else if(true){
    console.log('verdade')
} else {
    console.log('falso')
}

switch (true) {
    case true:
        console.log('verdade')
        break;

    default:
        console.log('false')
        break;
}

const ternario = true ? "verdade" : "falso";