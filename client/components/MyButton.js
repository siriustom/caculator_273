import { Button } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import React, { Component } from 'react';

bootstrapUtils.addStyle(Button, 'calc-key');

class MyButton extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick(this.props.value);
    }
    render() {
        return (
            <Button onClick={this.handleClick} bsStyle="calc-key" bsSize="large">
                {this.props.value}
            </Button>
        );
    }
}

export default MyButton;