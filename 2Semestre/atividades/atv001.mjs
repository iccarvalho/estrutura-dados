/*
INSTRUÇÕES:
1. Leia atentamente as instruções para realizar a atividade.
2. Conteúdo Programático: busca sequencial, busca binária, ordenação com bubble-sort, selection-sort, merge-sort (recursividade).
3. O trabalho prático deverá ser feito INDIVIDUAL.
4. O programa-fonte deverá ser feito em Javascript (código) e deverá ser compactado e enviado na tarefa do AVA.
5. A data limite para a entrega e envio do arquivo Fonte é: 13/09/2026 (23:59h).

DEFINIÇÃO DE REQUISITOS / ESPECIFICAÇÕES / CONSIDERAÇÕES / RECOMENDAÇÔES:

ESTRUTURA: Construa uma aplicação em Javascript para a manipulação de dados armazenados em uma estrutura de dados heterogênea dinâmica utilizando um Array de Objetos por exemplo. O software deve ser capaz de realizar um Cadastro de Alunos de uma Faculdade. Se preferir, poderá definir um limite máximo de alunos cadastrados.

Você deve implementar os algoritmos sem usar Array.sort()

DADOS: Os dados/campos a serem armazenados sobre os alunos são obrigatoriamente: NOME; RA; IDADE; SEXO; MÉDIA e RESULTADO (Aprovado/Reprovado). Observação para média de aprovados: >= 6,0

TELA DE APRESENTAÇÃO DO PROGRAMA:
Conter as opções abaixo:
- Cadastrar Alunos.
- Relatório de Alunos em ordem crescente por Nome.
- Relatório de Alunos em ordem decrescente por RA.
- Relatório de Alunos em ordem crescente por Nome, apenas dos Aprovados.

Obs: Para os relatórios, todos os campos de cada aluno deverão ser apresentados na tela.
*/

import * as readline from 'node:readline/promises';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function cadastrarAluno(cadastro) {
    const nome = await rl.question("Nome: ");
    const ra = Number(await rl.question("RA: "));
    const idade = Number(await rl.question("Idade: "));
    const sexo = await rl.question("Sexo: ");
    const media = Number(await rl.question("Média: "));
    const resultado = media >= 6 ? "Aprovado" : "Reprovado";

    const aluno = {
        nome,
        ra,
        idade,
        sexo,
        media,
        resultado
    };

    cadastro.push(aluno);
    console.log("Aluno cadastrado!\n");
}

// Bubble Sort
function relatorioCrescenteNomes(cadastro) {
    if(cadastro.length === 0) {
        console.log("Nenhum aluno cadastrado!");
        return;
    }

    const relatorio = [...cadastro]; // cópia

    let swap

    do {
        swap = false;

        for(let i = 0; i < relatorio.length - 1; i++) {
            if(relatorio[i].nome > relatorio[i+1].nome) {
                [relatorio[i], relatorio[i+1]] = [relatorio[i+1], relatorio[i]]; 
                swap = true;
            }
        }
    } while (swap);

    console.log(relatorio);
}

// Selection Sort
function relatorioDecrescenteRA(cadastro) {
    if(cadastro.length === 0) {
        console.log("Nenhum aluno cadastrado!");
        return;
    }

    const relatorio = [...cadastro];

    for(let selected = 0; selected < relatorio.length - 1; selected++) {
        let higherPos = selected;

        for(let i = higherPos + 1; i < relatorio.length; i++) {
            if(relatorio[higherPos].ra < relatorio[i].ra) higherPos = i;
        }

        if(relatorio[selected].ra < relatorio[higherPos].ra) {
            [relatorio[selected], relatorio[higherPos]] = [relatorio[higherPos], relatorio[selected]]; 
        }
    }

    console.log(relatorio);
}

// Busca Sequencial + Merge Sort
function relatorioCrescenteNomesAprovados(cadastro) {
    if(cadastro.length === 0) {
        console.log("Nenhum aluno cadastrado!");
        return;
    }

    const aprovados = []

    for (let i = 0; i < cadastro.length; i++) {
        if (cadastro[i].resultado === "Aprovado") {
            aprovados.push(cadastro[i]);
        }
    }

    if (aprovados.length === 0) {
        console.log("Nenhum aluno aprovado encontrado!");
        return;
    }

    const relatorio = MergeSortNomes(aprovados);

    console.log(relatorio);
}

function MergeSortNomes(arr) {
    if(arr.length < 2) return arr;

    let mid = Math.floor(arr.length / 2);

    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);

    leftArr = MergeSortNomes(leftArr);
    rightArr = MergeSortNomes(rightArr);

    let leftPos = 0, rightPos = 0, resArr = [];

    while (leftPos < leftArr.length && rightPos < rightArr.length) {
        if (leftArr[leftPos].nome <= rightArr[rightPos].nome) {
            resArr.push(leftArr[leftPos]);
            leftPos++;
        } else {
            resArr.push(rightArr[rightPos]);
            rightPos++;
        }
    }

    return [...resArr, ...leftArr.slice(leftPos), ...rightArr.slice(rightPos)];
}

async function main() {
    const alunos = [];
    let opcao = 0;

    do {
        console.log("\nSISTEMA ACADÊMICIO");
        console.log("1 - Cadastrar Aluno");
        console.log("2 - Relatório de Alunos em ordem crescente por Nome");
        console.log("3 - Relatório de Alunos em ordem decrescente por RA");
        console.log("4 - Relatório de Alunos em ordem crescente por Nome (Apenas Aprovados)");
        console.log("5 - Sair\n");
        
        opcao =  Number(await rl.question("Escolha uma opção: "));

        switch(opcao) {
            case 1:
                await cadastrarAluno(alunos);
                break;
            case 2:
                relatorioCrescenteNomes(alunos);
                break;
            case 3:
                relatorioDecrescenteRA(alunos);
                break;
            case 4:
                relatorioCrescenteNomesAprovados(alunos);
                break;
            case 5:
                console.log("Encerrando programa...");
                rl.close();
                break;
            default:
                console.log("Opção inválida!");
        }             
    } while(opcao !== 5)
}

main();