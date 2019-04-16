let senhaCadastrada = "aviao123";
let nome = prompt("Qual é seu nome?");
let senhaEntrada = prompt("Digite sua senha");

if(senhaCadastrada === senhaEntrada){
    let saldo = 1000;
    let vlrSaque = prompt("Olá, "+nome+". Seu saldo é de R$"+saldo+",00. Digite o valor do saque");
    let novoSaldo = saldo - vlrSaque;
    let limite = 500

    if (vlrSaque <= saldo && vlrSaque <= limite){
        alert("Saque aprovado. Seu novo saldo é de R$"+novoSaldo+",00")
    }
    else if (vlrSaque > limite && vlrSaque < saldo){
        alert("o valor desejado é maior que o limite disponivel")
    }
    else{
        alert("Saque estrapola o valor de saldo")
    }
}
else{
    alert("Senha Incorreta");
}