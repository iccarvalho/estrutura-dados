/*
1. Big Data na Recomendação (Responda como //comentários) 
Uma matriz esparsa é aquela onde a maioria dos elementos são zeros. No Netflix, temos uma matriz onde as linhas são usuários e as colunas são filmes. Como um usuário assiste a apenas uma fração minúscula do catálogo, armazenar todos os zeros é um desperdício massivo de recursos.

Desafio de Cálculo de Memória

    Considere o seguinte cenário real:
    • Usuários: 1.000.000 (1 milhão)
    • Filmes no Catálogo: 10.000
    • Média de filmes assistidos por usuário: 100

1. Calcule quantos Gigabytes (GB) seriam necessários para armazenar essa matriz no formato Denso (onde guardamos todos os zeros), considerando que cada número ocupa o tipo padrão de 4 bytes.

    Resposta:   1.000.000 * 10.000 = 10.000.000.000 de números
                10.000.000.000 * 4 = 40.000.000.000 bytes
                40.000.000.000 / 1024 / 1024 / 1024 = +-37 GB

2. Calcule o espaço necessário no formato Esparso (COO), onde para cada filme assistido guardamos a tripla: {linha, coluna, valor}. (Dica: cada tripla
terá 3 números de 4 bytes cada).

    Resposta:   3 * 4 = 12 bytes (Armazenamento da tripla)
                100 (média de filmes assistidos) * 12  bytes = 1.200  bytes
                1.200 * 1.000.000 (usuários) = 1.200.000.000 bytes
                1.200.000.000 / 1024 / 1024 / 1024 = +-1.1 GB


3. Qual é a economia real de memória em porcetagem?

    Resposta:   37x = 1.1 * 100
                37x = 110
                x = 110 / 37
                x = +-3% de uso
                Logo, houve uma economia de 97% de uso de memória.

2. Big Data na Netflix (Código)
Imagine que você é um desenvolvedor na Netflix. Temos uma matriz onde as linhas são usuários e as colunas são filmes. Como a maioria dos usuários não assistiu a todos os filmes, usamos o formato COO (Lista de Triplas) para não desperdiçar memória.

Especificações Técnicas:

    Total de Usuários (Linhas): 4
    Total de Filmes (Colunas): 5
    Vetor de Pesos: Contém a importância de cada um dos 5 filmes para umarecomendação atual.

Sua Tarefa de Programação
Implemente em JavaScript uma função que realize a multiplicação da Matriz
Esparsa (COO) pelo Vetor de Pesos.
*/

const avaliacoes = [
    {linha: 0, coluna: 1, valor: 5},
    {linha: 1, coluna: 3, valor: 2},
    {linha: 3, coluna: 0, valor: 4}
];

const pesos = [10, 20, 30, 40, 50]; // Pesos para os filmes 0, 1, 2, 3 e 4

function multiplicarRecomendacao(matrizEsparsa, vetorDenso){
    let resultado = new Array(4).fill(0);

    for(let i = 0; i < matrizEsparsa.length; i++){
        const {linha, coluna, valor} = matrizEsparsa[i];
        console.log(`Usuário ${linha} -> Filme ${coluna} (Nota ${valor})`);
        resultado[linha] = valor * vetorDenso[coluna];
    }

    return resultado;
}

console.log(`Seu resultado: ${multiplicarRecomendacao(avaliacoes, pesos)}`);
