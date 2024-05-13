function calcular() {
    // Obter os valores das variáveis do usuário
    var varA = parseInt(document.getElementById("varA").value);
    var varB = parseInt(document.getElementById("varB").value);

    // Operações
    var diferenca = varA - varB;
    var soma = (2 * varA) + (3 * varB);
    var multiplicacao = varA * varB;

    // Ordenar as variáveis do maior para o menor
    var ordenado = "";
    if (varA > varB) {
        ordenado = varA + ", " + varB;
    } else {
        ordenado = varB + ", " + varA;
    }

    // Exibir os resultados na página HTML
    document.getElementById("diferenca").textContent = "Diferença entre as duas variáveis: " + diferenca;
    document.getElementById("soma").textContent = "O dobro da primeira mais o triplo da segunda variável: " + soma;
    document.getElementById("multiplicacao").textContent = "Multiplicação das duas variáveis: " + multiplicacao;
    document.getElementById("ordenado").textContent = "Variáveis ordenadas do maior para o menor: " + ordenado;

    // Exibir a seção de resultados
    document.getElementById("resultados").style.display = "block";
}