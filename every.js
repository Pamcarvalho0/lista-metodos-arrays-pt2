// Métodos Arrays Parte 2
// Reduce()

const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];
const maiorQue50 = produtos.every((produto) => produto.preco > 50);

console.log('Produtos:', produtos);
console.log('Todos os produtos possuem preço maior que 50?', maiorQue50);
console.log('\n');

const todasAtivas = produtos.every((produto) => produto.ativo);

console.log('Produtos:', produtos);
console.log('Todos os produtos estão ativos?', todasAtivas);
console.log('\n');
