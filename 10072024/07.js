// Função para calcular a média das três notas e imprimir na tela
function calcularMedia() {
    // Leitura das três notas
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));

    // Calculando a média das notas
    let media = (nota1 + nota2 + nota3) / 3;

    // Imprimindo o resultado na tela
    console.log(`A média das notas é: ${media.toFixed(2)}`);
}

// Chamando a função para iniciar o programa
calcularMedia();