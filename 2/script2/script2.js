document.getElementById('payrollForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var nome = document.getElementById('nome').value;
    var salario = parseFloat(document.getElementById('salario').value);
    var taxaINSS = 0.08; // Taxa de desconto do INSS

    var inss = salario * taxaINSS;
    var salarioLiquido = salario - inss;

    var resultadoHTML = `
        <h2>Resultado</h2>
        <p>Nome do Funcionário: ${nome}</p>
        <p>Salário bruto: ${salario}</p>
        <p>Valor do INSS: ${inss}</p>
        <p>Salário líquido: ${salarioLiquido}</p>
    `;

    document.getElementById('resultado').innerHTML = resultadoHTML;
});