

function salvar() {
    const nome = document.getElementById("input-nome").value
    const email = document.getElementById("input-email").value
    const mensagem = document.getElementById("mensagem").value


    if (nome != "" && email!= "" && mensagem != "") {
        alert("Dados salvos com secessor")
        
    } else {
        alert("Preenchar todos os campos")
    }

}

function resetar() {
    document.getElementById("input-nome").value = ""
    document.getElementById("input-email").value = ""
    document.getElementById("mensagem").value = ""
    
}

