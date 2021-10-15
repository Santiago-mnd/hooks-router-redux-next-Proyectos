const arr = [-5, -1, -2, -3, -4]

const r = arr.filter((el, i) => {
    // console.log(i);
    return el > 2
})
// console.log(r);
// Siempre nos devolverá un arreglo con la misma longitud o menor. Solamente se incluirán dentro de un NUEVO arreglo.

// -----

// Map aplica una función a cada uno de los elementos de un arreglo y crea uno nuevo con el resultado.
// Esto es muy utilizado en React para poder imprimir elementos ya que utiliza una sintaxis similar a HTML.
// const mapped = arr.map((el) => `<h1>${el}</h1>`)
// console.log(mapped);

const users = [
    { id: 1, name: 'Chanchito feliz'},
    { id: 2, name: 'Chanchito triste'},
    { id: 3, name: 'Chanchito emocionado'},
    { id: 4, name: 'Feli'},
]
const mapped = users.map((user) => `<h1>${user.name}</h1>`)
// console.log(mapped);


//  ------

// Reduce tomará todos los elementos de un arreglo y podremos devolver lo que nosotros queramos, si queremos sumar, construir un String en base a un arreglo, si quieremos correr promesas en secuencia, eliminar los duplicados de un arreglo, etc.
// El 0 en esta función es el valor de inicio que tendrá el acumulador.
// const getMax = (a, b) => Math.max(a, b)
// El problema con esto, es que si hay números negativos, tendríamos que quitar el 0 como valor inicial, pues éste sería mayor a los negativos. Es decir, no es obligatorio utilizar el valor inicial, pero, generalmente se usa más.
// const r1 = arr.reduce(getMax)
// const r1 =  users.reduce((acc, el) => 
//     `${acc === '' ? '' : `${acc}, `}${el.name}`, '')

const r1 = users.reduce((acc, el) => {
    if (el.id < 2) {
        return acc
    }
    return acc.concat(el)
}, [])
console.log(r1);
// Se utiliza como una función muy flexible, hasta hacer cosas más complicadas como un filter o un map con esta misma.