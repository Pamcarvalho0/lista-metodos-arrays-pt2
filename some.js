// Métodos Arrays Parte 2
// Reduce()

const produtos = [
    { nome: 'Arroz', preco: 15.90, qtd: 2, inativo: false },
    { nome: 'Feijão', preco: 12.50, qtd: 1, ativo: true },
    { nome: 'Macarrão', preco: 8.90, qtd: 3, ativo: true }
];

const temProdutoAcima300 = produtos.some((produto) => produto.qtd > 300);

console.log('Produtos:', produtos);
console.log('Houve produto com quantidade superior a 300?', temProdutoAcima300);
console.log('\n');
console.log('Há produtos inativos na lista?', produtos.some((produto) => produto.inativo));
