// Função para ler os valores de A, B, C e realizar as operações
function calcularSomaEComparar() {
    // Lendo os valores de A, B, C
    let A = parseInt(prompt("Digite o valor de A:"));
    let B = parseInt(prompt("Digite o valor de B:"));
    let C = parseInt(prompt("Digite o valor de C:"));

    // Calculando a soma de A e B
    let soma = A + B;

    // Verificando se a soma é menor que C
    let mensagem = `A soma de A (${A}) e B (${B}) é ${soma}.`;
    if (soma < C) {
        mensagem += ` Esta soma é menor que C (${C}).`;
    } else {
        mensagem += ` Esta soma não é menor que C (${C}).`;
    }

    // Exibindo o resultado na tela
    console.log(mensagem);
}

// Chamando a função para iniciar o programa
calcularSomaEComparar();