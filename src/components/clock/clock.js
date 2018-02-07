

import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state={
            time: new Date(Date.now()).toTimeString()
        }
    }

    componentDidMount() {
        setTimeout(()=> {
            return   this.setState({
                  time: new Date(Date.now()).toTimeString()  
               })
          },1000)
        
        
    }
    componentWillUpdate(){
        setTimeout(()=> {
            return   this.setState({
                  time: new Date(Date.now()).toTimeString()  
               })
          },1000)

    }
    componentWillMount (){
       clearTimeout()
    }
    render() {
    return (
      <div>
      <h1>  {this.state.time} </h1>
 
        
      </div>
    )
  }
}
