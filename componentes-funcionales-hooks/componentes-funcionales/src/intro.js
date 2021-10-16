import React from 'react';

// Una función impura se considera así pues esta siempre tendrá un resultado diferente.
const impura = () => new Date().toLocaleString()
console.log(impura())

// Los componentes funcionales, siempre manejarán funciones puras, éstas son las que nuncan cambian su valor de retorno.
const MiComponente = ({ miProp }) => {
  return (
    <div>
      Nombre: {miProp}
    </div>
  )
}

const App = () => {
  return (
    <MiComponente miProp={'Chanchito feli'} />
  )
}


export default App;