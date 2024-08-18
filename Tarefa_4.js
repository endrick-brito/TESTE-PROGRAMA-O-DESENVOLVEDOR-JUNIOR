function groupByCategory(array){ // Função groupByCategory recebe um array de objetos

    const agrupada = {}; // Objeto criado para receber as categorias

    for (var i = 0; i < array.length; i++){ // Loop for para iterar o numero de vezes correspondente ao tamanho da lista

        const item = array[i];  // Constante item recebe o objeto correspondente ao indice atual

        if(!agrupada[item.category]){ // Condicional para verificar se objeto agrupada já possui a categoria correspondente ao item atual

            agrupada[item.category] = []; // Se nao tiver, inicia um array vazio para esta categorya
        }
        agrupada[item.category].push(item); // Adiciona o item ao array da categoria correspondente
    }
    return agrupada; // Retorna o objeto
}

const items = [
    { name: 'apple', category: 'fruit' },
    { name: 'carrot', category: 'vegetable' },
    { name: 'banana', category: 'fruit' },
    { name: 'broccoli', category: 'vegetable' }
];

console.log(groupByCategory(items));