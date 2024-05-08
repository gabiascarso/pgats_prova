const calcularTotal = (ferramentas, comprar) => {
    
    const quantidadeDeItens = ferramentas.length;
    const listaDeCompras = comprar.length;
    let totalFerramentaAchada = 0;
    let valorTotal = 0;
    let lista = [];

    if (quantidadeDeItens != 0 && listaDeCompras != 0) {

        for (let indice = 0; indice < listaDeCompras; indice++) {

            for (let list = 0; list < quantidadeDeItens; list++) {

                if (comprar[indice] == ferramentas[list].nome) {

                    valorTotal = valorTotal + ferramentas[list].preco;
                    totalFerramentaAchada = totalFerramentaAchada + 1;

                    if (lista.length == 0) {

                        lista = comprar[indice]

                    } else {

                        lista = lista + ", " + comprar[indice]
                    }
                }
            }

        }

        if (totalFerramentaAchada != 0) {

            return `O valor a pagar pelas ferramentas (${lista}) é R$ ${(valorTotal).toFixed(2)}`

        } else {

            throw new Error("Nenhuma ferramenta desejada encontrada.");
        }

    } else if (quantidadeDeItens == 0 && listaDeCompras != 0) {

        throw new Error("Ambas as listas precisam ter ao menos um item.");

    } else if (quantidadeDeItens != 0 && listaDeCompras == 0) {

        throw new Error("Ambas as listas precisam ter ao menos um item.");

    } else {

        throw new Error("Ambas as listas precisam ter ao menos um item.");

    }

}

module.exports = {
    calcularTotal
}

