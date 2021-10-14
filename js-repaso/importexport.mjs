const chanchosFelices = ['chancho 1', 'chancho 2', 'chancho 3'];
const chanchosTristes = ['itrste 1', 'triste 2'];
const otrosChanchos = ['uno'];

// module.exports = {
//     chanchosFelices,
//     chanchosTristes
// };

// Esta es la forma antigua de exportar archivos. Y para poder exportar más de una constante, variable, función etc, debemos de transformar las exportación a un objeto literal.


const fn1 = () => {
    console.log('Soy la función uno');
}

function fn2() {
    console.log('Soy la función dos');
}

export {
    chanchosTristes, otrosChanchos, fn1, fn2
}
export default chanchosFelices;

// Cuando no estemos trabajando con un package.json, debemos utilizar la extensión .msj, para poder utilizar importacione y exportaciones, sin problemas. 