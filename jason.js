let equipamentos = [];

function adicionarEquipamento() {
    let input = document.getElementById("nomeEquipamento");
    let novoEquipamento = input.value;

    if (novoEquipamento !== "") {
        equipamentos.push(novoEquipamento);
        input.value = "";
        document.getElementById("telaResultado").innerHTML = "Equipamento adicionado com sucesso!";
    } else {
        document.getElementById("telaResultado").innerHTML = "Digite o nome de um equipamento!";
    }
}

function removerEquipamento() {
    if (equipamentos.length === 0) {
        document.getElementById("telaResultado").innerHTML = "Não existem equipamentos para remover.";
    } else {
        let removido = equipamentos.pop();
        document.getElementById("telaResultado").innerHTML = "O equipamento " + removido + " foi removido.";
    }
}

function exibirEquipamentos() {
    if (equipamentos.length === 0) {
        document.getElementById("telaResultado").innerHTML = "Nenhum equipamento cadastrado.";
    } else {
        let lista = "Equipamentos cadastrados: <br><br>";
        for (let i = 0; i < equipamentos.length; i++) {
            lista = lista + "- " + equipamentos[i] + "<br>";
        }
        document.getElementById("telaResultado").innerHTML = lista;
    }
}

function quantidadeEquipamentos() {
    let total = equipamentos.length;
    document.getElementById("telaResultado").innerHTML = "Existem " + total + " equipamentos cadastrados.";
}