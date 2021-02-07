import React from 'react';
import './App.css';
import { Link, Route, Switch } from "react-router-dom";
import Home from '../home/Home'
import About from '../about/About'
import User from '../users/User'
function App() {
  return (
    <div className="App">
		  	<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/user">User</Link>

			<Switch>
				<Route path='/' component={Home} exact />
				<Route path='/about' component={About} exact />
				<Route path='/user' component={User} exact />
			</Switch>
    </div>
  );
}

export default App;
