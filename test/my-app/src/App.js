import { Component } from "react";

class App extends Component {
    state = {
        valor: 3
    }
    render() {
        console.log(this.state);
        // El método de render se ejecuta siempre en dos condiciones, la primera, es que el estado del componente haya cambiado (como puede ser cambiando el stado con useState) y el otro motivo por el cual se vuelve a ejecutar el método render, es porque el método render de un componente padre ha sido llamado, por ende, los componentes hijos también ejecutan su método de render.
        return (
            // Siempre estaremos retornando contenido JSX
            <div>
                <p>Hola mundo </p>
                <button className={`${this.state.valor}`} onClick={ () => this.setState({ valor: 2 })}>
                    Enviar
                </button>
            </div>
        )
    }
}
export default App;