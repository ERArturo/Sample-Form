import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import './App.css';


class App extends Component {

  customers = () =>  <h1>hola morena :3</h1> ;
  render(){
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomeContainer}/>
          <Route exact path="/customers" component={ this.customers }/>
          <Switch>
            <Route path="/customers/new" component={HomeContainer}/>
            <Route path="/customers/:curp" component={HomeContainer}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
