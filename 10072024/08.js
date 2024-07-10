// Função para calcular a média das quatro notas e verificar se o aluno foi aprovado
function calcularMediaEVerificarAprovacao() {
    // Leitura do nome do aluno e das quatro notas
    let nomeAluno = prompt("Digite o nome do aluno:");
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));
    let nota4 = parseFloat(prompt("Digite a quarta nota:"));

    // Calculando a média das notas
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Verificando se o aluno foi aprovado ou reprovado
    let situacao;
    if (media >= 7) {
        situacao = "APROVADO";
    } else {
        situacao = "REPROVADO";
    }

    // Imprimindo o resultado na tela
    console.log(`Aluno: ${nomeAluno}`);
    console.log(`Média das notas: ${media.toFixed(2)}`);
    console.log(`Situação: ${situacao}`);
}

// Chamando a função para iniciar o programa
calcularMediaEVerificarAprovacao();