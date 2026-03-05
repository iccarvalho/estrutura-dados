import formaGeometrica from "../lib/classe.mjs";

const forma1 = new formaGeometrica();

// atribuição pelo setter
forma1.altura = 5;
forma1.largura = 7;
forma1.tipo = "R";

// retorna apenas o nome classe, pois os atributos são privados e não aparecem
console.log(forma1);

// mostra os atributos pelo getter
console.log(forma1.altura);
console.log(forma1.largura);

// método para calcular a área
const resultado = forma1.calcArea();
console.log(`Área: ${resultado}cm²`);