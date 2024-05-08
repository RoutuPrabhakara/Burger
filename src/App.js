import React from 'react'
import Nav from './Components/Nav'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Readmore from './Components/Readmore'
import Footer from './Components/Footer'
import Store from './Components/Store/Store'
import View from './Components/View/View'
import Franchise from './Components/Frachise/Franchise'
import Jobs from './Components/Jobs&carrer/Jobs'
import Order from './Components/Order/Order'
import Online_order from './Components/Online_order/Online_order'


function App() {

 



  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
      
      <Route path='/' element = {<Home/>}/>
      <Route path='/readmore' element = {<Readmore/>}/>
      <Route path='/store' element = {<Store/>}/>
      <Route path='/view' element = {<View/>}/>
      <Route path='/frachise' element = {<Franchise/>}/>
      <Route path='/jobs' element = {<Jobs/>}/>
      <Route path='/Order' element = {<Order/>}/>
      <Route path='/Online' element = {<Online_order/>}/>
      
      </Routes>
      <Footer/>
      </BrowserRouter>


        
         


    </div>
  )
}

export default App