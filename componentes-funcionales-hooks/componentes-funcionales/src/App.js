import React from 'react';
import { useState } from 'react';

// Reglas de los hooks:
// Los hooks no se deben llamar en loops. (for, while, do while) Tampoco en conficionales, y siempre debe estar en el nivel más alto del componente.
// Sólo se llaman en 2 partes: 1.- En un componente de React. 2.-En custom hooks.
// Cuando creemos un custom hook, siempre debe de comenzar por use y seguido, sin espacios el nombre que se le quiera dar. (useContador)

// class App extends Component {
//     state = { contador: 0 }
//     incrementar = () => {
//         this.setState({contador: this.state.contador + 1})
//     }
//     render() {
//         return (
//             <div>
//                 contador: {this.state.contador}
//                 <button onClick={this.incrementar}>Incrementar</button>
//             </div>
//         )
//     }
// }

const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial);
    const incrementar = () => {
        setContador(contador + 1)
    }

    return [contador, incrementar]
}

const App = () => {
    const [contador, incrementar] = useContador(0);
    return (
        <div>
            Contador: {contador}
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

export default App
