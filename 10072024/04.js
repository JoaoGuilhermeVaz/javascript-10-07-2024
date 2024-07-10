// Função para calcular quantos salários mínimos um usuário ganha
function calcularSalariosMinimos() {
    const salarioMinimo = 1293.20; // Valor do salário mínimo atual
    let salarioUsuario = parseFloat(prompt("Digite o salário do usuário:"));

    // Calculando quantos salários mínimos o usuário ganha
    let qtdSalariosMinimos = salarioUsuario / salarioMinimo;

    // Imprimindo o resultado na tela
    console.log(`O usuário ganha aproximadamente ${qtdSalariosMinimos.toFixed(2)} salários mínimos.`);
}

// Chamando a função para iniciar o programa
calcularSalariosMinimos();