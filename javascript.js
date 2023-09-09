 // var = prompt("Digite seu nome"')//
//alert ('Seja bem vindo' + nome + '!');//

//var n1 = parseInt(prompt('Digite o primeira numero'));
//var n2 = parseInt(prompt('Digite o segunda numero'));
//var media = (n1+n2)/2;
//alert('A média é :'+ media);
//if (media >=7) {
    
    //alert('Aprovado');

// else{
   // alert('Reprovado');
//


 
var n = parseInt(prompt('Digite um número'));

if (!isNaN(n) && n % 1 === 0 && n % 2 === 0 && n < 100) {
    alert('O número está dentro dos critérios.');
} else {
    alert('O número não está dentro dos critérios.');
}
