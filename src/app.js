import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Navbar from './components/navbar/navbar';
import ComponentState from './components/state_component/state-component';
import Clock from './components/clock/clock';




  class App extends React.Component  {
       constructor(props){
         super(props)
          };
      
      
        render (){
      return (
        <div>
        <Navbar />
       <div className="container" >
     
       
       <ComponentState 
       
        
        />
        <Clock />

    </div>
    </div>
      

       
       
      )
  }



   }






ReactDOM.render(<App />,document.getElementById('app'));