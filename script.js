var valorEmMetro = 0;
var valorEmDecimetro = 0;
var valorEmCentimetro = 0;
var valorEmMilimetro = 0;

valorEmMetro = prompt('Qual é o valor em metro ?');

// Funções ou Métodos = Ações e verbos
function Conversor(){
valorEmDecimetro = valorEmMetro * 10;
valorEmCentimetro = valorEmDecimetro * 10;
valorEmMilimetro = valorEmCentimetro * 10;
return 'Metro '+ valorEmMetro + ' Decímetro ' + valorEmDecimetro + ' Centímetro ' + valorEmCentimetro + '  Milímetro ' + valorEmMilimetro;
}

console.log(Conversor());
