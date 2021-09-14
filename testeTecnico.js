// 1) Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

function multiply(repeat, value) {
    let newArray = [];
    for (let i = repeat; i != 0; i--) {
        newArray.push(value)
    };
    console.log(newArray)
    return newArray
}

multiply(3, 'a')


//2) Implemente um método que inverta um array, não utilize métodos nativos do array.
//Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

function reverse(array) {
    let reversedArray = [];
    for (i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i])
    };
    console.log(reversedArray)
    return reversedArray
}

reverse([1,2,3,4])


// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
// Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]

function clean(array) {
    let cleanArray = array.filter(number => number >= 1);
    console.log(cleanArray)
    return cleanArray
}

clean([1,2, '', undefined])


// 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
// Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}

function createObject(arr) {
    let newObj = Object.fromEntries(arr);
    console.log(newObj)
    return newObj
}

createObject([["c",2],["d",4]])


// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. 
// Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]

function removeParameters(array, parameter1, parameter2) {
   let newArray = array.filter(newArray => newArray != parameter1 && newArray != parameter2);
   console.log(newArray)
   return newArray
}

removeParameters([5,4,3,2,5], 5,3)


// 6) Implemente um método que retorne um array, sem valores duplicados.
// Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

function removeDuplicates(array) {
    let newArray = [];
    for (let i of array) {
        if (!newArray.includes(i)) {
        newArray.push(i) 
        };
    };
    console.log(newArray)
    return newArray
}

removeDuplicates([1,2,3,3,2,4,5,4,7,3])

// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

function compare(arr1, arr2) {
    let comparison = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
    console.log(comparison)
    return comparison
}

compare([1,2,3,4],[1,2,3,4])


// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

function flatten(nestedArr) {
    let newArray = nestedArr.flat();
    console.log(newArray)
    return newArray
}

flatten([1, 2, [3], [4, 5]])


// 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
// Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

function divide(array, parameter) {
    let newArray = new Array(Math.ceil(array.length / parameter)).fill().map(_ => array.splice(0, parameter));
    console.log(newArray)
    return newArray
}

divide([1, 2, 3, 4, 5], 2)


// 10) Implemente um método que encontre os valores comuns entre dois arrays.
// Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

function commonValues(arr1, arr2) {
    let newArray = arr1.filter(number => arr2.includes(number));
    console.log(newArray)
    return newArray
}
  
commonValues([6, 8], [8, 9])