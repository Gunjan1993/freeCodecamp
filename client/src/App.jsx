import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup'

import Home from './Home'
import Content from './Page2'

function App() {
  const login =window.localStorage.getItem("isLogedIn")

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup/>}></Route>
       <Route path='/' element={login?<Content/>:<Home/>}></Route>
      <Route path='/content' element={<Content/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
