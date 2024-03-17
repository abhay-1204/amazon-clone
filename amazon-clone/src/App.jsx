import React from 'react'
import Header from './Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Herosection from './components/Herosection/Herosection';
import Login from './components/loginpage/Login';
import Signup from './components/registionpage/Signup';
import Footer from './components/footer/Footer';


const App = () =>{
  return (
    
    <Router>
      <Header/>
      <Routes>
          <Route path='/' element={<Herosection/>}/>;
          <Route path='/login' element={<Login/>}/>;
          <Route path='/signup' element={<Signup/>}/>;             

      </Routes>
      <Footer/>
    </Router> 
  )
}
export default App;