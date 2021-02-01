import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Hemant'
      };
      console.log('LifeCycleA constructor')
    };

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevprops, prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    changeState=()=>{
        this.setState({
            name:'Hemant Zope'
        })
    }
  render() {
    console.log('LifecycleA render')
    return (<div>
      <div>Lifecycle A </div> 
      <button onClick={this.changeState}>Change state</button>
      <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
