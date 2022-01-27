// tipos primitivos 

//bolean
var VouF = false;
console.log(typeof(VouF));

//number 
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string 
var nome = 'maria';
console.log(typeof(nome));

//function 
var funcao = function() {}
console.log(typeof(funcao));

//como declarar
var variavel = 'maria';
variavel = 'silva';
console.log(variavel);

let variavel2 = 'maria';
console.log(variavel2);

const constante = 'maria';
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local'
    console.log(escopoLocalInterno);
}

escopoLocal();

//atribuiçao
var atribuicao = 'maria';

//comparação
var comparacao = '0' == 0;
console.log(comparacao);

//comparação identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//adicao 
var adicao = 1 + 1;
console.log(adicao);

//subtracao
var subtracao = 2 - 1;
console.log(subtracao);

//multiplicacao 
var multiplicacao = 2 * 3;
console.log(multiplicacao);

//divisao real 
var divisaoReal  = 6 / 2;
console.log(divisaoReal);

//divisao inteira
var divisaoInteira  = 5 % 2;
console.log(divisaoInteira);

//potenciação
var potenciacao  = 2 ** 10;
console.log(potenciacao);

//maior que
var maiorQue  = 5 > 2;
console.log(maiorQue);

//menor que
var menorQue  = 5 < 2;
console.log(menorQue);

//maior ou igual a 
var maiorOuIgualA  = 5 >= 2;
console.log(maiorOuIgualA);

//menor ou igual a 
var menorOuIgualA  = 5 <= 2;
console.log(menorOuIgualA);

//e - todos os valores sejam verdadeiros 
var e = true && false;
console.log(e);

//ou- qualquer valor seja verdadeiro 
var ou = true || false;
console.log(ou);

//não- inverte os valores  
var nao = !true;
console.log(nao);

