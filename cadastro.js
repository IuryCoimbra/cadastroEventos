/* Exercicio do modulo Logica de Programacao */
// 22.01.22

/* Criar um programa para cadastrar pecas de uma loja com 3 condicoes:
    i   - Data do evento maior que data atual
    ii  - Idade maior que 18 anos
    iii - Limite de 100 vagas
*/

// Declarar variavel
let dataEvento          = '25.01.2022'
let dataAtual           = '23.01.2022'
let idadeParticipante   = 18
let numCadastrados      = 99

// Forma aninhada
if(dataEvento > dataAtual) {
    console.log("Data Evento Disponível!")
    if(idadeParticipante >= 18) {
        console.log("Idade adequada!")
        if(numCadastrados < 100) {
            console.log("Vaga disponível!")
        }
        else{
            console.log("Sem vagas disponíveis (max.: 100 vagas)!")
        }
    }
    else{
        console.log("Idade abaixo do permitido (18 anos)!")
    }
    console.log("Cadastrado Realizado!")
    numCadastrados += 1
    console.log("Número total de Cadastrados no Evento",numCadastrados) // Teste
}
else{
    console.log("Data do evento menor que a atual!")
    console.log("Não Cadastrado!")
}

