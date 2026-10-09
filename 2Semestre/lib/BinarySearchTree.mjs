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
    // não se faz nada, já que a ABB, por definição, não deve ter valores repetidos
    } else {
      return;
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
      fnCallback(root.data);                          // 1º
      this.preOrderTraversal(fnCallback, root.left);  // 2º
      this.preOrderTraversal(fnCallback, root.right); // 3º
    }
  }

  /*
    Método que executa o percursos pós-ordem (post-order traversal) na árvore

    Ordem do Percurso:
    2. Percorre recursivamente em-ordem a subárvore esquerda
    3. Percorre recursivamente em-ordem a subárvore direita
    1. Visita a raiz
  */

  postOrderTraversal(fnCallback, root = this.#root) {
    if(root !== null) {
      this.postOrderTraversal(fnCallback, root.left);  // 1º
      this.postOrderTraversal(fnCallback, root.right); // 2º
      fnCallback(root.data);                           // 3º
    }
  }

  // Método PRIVADO que retorna o nodo de MENOR valor da árvore
  #minNode(root) {
    // A partir da raiz, percorre à esquerda enquanto for possível
    while(root !== null && root.left !== null) {
      root = root.left;
    }

    return root;
  }

  // Método PRIVADO que retorna o nodo de MAIOR valor da árvore
  #maxNode(root) {
    // A partir da raiz, percorre à direita enquanto for possível
    while(root !== null && root.right !== null) {
      root = root.right;
    }

    return root;
  }

  // Método público para excluir um nodo da árvore
  remove(value) {
    this.#root = this.#removeNode(this.#root, value);
  }

  // Método PRIVADO para excluir um nodo da árvore
  #removeNode(root, value) {
    // 1º caso: árvore vazia
    if(root === null) {
      return null;
    }

    // 2º caso: valor a ser excluído é MENOR que o valor da raiz
    // Continua, recursivamente, o processo de exclução pela subárvore ESQUERDA
    if(value < root.data) {
      root.left = this.#removeNode(this.#root.left, value);
      return root;
    }

    // 3º caso: valor a ser excluído é MAIOR que o valor da raiz
    // Continua, recursivamente, o processo de exclução pela subárvore DIREITA
    if(value > root.data) {
      root.right = this.#removeNode(this.#root.right, value);
      return root;
    }

    // 4º caso: valor a ser excluído é IGUAL ao valor da raiz
    // O nodo a ser excluído foi encontrado, é necessário agora verificar o GRAU desse nodo para aplicar o algorítmo de exclusão apropriado

    // 4.1: Nodo de grau 0 (nodo folha)
    if(root.left === null && root.right === null) {
      root = null;
      return root;
    }

    // 4.2: Nodo de grau 1, com subárvore à esquerda
    if(root.left !== null && root.right === null) {
      root = root.left;
      return root;
    }

    // 4.3: Nodo de grau 1, com subárvore à direita
    if(root.left === null && root.right !== null) {
      root = root.right;
      return root;
    }
  }
}