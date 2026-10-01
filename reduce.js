// Métodos Arrays Parte 2
// Reduce()

const valores = [10, 25, 30, 45];

const somaTotal = valores.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
});

console.log('Valores:', valores);
console.log('Soma total:', somaTotal);
console.log('\n');

const totalItens = valores.reduce((acumulador, item) => {
    return acumulador + item.preco * item.qtd;
}, 0);

const totalFinal = totalItens + somaTotal;

console.log('Itens do pedido', valores);
console.log(`Subtotal do Itens:R$ ${totalItens.toFixed(2)}`);
console.log(`Taxa de Entrega:R$ ${somaTotal.toFixed(2)}`);
console.log(`Total a pagar:R$ ${totalFinal.toFixed(2)}`);
