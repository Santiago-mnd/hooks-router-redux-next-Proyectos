// Funciones que se DECLARAN con la palabra reservada function: Pueden cumplir con la función directa de una función o actuar con el contexto de this y listarlos para implementar herencia basada en prototipos. Entonces, las funciones también son clases en JS, pero siempre recordando, clases basadas en prototipos.

function Fn () {
    // {}
    //  
    this.prop = 'propiedad'
    // return 'Chanchito feliz'
}

Fn.prototype.lala = function FuncionDePrototipo() {}

const r = new Fn();
// console.log(r.__proto__);

// El uso de funciones en JS es como una especie de clase. JS al ser un lenguaje multiparadigma, implementa la herencia basada en prototipos. Por lo tanto si agregamos una palabra reservada llamada new, nos creará una instancia.

// Las funciones en JS tienen un contexto this, en este caso, this es la misma función. Cuando se llama una función con la palabra reservada new, lo que hace es crear un "objeto litearl del aire" y después tomará todas las propiedades que se le asignen mediante this. Ignorando por completo si es que hay un new. Nosotros podemos acceder a la función que se ha llamado como una instancia, colocando la propiedad de .__proto__ . De igual manera le podemos agregar un prototipado mediante .prototype. agregando la propiedad con el nombre que queramos y dándole un valor, de esta forma: Fn.prototype.lala = function () {}. Esto retornará: { lala: [Function (anonymous)] }. La función pa a ser anónima pues no lleva un nombre. Si le asiganmos un nombre a la función entonces el resultado será { lala: [Function: FuncionDePrototipo] }.

// Esta sería una forma de generar una clase, por ende, la palabra reservada class, es considerada como azúcar sintáctica. Lo que realmente hay debajo, son funciones.

// fat arrow function
// Estas se definen por medio de una constante.

const fatFn = () => { //No tienen contexto de this.
    this.prop = 'lala'
}

const r1 = fatFn()
console.log(this);

// Sin embargo, una fat arrow function no puede ser llamada por medio de la palabra reservada new. Nos indicará un error, el cual nos especificará que esta NO es una función constructora. Pero si nosotros añadimos una propiedad this a la fatfn, nos podrá imprimir un objeto con una propiedad instanciada con this. En estos casos podemos crear un objeto literal.

// La siguiente diferencia de las fatfn es que tienen un return implícito.
const fnR = () => 2
// Si omitimos las llaves, mandaremos un resultado directo, se puede decir que es lo mismo que poner => return 2, pero más corto y más "elegante"   .

console.log(fnR());