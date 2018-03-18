import React, { Component } from 'react';
import logo from '../assets/images/Gangs_logo.svg';
import '../css/App.css';
import MyCalculator from './MyCalculator';
import { Header } from './Header';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: true,
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogin() {

    }
    handleLogout() {

    }
    render() {
        return (
          <div className="App">
              <Header />
              <MyCalculator/>
          </div>
        );
    }
}

export default App;
