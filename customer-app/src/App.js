import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import CustomerContainer from './containers/CustomerContainer';
import './App.css';


class App extends Component {

  render(){
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={ HomeContainer }/>
          <Route exact path="/customers" component={ CustomerContainer }/>
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
