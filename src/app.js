import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
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


        
        

   class Header extends React.Component  {
       constructor(props){
         super(props)
          this.state = {
           count:0,
           modalIsOpen: false,
           inputValue:'',
           change:''
         }
        
        
    
       }
       openModal=() =>{
        this.setState(()=> ({modalIsOpen: true}));
      }
    
      afterOpenModal=()=> {
        // references are now sync'd and can be accessed.
       
      }
    
      closeModal=() =>{
        this.setState({modalIsOpen: false});
      }




       handleAdd= ()=> {  
          this.setState((prevState)=>({count:prevState.count + +prevState.inputValue})
       )

       }
       handleMinus= ()=> {
        this.setState((prevState)=>({count:prevState.count - +prevState.inputValue})
        )
 
        }
        handleReset=()=>{
          this.setState(()=>({count:0})

          )
   
          }
          handleChange=(event) => {
         
            this.setState({inputValue:event.target.value})
            

          }
    
    render (){
      return (
        <div>
     <header>
       <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">CSS</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="sass.html">Login</a></li>
          <li><a href="badges.html">sign up</a></li>
        </ul>
      </div>
    </nav>
  </div>
  </header>
       <div className="container" >

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
       </div>
   
      )
    }
    
        

       
   
  }










ReactDOM.render(<Header />,document.getElementById('app'));