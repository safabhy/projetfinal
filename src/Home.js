import React from 'react';
import './App.css';

import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
     
   <img src="https://wholesomelegal.com/b/wp-content/uploads/2018/07/employeeretention.png" width="100%" height="
   20%" />
        <button  className='btnn'>
        <Link to="/employees"> Employee</Link></button>
       </div>
  );
}

export default Home;
