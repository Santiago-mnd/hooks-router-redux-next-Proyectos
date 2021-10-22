import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import { reducer } from './features/todos';
import { asyncMiddleware } from './middlewares/async';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer, applyMiddleware(asyncMiddleware))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} > 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
