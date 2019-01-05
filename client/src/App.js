import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Saved from './pages/saved';
import Search from './pages/search';
import Nav from './components/Nav'
import './App.css';

function App() {
    return (
      <Router>
        <div>
          <Nav />
          <div className="jumbotron text-center col-md-10 mx-auto">
          <h1>The Bookshelf</h1>
          <h4>Search for and Save Books of Interest</h4>
          </div>
          <Switch>
            <Route exact path="/" component ={Search}/>
            <Route exact path="/saved" component = {Saved}/>
            <Route path ="*" component = {Search}/>
          </Switch>
        </div>
      </Router>
    )
}

export default App;
