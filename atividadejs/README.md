# Tipos de Estruturas
+ If, else if e else
+ Switch Case
+ For Loop
+ While Loop
## ***If, else if e else***

Essa estrutura de condição é utilizada para possibilitar diferentes caminhos durante a construção do código. 

### ***Exemplos:***
 + Verifica se a idade declarada faz parte de alguma das classificações _Menor de Idade_, _Maior de Idade_ ou _Idoso_.

```Js
let idade = 18;

if (idade < 18  ){
    console.log('Menor de Idade')
    }
    else if(idade >= 18 && idade <= 64){
        console.log('Maior de Idade')
    }
    else {
        console.log('Idoso')
    }
```
+ Verifica se a resposta é igual a "Sim".

```Js
let resposta = 'Sim';

if (resposta === 'Sim'){
    console.log('Verdadeiro')
} else{
    console.log('Falso')
}
```

## ***Switch Case***
    É utilizado para quando você possui muito destes "Caminhos" citados no if, quando se há diversas opções para se selecionar pode-se utilizar o Switch Case.
### ***Exemplos***
+ Seleciona a opção 2.
```JS
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

```
+ Seleciona o item 1 "Coca-Cola" em um contexto de cardápio
```JS
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
```
## ***For***
For é uma estrutura de repetição que possui contador e indice iniciados em sua sintaxe.
### ***Exemplos***

+ A informação 'Chega' será impressa até que o indice alcance o número 9
```JS
for (let index = 0; index < 10; index++) {
    console.log('Chega')
    
}

for (let index = 0; index < 100; index++) {
    console.log('Já foi')
    
}
```
## ***While***
While é uma estrutura de repetição a qual precisa que o valor de referência esteja sendo definido antes da execução do próprio, o contador precisa estar dentro de sua estrutura, diferentemente do For.
### ***Exemplos***
+ Declarando o valor inicial de `con` antes de iniciar o laço.
```JS
let cond = 0
while (cond < 1) {
    console.log('Acabou')
    cond++; 
}
```

+ Se não tiver incremento ao indice (`cond++`) o céu se torna o limite e o laço nunca ira atingir um fim.
```JS
let conde = 1
while (conde > 0) {
    console.log('Acabou')
 
}
```