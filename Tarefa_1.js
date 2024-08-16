// Definindo a função transformData para manipular os objetos.
// Esta função recebe um array de objetos e retorna um novo array dentro dos critérios fornecidos

function transformData(users){ 
    const userIsActive = users.filter(function(user) { // Função para filtrar apenas os usuários com a proriedade IsActive True
        return user.isActive
    });

    const userIdName = userIsActive.map(function(user){ // Mapeando para obter apenas o id e nome dos usuários
        return {
            id: user.id,
            name: user.name
        };
    });
    const usersSort = userIdName.sort(function(a, b) { // Ordenando a lista dos usuários em ordem alfabética
        return a.name.localeCompare(b.name);
      });

    return usersSort;
}    


const users = [
    { id: 1, name: 'Alice', age: 25, isActive: true },
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 3, name: 'Charlie', age: 22, isActive: true }
];

console.log(transformData(users));
