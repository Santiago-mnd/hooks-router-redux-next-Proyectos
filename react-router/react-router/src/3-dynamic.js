import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom'

const Proyecto = () => {
    const match = useRouteMatch()
    const params = useParams()
    console.log({ match, params});
    const { proyecto_id } = match.params
    return (
        <h2>Proyecto {proyecto_id}</h2>
    )
}

// path sirve para los componentes de Route
// url para los componentes Link

const Portafolio = () => {
    const match = useRouteMatch()
    console.log(match);
    return (
        <div>
            <h1>Portafolio</h1>
            <ul>
                <li>
                    <Link to={`${match.url}/proyecto1`}>Proyecto 1</Link>
                </li>
                <li>
                    <Link to={`${match.url}/proyecto-2`}>Proyecto 2</Link>
                </li>
            </ul>
            <div>
                <Switch>
                    <Route path={`${match.path}/:proyecto_id`}>
                        <Proyecto />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/' >Inicio</Link> 
          </li>
          <li>
            <Link to='/portafolio' >Portafolio</Link> 
          </li>
        </ul>
      </nav>
      <section>
        <Switch>
          <Route exact path='/' >
            <h1>Inicio</h1>
          </Route>
          <Route path='/portafolio' >
            <Portafolio />
          </Route>
        </Switch>
      </section>
    </div>
  )
}

export default App
