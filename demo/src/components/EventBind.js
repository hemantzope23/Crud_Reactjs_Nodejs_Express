import React, { Component } from 'react';

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         messege:'Hello Hemant'
      };
    //   this.EventHandler = this.EventHandler.bind(this)
    };

    // EventHandler(){
    //     this.setState({
    //         messege: 'Goodbye..Hemant'
    //     })
    //     console.log(this)
    // }

    EventHandler = () =>{
        this.setState({
            messege:'GoodBye..Hemant'
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.messege}</div>
                {/* <button onClick={this.EventHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.EventHandler()}>Click</button> */}
                <button onClick={this.EventHandler}>Click</button>
            </div>
        );
    }
}

export default EventBind;
