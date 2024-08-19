function mergeArrays(array1, array2) { // Função mergeArrays recebe dois arrays faz a mesclagem atualizando os objetos
    // Cria um objeto de mapeamento
    const map = {};
  
    // Adiciona todos os objetos do primeiro array no mapeamento
    array1.forEach(item => {
      map[item.id] = { ...item };
    });
  
    // Adiciona/atualiza os objetos do segundo array no mapeamento
    array2.forEach(item => {
      map[item.id] = { ...item };
    });
    // Converte o objeto de mapeamento de volta para um array
    return Object.values(map);
  }
  
  const array1 = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 }
  ];
  
  const array2 = [
    { id: 1, age: 26, email: 'alice@example.com' },
    { id: 3, name: 'Charlie', age: 22 }
  ];
  
  console.log(mergeArrays(array1, array2));
  