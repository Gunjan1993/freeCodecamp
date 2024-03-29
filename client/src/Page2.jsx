import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './page2.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

function Content() {
  const[courses,setCourses]=useState([])
  const[auth2,setAuth2]=useState(false)
  axios.defaults.withCredentials=true
  useEffect(()=>{
axios.get('https://freecodecamp-v7nt.onrender.com/content').then(
  result=>{console.log(result)
  if(result.data=="Success"){
    setAuth2(true)
  }}
)
.catch(err=>console.log(err))


axios.get('https://freecodecamp-v7nt.onrender.com/getUsers')
.then(courses=>{setCourses(courses.data);
console.log(courses.data)}
)
.catch(err=>console.log(err))
  },[])
  return (
    <div>
      
      
        <Navbar authentication={auth2}></Navbar>
        <h2>Welcome to freeCodeCamp.org</h2>
        <h3>"I have not failed. I' ve just found 10,000 ways that won't work"</h3>
        <h5 style={{fontStyle:'italic'}}>-Thomas A. Edison</h5>
        {courses.map(course=>{
        
        return  <>
            
         <NavLink className="btns"><button><div style={{display:'flex'}}><div><img src={course.image}></img></div> <div>{course.name} {course.duration}</div></div></button></NavLink><br></br>
    
        </>
      })
      }
      
        </div>
  )
}

export default Content
