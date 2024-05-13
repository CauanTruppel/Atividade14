document.getElementById('payrollForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var nome = document.getElementById('nome').value;
    var salario = parseFloat(document.getElementById('salario').value);

    var taxaINSS;
    var valorDesconto;

    if (salario <= 1000) {
        taxaINSS = 0.08;
    } else if (salario > 1000 && salario <= 1500) {
        taxaINSS = 0.085;
    } else {
        taxaINSS = 0.09;
    }

    var inss = salario * taxaINSS;
    var salarioLiquido = salario - inss;

    var resultadoHTML = `
        <h2>Resultado</h2>
        <p>Nome do Funcionário: ${nome}</p>
        <p>Salário: R$ ${salario.toFixed(2)}</p>
        <p>Taxa de Desconto INSS: ${taxaINSS * 100}%</p>
        <p>Valor do Desconto INSS: R$ ${inss.toFixed(2)}</p>
        <p>Salário líquido: R$ ${salarioLiquido.toFixed(2)}</p>
    `;

    document.getElementById('resultado').innerHTML = resultadoHTML;
});