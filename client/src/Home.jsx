
import React, { useState } from 'react'
import Navbar from './Navbar'
import './Home.css'
import  Apple from './assets/apple.png'
import  Microsoft from './assets/microsoft.png'
import Spotify from './assets/sptify.png'
import Amazon from './assets/amazon.png'
import axios from 'axios'
import { useEffect } from 'react'

function Home() {
  const[auth,setAuth]=useState(false);

//   axios.defaults.withCredentials=true
//   useEffect(()=>{
// axios.get('http://localhost:3001/content').then(
//   result=>{console.log(result)
    
//   if(result.data=="Success"){
//     //navigate('/register')
//     setAuth(true)
//   }}
// )
// .catch(err=>console.log(err))

//   },[])
  
  return (
    <>
 <Navbar authentication={auth}></Navbar>
    <div className='homepage'>
      
      <h1 className='firstline'>Learn to code -for free.</h1>
      <h1>Build Projects.</h1>
      <h1>Earn certifications.</h1>
      <h4>Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:</h4>
      <ul className='icons'>
        <li><img src={Apple}></img></li>
<li > Google</li>
<li><img src={Microsoft}></img>Microsoft</li>
<li><img src={Spotify}></img>Spotify</li>
<li><img src={Amazon}></img></li>
      </ul>
      <button className='getstarted'>Get started (it's free)</button>
    </div>
    </>
    
  )
}

export default Home