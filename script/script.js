function mostrarDadosForm(event) {
    event.preventDefault();

    let nome = document.getElementById("ipNome").value;
    let email = document.getElementById("ipEmail").value;
    let tel = document.getElementById("ipTel").value;
    let dataNasc = document.getElementById("ipData").value;
    let partes = dataNasc.split("-");
    let data = new Date(partes[0], partes[1] - 1, partes[2]);
    let dataFormatada = data.toLocaleDateString("pt-BR");
    let onde = document.getElementById("slOnde").value;
    let mensagem = document.getElementById("taMensagem").value;

    //Insere as informações do formulário nos <p>
    document.getElementById("pNome").innerText = "Nome: " + nome;
    document.getElementById("pEmail").innerText = "Email: " + email;
    document.getElementById("pTel").innerText = "Telefone: " + tel;
    document.getElementById("pDataNasc").innerText = "Data de nascimento: " + dataFormatada;
    document.getElementById("pOnde").innerText = "Onde nos conheceu: " + onde;
    document.getElementById("pMensagem").innerText = "Mensagem: " + mensagem;
    document.getElementById("btnConfirmar").style.display = "block";
}

document
    .getElementById("btnConfirmar")
    .addEventListener("click", confirmarEnvio);

document
    .getElementById("btnLimpar")
    .addEventListener("click", apagarInformações);

function apagarInformações() {
    document.getElementById("pNome").innerText = "";
    document.getElementById("pEmail").innerText = "";
    document.getElementById("pTel").innerText = "";
    document.getElementById("pDataNasc").innerText = "";
    document.getElementById("pOnde").innerText = "";
    document.getElementById("pMensagem").innerText = "";

    document.getElementById("btnConfirmar").style.display = "none";
}

function confirmarEnvio() {
    alert("Dados enviados com sucesso!");
        
    document.getElementById("frmContato").reset();

    document.getElementById("pNome").innerText = "";
    document.getElementById("pEmail").innerText = "";
    document.getElementById("pTel").innerText = "";
    document.getElementById("pDataNasc").innerText = "";
    document.getElementById("pOnde").innerText = "";
    document.getElementById("pMensagem").innerText = "";

    document.getElementById("btnConfirmar").style.display = "none";
}