const removeCliente = id => {
    if(confirm("Deseja deleter o cliente?")){
        deletaCliente(id)
    }
}

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeCliente = (cpf, nome, id) => {

    const linha = document.createElement('tr');

    const conteudoLinha = `
            <td>${cpf}</td>
            <td>${nome}</td>
            
    `
    linha.innerHTML = conteudoLinha;
    return linha;
}

listarClientes().then( exibe => {
    exibe.forEach( indice => {
        corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id))
    })
})