import { Switch, Route, Link } from 'react-router-dom'

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
          <Route path='/portafolio' >
            <h1>Portafolio</h1>
          </Route>
          <Route exact path='/' >
            <h1>Inicio</h1>
          </Route>
        </Switch>
      </section>
    </div>
  )
}

export default App
