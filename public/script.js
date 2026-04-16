
var nome = prompt("Qual é o seu nome?");

function pedirNumero(mensagem) {
    var valor;
    do {
        valor = Number(prompt(mensagem));
    } while (isNaN(valor));
    return valor;
}

var renda = pedirNumero("Qual é a sua renda mensal?");

var qtd = pedirNumero("Quantas despesas você vai informar? (1 a 5)");
if (qtd < 1) qtd = 1;
if (qtd > 5) qtd = 5;


var totalDespesas = 0;
for (var i = 1; i <= qtd; i++) {
    totalDespesas += pedirNumero("Despesa " + i + ":");
}


var sobra = renda - totalDespesas;
var mensagem;
if (totalDespesas > renda) {
    mensagem = " Atenção: você gastou mais do que ganhou.";
} else if (sobra >= renda * 0.30) {
    mensagem = " Ótimo: boa margem de sobra.";
} else {
    mensagem = " Ok: dá para melhorar a sobra.";
}


var resultado =
    "Nome: " + nome + "\n" +
    "Renda: R$ " + renda.toFixed(2) + "\n" +
    "Total de despesas: R$ " + totalDespesas.toFixed(2) + "\n" +
    "Sobra: R$ " + sobra.toFixed(2) + "\n" +
    mensagem;

alert(resultado);
console.log(resultado);
