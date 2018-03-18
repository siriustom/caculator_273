import React, { Component } from 'react';
import MyButton from './MyButton';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class MyCalculator extends Component {
    constructor() {
        super();
        this.state = {
            display: '0',
        };
        this.handleNumClick = this.handleNumClick.bind(this);
        this.handleOpClick = this.handleOpClick.bind(this);
        this.handleDotClick = this.handleDotClick.bind(this);
        this.handleEqClick = this.handleEqClick.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }
    handleNumClick(value) {
        console.log(value);
        if (this.state.display === '0') {
            this.setState({display: value});
        } else {
            var nextState = this.state.display + value;
            this.setState({display: nextState});
        }
    }

    handleOpClick(value) {
        var n = Number(this.state.display);
        axios.post('/', {
            number: n,
            operator: value,
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
        this.setState({display: ''});
    }

    handleDotClick(value) {
        var nextState = this.state.display + value;
        this.setState({display: nextState});
    }

    handleEqClick(value) {
        var n = Number(this.state.display);
        axios.post('/', {
            number: n,
            operator: value,
        }).then((response) => {
            console.log(response);
            this.setState({display: response.data});
        }).catch(function (error) {
            console.log(error);
        });
    }

    handleClear() {
        this.setState({display: '0'});
        axios.post('/clear', {
            clear: true
        }).then((response) => {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div className={'Calculator-wrap'}>
                <input className={'Calculator-screen'} value={this.state.display} type={'text'} readOnly={true}/>
                <div className={'Calculator-keyline'}>
                    <MyButton onClick={this.handleNumClick} value={'7'}/>
                    <MyButton onClick={this.handleNumClick} value={'8'}/>
                    <MyButton onClick={this.handleNumClick} value={'9'}/>
                    <MyButton onClick={this.handleOpClick} value={'+'}/>
                </div>
                <div className={'Calculator-keyline'}>
                    <MyButton onClick={this.handleNumClick} value={'4'}/>
                    <MyButton onClick={this.handleNumClick} value={'5'}/>
                    <MyButton onClick={this.handleNumClick} value={'6'}/>
                    <MyButton onClick={this.handleOpClick} value={'-'}/>
                </div>
                <div className={'Calculator-keyline'}>
                    <MyButton onClick={this.handleNumClick} value={'1'}/>
                    <MyButton onClick={this.handleNumClick} value={'2'}/>
                    <MyButton onClick={this.handleNumClick} value={'3'}/>
                    <MyButton onClick={this.handleOpClick} value={'x'}/>
                </div>
                <div className={'Calculator-keyline'}>
                    <MyButton onClick={this.handleNumClick} value={'0'}/>
                    <MyButton onClick={this.handleDotClick} value={'.'}/>
                    <MyButton onClick={this.handleEqClick} value={'='}/>
                    <MyButton onClick={this.handleOpClick} value={'/'}/>
                </div>
                <div className={'Calculator-keyline'}>
                    <Button onClick={this.handleClear} bsStyle="primary" bsSize="large" block>
                        AC
                    </Button>
                </div>
            </div>
        );
    }
}

export default MyCalculator;