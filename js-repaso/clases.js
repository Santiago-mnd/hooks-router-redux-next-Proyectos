// Esto es conocido como una expresión de clase, donde podemos definir una clase y asignarla directamente a una constante. Estas clases también pueden ser anónimas.
// const Rectangulo = class R {

// }


// Esta es una declaración de clase:
// Clases declaradas con class no tienen hoisting.
class Rectangulo {
}

class Chancho {
    propiedad = 'mi propiedad'
    // Para crear propiedades privadas en JS es tan simple como colar un numeral (#).
    #hambre
    // Este método siempre se va a ejecutar cada vez que creemos una clase.
    static estatico = 42
    // Para poder acceder a propiedades desde una estancia estática, tendremos que nombrarla como static y el nomrbe de la propiedad
    constructor (estado = 'feliz', hambre = false) {
        this.estado = estado;
        // Esta declaración NO se debe borrar fuera del constructor, pues ésta nos indica que es privada.
        this.#hambre = hambre;
    }

    hablar () {
        console.log(`soy un chancho ${this.estado} ${this.hambre ? 'con mucha hambre!' : 'satisfecho' }`);
    }

    // Los métodos estáticos no pueden acceder a las propiedades de la clase, esto sucede, ya que las únicas estancias que pueden acceder a las propiedades son las públicas o privadas.
    static comer () {
        console.log(this.estatico, 'estoy comiendo!');
    }

}

Chancho.comer();
// Siempre que se llame a una clase con la plabra reservada de new, va a ejecutar el constructor. También, es importante SIEMPRE colocar new, pues no podemos declarar una nueva instancia de una clase si no se utiliza new.
const feliz = new Chancho('feliz');
// console.log(feliz.__proto__.hablar);
// feliz.hablar();
// console.log(feliz);
const triste = new Chancho('triste');
// triste.hablar();
const sinEstado = new Chancho();
// sinEstado.hablar();

// Al igual que las variables declaradas con var las funciones definidas con function, son elevadas al tope del código, a esto se le conoce como Hoisting. Esta es una de las primeras diferencias entre clases y funciones.
// console.log(Cuadrado);
function Cuadrado () {

}

// console.log(Cuadrado, Rectangulo);

const r = new Rectangulo()