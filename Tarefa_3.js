function countOccurrences(array){ //Função countOccurrences recebe um array e retorna quantas vezes uma string aparece no array

    const occurrences = {}; //Declarando um objeto occurences vazio para armazenar a contagem

    for (var i = 0; i < array.length; i++) { //Loop for que itera sobre cada elemento do array
        var fruta = array[i];
        if (occurrences[fruta]){ //Condição para verificar se string ja esta no objeto Occurences
            occurrences[fruta]++;//Se estiver ela icrementa mais 1
        }else{
            occurrences[fruta] = 1; //Caso nao esteja ela inicializa a contagem 1
        }
    }
    return occurrences;//Retorna o objeto Occurrences
}

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
console.log(countOccurrences(fruits));
