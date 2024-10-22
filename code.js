var numeros = [];
var condicao = "sim";
var i =  0;

while(condicao == "sim"){
    numeros = parseFloat(prompt('Digite um número:'));
    i++;
    condicao = prompt("Deseja adicionar mais números?\n Digite sim para continuar");
}
var operacao = prompt("Digite + para somar e * para multiplicar:");

if (operacao == "+"){
    var total = 0;
    while (i < numeros.length){
        total += numeros[i];
        i++;
        i = 0;
    }
}else {
    var total = 0;
    i = 0; 
    while (i < numeros.length){
        total *= numeros[i];
        i++
    }
}
console.log("O total é:", total);
while (numeros ){
    var resposta = prompt('O resultado da operação é:')  , macaco;

}