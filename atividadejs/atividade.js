/* If, else if, e else
Essa estrutura de condição é utilizada para possibilitar diferentes caminhos durante a construção do código*/
/* Verifica se a idade declarada faz parte de alguma determinada classificação*/

let idade = 18;

if (idade < 18  ){
    console.log('Menor de Idade')
    }else if(idade >= 18 && idade <= 64){
        console.log('Maior de Idade')
    }else {
        console.log('Idoso')
    }

/* Verifica se a resposta é igual a "Sim"*/

let resposta = 'Sim';

if (resposta === 'Sim'){
    console.log('Verdadeiro')
} else{
    console.log('Falso')
}


/*Switch Case
    É utilizado para quando você possui muito destes "Caminhos", quando se há diversas opcções para se selecionar, por exemplo em um cardápio
*/
let opcao = 2;
switch (opcao) {
    case 1:
        console.log('Opção 1')
        break;
    case 2:
        console.log('Opção 2')
        break
    default:
        console.log('Opção Inválida')
        break;
}


let item = 1;
switch (opcao) {
    case 1:
        console.log('Coca-Cola')
        break;
    case 2:
        console.log('Guaraná')
        break
    default:
        console.log('Opção Inválida')
        break;
}

/*For é uma estrutura de repetição que possui contador e atributo iniciados em sua sintaxe*/

for (let index = 0; index < 10; index++) {
    console.log('Chega')
    
}

for (let index = 0; index < 100; index++) {
    console.log('Já foi')
    
}

/*While é uma estrutura de repetição a qual precisa que o valor de referência esteja sendo 
definido antes da execução do próprio, o contador precisa estar dentro de sua estrutura, diferentemente do For*/

let cond = 0
while (cond < 1) {
    console.log('Acabou')
    cond++;
}

/*Se não tiver incremento ao indice/cond o céu se torna o limite */
let conde = 1
while (conde > 0) {
    console.log('Acabou')
    
}