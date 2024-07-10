// Função para ler um número inteiro, calcular antecessor e sucessor, e imprimir na tela
function calcularAntecessorESucessor() {
    // Lendo o número inteiro
    let numero = parseInt(prompt("Digite um número inteiro:"));

    // Calculando o antecessor e o sucessor
    let antecessor = numero - 1;
    let sucessor = numero + 1;

    // Imprimindo o resultado na tela
    console.log(`Número digitado: ${numero}`);
    console.log(`Antecessor: ${antecessor}`);
    console.log(`Sucessor: ${sucessor}`);
}

// Chamando a função para iniciar o programa
calcularAntecessorESucessor();