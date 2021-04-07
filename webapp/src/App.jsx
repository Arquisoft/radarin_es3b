import React from 'react';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom';

import './App.css';


import Home from './vistas/Home';
import Amigos from './vistas/Amigos';
import Mapa from './vistas/Mapa';


class App extends React.Component{

  render(){
	
    return( 
        <div className="App">
        <BrowserRouter>
        <Redirect
          from="/"
          to="/vistas/home" />
        <Switch>
        <Route path='/vistas/Home' exact 
          render={() => <Home />}/>
        <Route path='/vistas/Amigos' exact 
          render={() => <Amigos />}/>
          <Route path='/vistas/Mapa' exact 
          render={() => <Mapa />}/>
        </Switch>
      </BrowserRouter>

      </div>
      
    )
  }
}

export default App;