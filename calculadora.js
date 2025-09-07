let despesas = []
function menu() {
    return prompt(
        "=== Calculadora de despesas pessoais ===\n" +
        " 1 - Cadastrar despesas\n" +
        " 2 - Ver resumo das despesas\n" +
        " 3 - Zerar as despesas\n" +
        " 0 -Sair"
    );
}
function cadastrarDespesas() {
    let categoria = prompt("Digite a categoria da despesa");
    let valor = Number(prompt("Digite o valor da despesa"));
    if (isNaN(valor) || valor < 0) {
        alert("Valor inválido! Digite um número positivo");
        return;
    }
    despesas.push({ categoria, valor });
    alert("Despesa cadastrada com sucesso!")
}function verResumo() {
    if (despesas.length === 0) {
        console.log("Nenhuma despesa cadastrada.");
        alert("Nenhuma despesa cadastrada. Pressione OK para voltar.");
        return;
    }
        alert ("O resumo das despesas será exibido no console.Pressione OK para voltar ao menu")

    console.clear();
    console.log("=== RESUMO DAS DESPESAS ===");
    let total = 0;

    despesas.forEach((item, index) => {
        console.log(`${index + 1}. Categoria: ${item.categoria} | Valor: R$ ${item.valor.toFixed(2)}`);
        total += item.valor;
    });

    const valorMedio = total / despesas.length;
    const maiorDespesa = Math.max(...despesas.map(d => d.valor));

    console.log("-----------------------------");
    console.log(`Total gasto: R$ ${total.toFixed(2)}`);
    console.log(`Valor médio: R$ ${valorMedio.toFixed(2)}`);
    console.log(`Maior despesa: R$ ${maiorDespesa.toFixed(2)}`);
}

}
    function limparDespesas() {
        let confirmar = prompt("Tem certeza que deseja limpar todas as despesas? (s/n)");
            if (confirmar.toLowerCase() === "s") {
                    despesas = [];
            alert ("Todas as despesas foram removidas.");
            } else {
                alert ("Operação cancelada.");
            }
    }
    let opcao;
    do {
        opcao = menu()
        switch (opcao) {
            case "1":
                cadastrarDespesas();
                break;
            case "2":
                verResumo ();
                break;
            case "3":
                limparDespesas()
                break
            case "0":
                alert("Saindo da calculadora...");
                break;
            default:
                alert("Opção inválida!");
        }
    } while (opcao !== "0");
