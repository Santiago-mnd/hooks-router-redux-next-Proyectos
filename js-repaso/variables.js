// Inicialmente para declarar variables se utilizaba var.
// Cuando se inicializa una variable aplicando var, lo que hace el motor de javascript es esto:
var miVariable;
miVariable = 'variable';
miVariable= 'otro valor';
console.log(miVariable);

// La gran diferencia entre var y let, es que var se declara por defecto hasta el inicio del bloque de código (por defecto en el motor de js), y let sólo se declara donde nosotros lo queremos.

// Otra forma utilizada es let. 
let variable = 'variable creada con let';

// Al mismo tiempo que fue añadido let, se añadió const.
// La diferencia entre const y let, es que el valor de const, no pueden ser reasignados. 
const constante = 'este valor es constante';

// Por ende, let y var son variables, y const una constante.
// Aunque, el uso de var NO es recomendado para nada, debe de evitarse completamente el uso de var.
