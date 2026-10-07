// Classe que representa a unidade de informação da árvore binária de busca
class Node {
    constructor(value) {
      this.data = value; // armazena a informação da árvore binária de busca
      this.left = null; // ponteiro para a subárvore esquerda
      this.right = null; // ponteiro para a subárvore direita
    }
}
  
  // Classe que implementta a árvore binária de busca
export default class BinarySearchTree {
  #root; //raiz da árvore

  constructor() {
    this.#root = null;
  }

  // método para efetuar inserção ABB
  insert(value) {
    const inserted = new Node(value);

    // 1º caso: árvore vazia
    // primeiro nodo fica sendo a raiz da árvore
    if (this.#root === null) this.#root = inserted;

    // 2º caso: inserção recursiva, percorrendo a árvore recursivamente
    else this.#insertNode(inserted, this.#root);
  }

  //método PRIVADO que insere um novo nodo na árvore
  #insertNode(inserted, root) {
    // 1º caso: valor a ser inserido é MENOR que o valor da raiz
    // inserção ocorre à ESQUERDA da raiz
    if(inserted.data < root.data) {
      // se a posição à esquerda da raiz está desocupada, faz a inserção
      if(root.left === null) {
        root.left = inserted;
      } else { // senão, reinicia o processo de inserção, recursivamente, com a subárvore esquerda como raiz
        this.#insertNode(inserted, root.left);
      }
    // 2º caso: valor a ser inserido é MAIOR que o valor da raiz
    // inserção ocorre à direita da raiz
    } else if(inserted.data > root.data) {
      // se a posição à direitaq da raiz está desocupada, faz a inserção
      if(root.right === null) {
        root.right = inserted;
      } else { // senão, reinicia o processo de inserção, recursivamente, com a subárvore direita como raiz
        this.#insertNode(inserted, root.right);
      }
    // 3º caso: o valor a ser inserido é IGUAL ao valor da raiz;
    // senão, reinicia o processo de inserção, recursivamente, com a subárvore esquerda como raiz
    } else {
      this.#insertNode(inserted, root.left);
    }
  }

  // PERCURSOS:

  /*
    Métodos que executa o percurso em-ordem (in-order traversal) na árvore

    Ordem do Percurso:
      1. Percorre recursivamente em-ordem a subárvore esquerda
      2. Visita a raiz
      3. Percorre recursivamente em-ordem a subárvore direita
  */
  
  inOrderTraversal(fnCallback, root = this.#root) {
    if(root !== null) {
      this.inOrderTraversal(fnCallback, root.left);  // 1º
      fnCallback(root.data);                         // 2º
      this.inOrderTraversal(fnCallback, root.right); // 3º
    }
  }

  /*
    Método que executa o percursos pré-ordem (pre-order traversal) na árvore

    Ordem do Percurso:
      1. Visita a raiz
      2. Percorre recursivamente em-ordem a subárvore esquerda
      3. Percorre recursivamente em-ordem a subárvore direita
  */

  preOrderTraversal(fnCallback, root = this.#root) {
    if(root !== null) {
      fnCallback(root.data);                         // 1º
      this.inOrderTraversal(fnCallback, root.left);  // 2º
      this.inOrderTraversal(fnCallback, root.right); // 3º
    }
  }
}