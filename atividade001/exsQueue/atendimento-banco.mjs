/*
    Um banco tem um sistema de senhas para organizar o atendimento ao público.
    Os clientes chegam e pegam uma senha. A ordem de chegada é:

    Cliente 101
    Cliente 102
    Cliente 103
    Cliente 104
    Cliente 105

    1-) Crie um objeto filaBanco e insira os clientes na ordem correta.

    2-) Imprima a fila antes do atendimento.

    3-) O primeiro cliente foi chamado e atendido. Remova esse cliente da fila e imprima o nome dele.

    4-) Imprima a fila após a remoção.

    5-) Dois novos clientes pegaram senha:
    
    Cliente 106
    Cliente 107
    
    Adicione-os à fila.

    6-) Imprima a fila após as alterações.

    7-) Qual é o próximo cliente a ser atendido? Mostre o comando e o número da senha.

    8-) O atendente chamou o próximo cliente. Remova essa pessoa e imprima a fila atualizada.

*/

import Queue from "../../lib/queue.mjs"

// 1
const filaBanco = new Queue();

filaBanco.enqueue("Cliente 101");
filaBanco.enqueue("Cliente 102");
filaBanco.enqueue("Cliente 103");
filaBanco.enqueue("Cliente 104");
filaBanco.enqueue("Cliente 105");

// 2
console.log(`Fila de atendimento: ${filaBanco.print()}`);

// 3
console.log(`Chamado para atedimento: ${filaBanco.dequeue()}`);

// 4
console.log(`Fila de atendimento: ${filaBanco.print()}`);

// 5
filaBanco.enqueue("Cliente 106");
filaBanco.enqueue("Cliente 107");

// 6
console.log(`Fila de atendimento: ${filaBanco.print()}`);

// 7
console.log(`Próximo a ser atendido ${filaBanco.peek()}`);

// 8
console.log(`Chamado para atedimento: ${filaBanco.dequeue()}`);
console.log(`Fila de atendimento: ${filaBanco.print()}`);
