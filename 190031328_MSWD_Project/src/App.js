import React from 'react';
import Calculator from './components/calculator'
import History from './components/history'
import './App.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
const App = ()=> {
  return(
    <div className="app">
    <br></br>
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Calculator}/>
    <Route exact path="/history" component={History}/>
    </Switch>
    </BrowserRouter>
    </div>
  );



}
export default App;
