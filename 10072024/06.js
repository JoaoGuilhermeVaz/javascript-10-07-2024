// Função para calcular o IMC e imprimir a condição
function calcularIMC() {
    // Leitura do peso (em kg) e altura (em metros)
    let peso = parseFloat(prompt("Digite o peso da pessoa (em kg):"));
    let altura = parseFloat(prompt("Digite a altura da pessoa (em metros):"));

    // Calculando o IMC
    let imc = peso / (altura * altura);

    // Determinando a condição de acordo com a tabela
    let condicao;
    if (imc < 18.5) {
        condicao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        condicao = "Peso ideal (parabéns)";
    } else if (imc >= 25.0 && imc <= 29.9) {
        condicao = "Levemente acima do peso";
    } else if (imc >= 30.0 && imc <= 34.9) {
        condicao = "Obesidade grau I";
    } else if (imc >= 35.0 && imc <= 39.9) {
        condicao = "Obesidade grau II (severa)";
    } else {
        condicao = "Obesidade grau III (mórbida)";
    }

    // Imprimindo o resultado na tela
    console.log(`IMC calculado: ${imc.toFixed(2)}`);
    console.log(`Condição: ${condicao}`);
}

// Chamando a função para iniciar o programa
calcularIMC();