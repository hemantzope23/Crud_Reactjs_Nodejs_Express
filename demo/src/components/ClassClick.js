import React, { Component } from 'react';

class Classclick extends Component {

    clickHandler() {
        console.log('Hello Hemant you click the button')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        );
    }
}

export default Classclick;
