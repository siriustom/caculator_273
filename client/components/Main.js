import React from 'react';
import { Register } from './Register'
import { Login } from './Login'
import { Profile } from './Profile'
import { Switch, Route, Redirect } from 'react-router-dom'

export class Main extends React.Component {
    constructor() {
        super();
        this.getLogin = this.getLogin.bind(this);
        this.getProfile = this.getProfile.bind(this);
        this.getRoot = this.getRoot.bind(this);
    }
    getLogin() {
        return this.props.isLoggedIn ? <Redirect to="/profile"/> : <Login handleLogin={this.props.handleLogin}/>;
    }
    getProfile() {
        return this.props.isLoggedIn ? <Profile/> : <Redirect to="/login"/>
    }
    getRoot() {
        return <Redirect to="/login"/>
    }
    render() {
        return (
            <div className="main">
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/profile" component={Profile}/>
                    <Route render={this.getRoot}/>
                </Switch>
            </div>
        );
    }
}