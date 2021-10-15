const rest = (a, b, ...argumentos) => {
    console.log(a, b);
    console.log(argumentos);
}
// rest(1, 2, 3, 4, 5, 6);

const obj = {
    a: 1, b: 2, c: 3, d: 4
}

// Podemos utilizarlo en la destructuración de objetos
// const { a, b, ...restobj } = obj
// console.log(a, b, restobj);

// También en la destructuración de arreglos
const arr = [1, 2, 3, 4, 5]

const [a, b, ...r] = arr
// console.log(a, b, r);

// Esto será muy importante en react para poder utilizar hooks como son useState.
const useState = () => ['valor', () => {}]

const [valor, setValor] = useState();
console.log(valor, setValor);

// Cuando utilizamos rest operator dentro de una función, ya sea fat arrow o declarada con function, tomará todos los argumentos que se le pasen a la función y serán transformados en un arreglo.
// El operador rest siempre debe ir al final, NO puede ir al comienzo, pues dará error.