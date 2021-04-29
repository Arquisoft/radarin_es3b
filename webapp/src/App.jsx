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
            from="/"
            to="/Home" />
          <Switch>
            <Route path='/Home' exact
              render={() => <Home />} />
            <Route path='/Amigos' exact
              render={() => <Amigos />} />
            <Route path='/Mapa' exact
              render={() => <Mapa />} />
            <Route path='/Admin' exact
              render={() => <Admin />} />
            <Route path='/Ayuda' exact
              render={() => <Ayuda />} />
          </Switch>
        </BrowserRouter>

      </div>

    )
  }
}

export default App;