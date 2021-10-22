import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore((state = 0, action) => { // <== Esto es un Reducer
  switch (action.type) {
    case 'incrementar': {
      return state + 1
    }
    case 'decrementar': {
      return state - 1
    }
    case 'set': {
      return action.payload
    }
    default:
      return state
  }
  // action = { type: 'tipo de acción', payload: any }
  // Un reducer siempre retorna un estado
  // return state
})

// Todas las acciones despachadas en Redux, siempre deben contener la propiedad de type, de lo contrario mandará un error en toda la aplicación
console.log(store.getState())
store.dispatch({ type: 'lala' })
console.log(store.getState())
store.dispatch({ type: 'incrementar' })
console.log(store.getState())
store.dispatch({ type: 'decrementar' })
console.log(store.getState())
store.dispatch({ type: 'set', payload: 2 })
console.log(store.getState())



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
