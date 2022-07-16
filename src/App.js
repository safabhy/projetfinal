import React from "react";
import Home from './Home';
import { BrowserRouter as Router, Route, Routes 
  } from 'react-router-dom';
import Login from "./Login";
import Employees from "./components/employees";



export default function  App() {
  

  
return (

    <div className="App">
      <div class="w3-row w3-padding w3-theme-d2 w3-xlarge">
      <div class="w3-quarter">
        <div class="w3-bar">
      <a href="/" class="w3-bar-item w3-button">
          <i class="fa fa-bars"></i></a>
     </div>
    </div>
    <div class="w3-half">
    </div>
         <a href="/login" class="w3-bar-item w3-button w3-right">
            <img  height={40} class="w3-hide-small w3-circle" src="https://cdn-icons-png.flaticon.com/512/147/147142.png" /></a>
    </div>
  
    <Router>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
             <Route path='/employees' exact={true} element={  <Employees />}/>
          <Route path='/login' exact={true} element={  <Login />}/>
      </Routes>
    </Router>
   </div> 
   );
}

