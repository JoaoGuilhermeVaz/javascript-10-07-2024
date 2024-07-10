// Função para ler os valores de A e B, realizar o cálculo e imprimir o resultado
function calcularEImprimirResultado() {
    // Lendo os valores de A e B
    let A = parseInt(prompt("Digite o valor de A:"));
    let B = parseInt(prompt("Digite o valor de B:"));

    let resultado;

    // Verificando se A e B são iguais
    if (A === B) {
        // Se A e B são iguais, soma os valores
        resultado = A + B;
    } else {
        // Se A e B são diferentes, multiplica A por B
        resultado = A * B;
    }

    // Imprimindo o resultado na tela
    console.log(`O valor de C é: ${resultado}`);
}

// Chamando a função para iniciar o programa
calcularEImprimirResultado();