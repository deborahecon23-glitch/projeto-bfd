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
}
function verResumo() {
    if (despesas.length === 0) {
        console.log("Nenhuma despesa cadastrada.");
        alert("Nenhuma despesa cadastrada. Pressione OK para voltar.");
        return;
    }
    console.log("=== RESUMO DAS DESPESAS ===");
    let total = 0;
    let maior = 0;
    despesas.forEach(d => {
        console.log(`Categoria: ${d.categoria}| Valor: R$ $
            {d.valor.tofixed(2)}`);
        total += d.valor;
        if (d.valor > maior) maior = d.valor;

    });
    let media = total / despesas.length;
    console.log(`nValor total : R$ ${total. toFixed(2)}`);
    console.log (` Valor médio R$ ${media.toFixed(2)}`);
    console.log(`Maior despesa: R$ ${maior. toFixed(2)}`);
        alert ("Resumo exibido no console! Pressione OK para voltar ao menu.");

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