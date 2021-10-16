import { Component } from "react";

class Button extends Component {
    state = {}
    constructor(props) {
        super(props)
        console.log('constructor', props);
    }

    componentDidMount() {
        console.log('conponentDidMount');
    }

    // Update recibe dos argumentos. Propiedades previas y estado previo.
    componentDidUpdate(prevProps, prevState) {
        console.log('component did update', prevProps, prevState)
    };

    componentWillUnmount() {
        console.log('desmontando componente', this.props, this.state);
    }

    render() {
        console.log('ejecutando método render de button');
        return (
            <button 
            onClick= { () => this.setState({ prop: 1 }) }>
                Enviar
            </button>
        )
    } 
}

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
                {this.state.valor === 3 ? 
                <Button chanchito='feliz'/> : null}
                <button 
                className={`${this.state.valor}`} 
                onClick={ () => this.setState({ valor: 2 })}>
                    Enviar en App
                </button>
            </div>
        )
    }
}
export default App;