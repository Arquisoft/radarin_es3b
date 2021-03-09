import React from 'react';
import './App.css';
import logo from './logo.svg';
import Welcome from './components/Welcome';
import EmailForm from "./components/EmailForm";
import UserList from "./components/UserList";
import FriendsList from "./components/FriendsList";
import Localization from "./components/Localization";
import ButtonToRender from "./components/ButtonToRender";
import PruebaLoc from "./pruebas/PruebaLoc";
import 'bootstrap/dist/css/bootstrap.min.css';
import './table.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {users:[]}
  }

  refreshUsers(users){
    this.setState({users:users})
  }


  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <Welcome name="ASW students"/>
        </header>
        <div className="App-content">
          <EmailForm refreshUsers={this.refreshUsers.bind(this)}/>
          <UserList users={this.state.users}/>
          <FriendsList/>
		 
          <a className="App-link"
            href="https://github.com/pglez82/radarin_0"
            target="_blank"
            rel="noopener noreferrer">Source code</a>
			
			<PruebaLoc/>
      
	
	 <ButtonToRender component={<Localization/>} buttonName="Mostrar localización" 
		deleteName="Ocultar localización" />
		  </div>
	 </div>
    )
  }
}

export default App;
