const fn = (a, b, c) => console.log(a + b + c);

const arr = [1, 2, 3, 4];

// fn(arr[0], arr[1], arr[2]);
// fn(...arr);

const arr1 = [5, 6];

// Esto se utilizaba anteriormente para poder unir arreglos.
// const arr2 = arr.concat(arr1);
// console.log(arr2);

// const arr2 = [...arr, ...arr1]; // Estamos pasando todos los elementos de un arreglo y dejándolos en el primer nivel, después pasaría lo mismo con el siguiente arreglo, pero en el siguiente nivel. (niveles dividiso por comas)
// console.log(arr2);

const arr2 = [...arr, 2, 3];
arr[0] = 'chanchito feliz'
// console.log(arr, arr2);
// Hay que tomar en cuenta que siempre estamos generando COPIAS, es decir, si se modifica el primer arreglo justo después de haber copiado, éstos no se modificarán, pero el original si será modificado.
// Cuando tenemos un arreglo y queremos llamar una función, podemos utilizar el spread operator(...), esto hará un mapeo de cada uno de los valores con cada uno de los parámetros de la función.
// Argumento es el valor que contiene el parámetro.
// En este caso: Parámetro = a, b, c. Argumento: 1, 2, 3.
// En el caso de tener más elementos dentro del arreglo, por defecto se mandarán los primeros necesarios, los demás serán ignorados.
// Pero en el caso de tener menos elementos que parámetros podremos causar errores, pues los parámetros faltantes serán directamente undefined.

// ------

const obj1 = { a:1, b:2 }
const obj2 = { b: 5, c: 'chanchito feliz' }

const obj3 = { ...obj1 }
obj1.a = 10;
// console.log(obj3, obj1);

const obj4 = { ...obj1, ...obj2 }
// Cuando se utiliza el spread operator este funcionará de izquierda a derecha, es decir, que tomará las primeras propiedades como las iniciales y las podrá sobre escribir si recibe la misma propiedad con un objeto que venga después.
// console.log(obj4);

const obj5 = {
    ...obj1,
    loading: true,
    data: {
        prop: 'lala',
        anial: 'gatito'
    }
}
console.log(obj5);