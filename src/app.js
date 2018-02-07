import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Navbar from './components/navbar/navbar';
import ComponentState from './components/state_component/state-component';
import Clock from './components/clock/clock';


<<<<<<< HEAD


  class App extends React.Component  {
       constructor(props){
         super(props)
          };
      
      
        render (){
=======
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
   
   
       openModal= () =>{
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
>>>>>>> e4c4a4eaf997b8e3088bd69e6fbf25eecaa0a0b6
      return (
        <div>
        <Navbar />
       <div className="container" >
<<<<<<< HEAD
     
       
       <ComponentState 
       
        
        />
        <Clock />

    </div>
    </div>
      

       
       
      )
  }



   }






ReactDOM.render(<App />,document.getElementById('app'));
=======
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
       </div> ) }}
    ReactDOM.render(<Header />,document.getElementById('app'));
>>>>>>> e4c4a4eaf997b8e3088bd69e6fbf25eecaa0a0b6
