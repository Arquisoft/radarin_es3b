import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Contenedor from './components/Contenedor';

import Localization from './components/Localization'
import './mapa.css';

class App extends React.Component{
 
  render(){
    return(
      <div className="App">
      <Contenedor/>
      <body className ="App-body">
          <p className ="sample">Radarin es blablabla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non dictum sem. Pellentesque vitae neque a urna facilisis congue eu sed odio. Nunc in elit pretium, sodales elit sit amet, congue lacus. Fusce lectus lacus, mattis eget urna sed, vestibulum posuere magna. Nulla neque quam, vulputate a sollicitudin a, convallis in velit. Nunc non diam metus. Integer eget sagittis augue. Fusce interdum dapibus sem at blandit. Sed a est sodales, varius metus vel, finibus felis. Praesent rhoncus consectetur nunc, at congue erat tempor eu. Morbi posuere mattis sem ac varius. Aenean at nisi pretium, finibus arcu id, dictum dui. Ut eu metus pulvinar, malesuada dui nec, vulputate diam. Donec aliquam odio id lorem blandit pharetra.
              Ut sodales laoreet est quis finibus. Proin luctus, leo vel ultrices porta, nisi ante sagittis metus, id eleifend orci enim nec metus. Donec nec placerat ex. Phasellus blandit erat sed nulla vulputate, nec condimentum lacus dapibus. In aliquet sapien eget sodales vulputate. Fusce quis nisl diam. Fusce commodo neque quis augue iaculis fermentum.</p>
          <p className="buttons">
          <ButtonToRender component={<Localization/>} buttonName="Mostrar localización" deleteName="Ocultar localización" />
          </p>
      </body>
    </div>
    )
  }
}

export default App;