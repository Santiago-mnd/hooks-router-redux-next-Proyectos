import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);





/* <p>Hola mundo</p> */
// const X = () => <p>Hola mundo!</p>;
// Componente funcional ^^


// const Li = ({ children, estado, casa, edad }) => {
//   console.log(casa, edad);
//   return (
//     <li> { children } estoy { estado }</li>
//   )
// }
// const X = () =>
//   <ul>
//     <Li
//      estado={'feliz'}
//      casa={false}
//      edad={24}
//     >
//      Chanchito
//     </Li>
//     <Li estado={'triste'}>Chanchito</Li>
//     <Li estado={'emocionado'}>Feli'</Li>
//   </ul>

// ReactDOM.render(
  // Esto no es HTML es JSX.
  // Es buna práctica que los componentes creados en react inicien en mayúscula.
  // <X />, document.getElementById('root')
// ) 
//  JSX básicamente es React.createElement, se le considera azúcar sintáctica, pues así podemos crear elementos HTML de manera más rápida, pero por detrás existe el mismo procedimiento.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
