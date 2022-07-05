import { useState } from 'react'
import logo from './logo.svg'
// import './App.css'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import NotFound from './pages/NotFound'

function App() {

  return (
   <BrowserRouter>
    <Routes>
   <Route path='/' element={<HomePage/>}/>
   <Route path='/about' element={<AboutPage/>}/>
   <Route path='/users' element={<UsersPage/>}/>
   <Route path='*' element={<NotFound/>}/>
    
    </Routes>   

   </BrowserRouter>
  )
}

export default App
