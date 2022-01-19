import './App.css';
import React, { Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Variable from './components/Variable';
import MultiVar from './components/MultiVar';

function App() {
  return (
    <div className="App">
      <h2>Routing Practice</h2>

      <Switch>
        
        <Route exact path="/home">
          <Home />
        </Route>
      
        <Route exact path="/:input/:color1/:color2">
          <MultiVar />
        </Route>
        
        <Route exact path="/:input">
          <Variable />
        </Route>

      </Switch>      

    </div>
  );
}

export default App;
