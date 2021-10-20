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
            <Link to='/perfil' >Perfil</Link> 
          </li>
        </ul>
      </nav>
      <section>
        <Switch>
          <Route exact path='/' >
            <h1>Inicio</h1>
          </Route>
          <Route exact path='/perfil' >
            <h1>Inicio</h1>
          </Route>
          <Route path='*' >
              404: Ruta no encontrada
          </Route>
        </Switch>
      </section>
    </div>
  )
}

export default App
