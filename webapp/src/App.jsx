import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import './Map.css';


import Home from './vistas/Home';
import Amigos from './vistas/Amigos';
import Mapa from './vistas/Mapa';
import Admin from './vistas/Admin';
import Ayuda from './vistas/Ayuda';


class App extends React.Component {

  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <Redirect
            from="/vistas/"
            to="/vistas/Home" />
          <Switch>
            <Route path='/vistas/Home' exact
              render={() => <Home />} />
            <Route path='/vistas/Amigos' exact
              render={() => <Amigos />} />
            <Route path='/vistas/Mapa' exact
              render={() => <Mapa />} />
            <Route path='/vistas/Admin' exact
              render={() => <Admin />} />
            <Route path='/vistas/Ayuda' exact
              render={() => <Ayuda />} />
          </Switch>
        </BrowserRouter>

      </div>

    )
  }
}

export default App;