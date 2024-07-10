// Função para ler três valores inteiros diferentes e imprimir em ordem decrescente
function ordenarDecrescente() {
    // Leitura dos três valores inteiros diferentes
    let valor1 = parseInt(prompt("Digite o primeiro valor inteiro:"));
    let valor2 = parseInt(prompt("Digite o segundo valor inteiro (diferente do primeiro):"));
    let valor3 = parseInt(prompt("Digite o terceiro valor inteiro (diferente dos anteriores):"));

    // Array para armazenar os valores
    let valores = [valor1, valor2, valor3];

    // Ordenando os valores em ordem decrescente
    valores.sort(function(a, b) {
        return b - a;
    });

    // Imprimindo os valores ordenados na tela
    console.log("Valores em ordem decrescente:");
    for (let i = 0; i < valores.length; i++) {
        console.log(valores[i]);
    }
}

// Chamando a função para iniciar o programa
ordenarDecrescente();