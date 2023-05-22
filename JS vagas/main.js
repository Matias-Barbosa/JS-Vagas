let opcao = ""
let vagas = []

do {
    opcao = prompt("Seja Bem-vindo ao sistema de vagas.com" 
    + "\n\n Escolha o serviço que você precisa"
    + "\n\n 1)Listar vagas disponiveis"
    + "\n\n 2)Criar uma nova vaga"
    + "\n\n 3)Visualizar uma vaga"
    + "\n\n 4)Inscrever um candidato em uma vaga"
    + "\n\n 5)Excluir uma vaga"
    + "\n\n 6)Sair do sistema...")

    switch(opcao) {
        case '1':
            //listar vagas
            let listar = ""
            for(let i = 0; i < vagas.length; i++) {
                listar += [i + 1] + ")" + "nome da vaga: " + vagas[i].nome +
                "\nQuantidade de candidatos: " + vagas[i].candidato +
                "\nindice da vaga: " + i + "\n\n"
            }
            alert(listar)
            break
        case '2':
            //cadastrar vaga
            let vaga = {}

            vaga.nome = prompt("insira um nome para a vaga")
            vaga.descricao = prompt("insira uma descricao para a vaga")
            vaga.data = prompt("insira uma data limite para a vaga")
            vaga.candidato = 0;

            const confirmacao = confirm (
                "Cadastrar esta vaga?" +
                "\n Nome da vaga: " + vaga.nome +
                "\n Descricao da vaga: " + vaga.descricao +
                "\n Data limite da vaga:" + vaga.data
            )

            if(confirmacao) {
                vagas.push(vaga)
                alert("Vaga cadastrada com sucesso!")
            } else {
                alert("Voltando ao menu")
            }
            break
        case '3':
            //Visualizar vaga
            function listarVagas() { //funçao para mostrar a lista de vagas
                let listaVagas = ""
            for(let i = 0; i < vagas.length; i++) {
                listaVagas += [i + 1] + ") " + vagas[i].nome + "\n"
            }
            return listaVagas
            }
            function mostrarVaga(numero) {
                if(numero < 1  || numero > vagas.length) {
                    alert("numero invalido");
                    return
                }

                const vaga = vagas[numero - 1];
                alert (
                    "Aqui estão as informações da vaga selecionada" +
                    "\n Nome da vaga: " + vaga.nome +
                    "\nDescrição da vaga: " + vaga.descricao +
                    "\n Data limite da vaga: " + vaga.data
                )
            }
            var vagaDesejada = prompt("Escolha a vaga que deseja visualizar \n" + listarVagas())
            mostrarVaga(vagaDesejada)

            break
        case '4':
            //Inscrever candidato a vaga
            let candidato = {}
            function setarCandidato(numero) {
                if(numero < 1  || numero > vagas.length) {
                    alert("numero invalido");
                    return
                }

                const vaga = vagas[numero - 1];

                const confirmarCandidato = confirm (
                    "Cadastrar para a seguinte vaga?" +
                    "\n Nome da vaga: " + vaga.nome +
                    "\nDescrição da vaga: " + vaga.descricao +
                    "\n Data limite da vaga: " + vaga.data
                )

                if(confirmarCandidato) {
                    alert("Candidato cadastrado com sucesso!")
                vaga.candidato += 1;
                } else {
                    alert("Voltando ao menu")
                }
            }
            const candidatoParaVaga = prompt("insira a vaga desejada para o candidato\n" +
            listarVagas())
            setarCandidato(candidatoParaVaga)
            break
        case '5':
            //Excluir uma vaga
            function deletarVaga(numero) {
                if(numero < 1  || numero > vagas.length) {
                    alert("numero invalido");
                    return
                }

                vagas.splice(numero - 1, 1);
                alert("Vaga deletada com sucesso!")
            }
            const numero = prompt("Qual das seguintes vagas você deseja excluir?\n" +
            listarVagas())
            deletarVaga(numero)
            
            break
        case '6':
            alert("Saindo...")
            break
        default:
            alert("Escolha uma opção valida")
    }
} while(opcao !== "6")