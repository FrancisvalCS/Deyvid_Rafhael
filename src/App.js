import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './componentes/Header';
import './global.css';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
          <Header/>
          <Switch>
              <Route></Route>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
