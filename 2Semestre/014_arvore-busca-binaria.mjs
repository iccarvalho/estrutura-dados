import BinarySearchTree from "./lib/BinarySearchTree.mjs";

const arvore = new BinarySearchTree();

arvore.insert(48);
arvore.insert(71);
arvore.insert(15);
arvore.insert(29);
arvore.insert(57);
arvore.insert(1);
arvore.insert(80);
arvore.insert(14);
arvore.insert(19);
arvore.insert(37);
arvore.insert(23);
arvore.insert(21);
arvore.insert(25);
arvore.insert(51);
arvore.insert(64);


// percurso in-order
let percursoInOrder = [];
arvore.inOrderTraversal((val) => percursoInOrder.push(val));
console.log("Percurso in-order:", percursoInOrder);

// percurso pre-order
let percursoPreOrder = [];
arvore.preOrderTraversal((val) => percursoPreOrder.push(val));
console.log("Percurso pre-order:", percursoPreOrder);

// percurso post-order
let percursoPostOrder = [];
arvore.postOrderTraversal((val) => percursoPostOrder.push(val));
console.log("Percurso post-order:", percursoPostOrder);

// Testes de Remoção
let percursoREM = [];
arvore.inOrderTraversal((val) => percursoREM.push(val));
console.log("ANTES DAS FORMOÇÕES:", percursoREM);

// Remoção de um nodo de grau 0
arvore.remove(64);
percursoREM = [];
arvore.inOrderTraversal((val) => percursoREM.push(val));
console.log("Após a remoção do 64:", percursoREM);

// Remoção de um nodo de grau 1
arvore.remove(1);
percursoREM = [];
arvore.inOrderTraversal((val) => percursoREM.push(val));
console.log("Após a remoção do 1:", percursoREM);

// Remoção de um nodo de grau 2
arvore.remove(19);
percursoREM = [];
arvore.inOrderTraversal((val) => percursoREM.push(val));
console.log("Após a remoção do 19:", percursoREM);

// Remoção da RAIZ
arvore.remove(48);
percursoREM = [];
arvore.inOrderTraversal((val) => percursoREM.push(val));
console.log("Após a remoção do 48:", percursoREM);

percursoREM = [];
arvore.preOrderTraversal((val) => percursoREM.push(val));
console.log("Nova raiz:", percursoREM[0]);