

import React, { Component } from 'react'
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class ComponentState extends Component {

   constructor(props){
     super(props)
      this.state = {
        count:0,
        modalIsOpen: false,
        inputValue:'',
        change:''
      
     }}

     openModal=() => this.setState(() => ({modalIsOpen: true}));
     afterOpenModal=()=> {}
     closeModal=() =>this.setState({modalIsOpen: false});
    




     handleAdd= ()=> this.setState((prevState)=>({count:prevState.count + +prevState.inputValue}))
     handleMinus= ()=>  this.setState((prevState)=>({count:prevState.count - +prevState.inputValue}))
     handleReset=()=>this.setState(()=>({count:0}))
 
     handleChange=(event) => this.setState({inputValue:event.target.value})


   
   componentDidMount(){
     console.log(this.props)
   }

  render() {
    return (
      <div>
        <h1>  Handle State With React . </h1>
        <hr />
        <h1>  {this.state.count}  </h1>
        <button className="btn blue" onClick={(e)=> {this.setState({change:'Add'});return this.openModal(e)} } > Add </button>
        <button className="btn red" onClick={(e)=> {this.setState({change:'Minus'});return this.openModal(e)} } > Minus </button>
        <button className="btn green" onClick={this.handleReset } > Reset </button>
        <Modal
        isOpen={this.state.modalIsOpen}
        ariaHideApp={false}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        shouldCloseOnEsc={true}
        
        >
        
         <h3 >{this.state.change}</h3>
         <div className="row">
         <div className="input-field col s6">
            <label className="active" >Number.</label>
            <input value={this.state.inputValue} onChange={this.handleChange} type="text"  />
          
           </div>
       </div>
           <button className="btn green"  onClick={this.state.change === 'Add'? this.handleAdd:this.handleMinus}>ok</button>
           <button className="btn red" onClick={this.closeModal}>Close</button>
         
          
      </Modal>
  


        
      </div>
    )
  }
}




      
        
