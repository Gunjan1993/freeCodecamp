import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
function Signup(){

    const[name, setName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[formErrors,setformErrors]=useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate=useNavigate()
    const userReg={name,email,password}
   axios.defaults.withCredentials=true;
    const handleSubmit=(e)=>{
        setIsSubmit(true);
        e.preventDefault()
        setformErrors(validate(userReg))
        window.localStorage.setItem("isLogedIn",true)
        
        axios.post('https://free-codecamp-blond.vercel.app/register', {name,email,password})
        .then(result=>{console.log(result)
            if(result.data==="This email already exits!"){
                navigate('/register')
                document.getElementById("emailstatus").innerHTML="This email already exits!";
                document.getElementById("emailstatus").style.color="red"
            }
            else{
                navigate('/content')
            }
       
        
        })
        .catch(err=>console.log(err))
    }
    // useEffect(() => {
    //     console.log(formErrors);
    //     if (Object.keys(formErrors).length === 0 && isSubmit) {
    //       console.log(userReg);
    //     }}, [formErrors]);
    function validate(values){
        const errors={}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            errors.name = "Name is required!";
          }
          if (!values.email) {
            errors.email = "Email is required!";
          } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
          }
          if (!values.password) {
            errors.password = "Password is required!";
          }
          return errors
    }
return(

<div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
<div className="bg-white p-3 rounded w-25">

<h2>Login to freeCodeCamp.org</h2>

{Object.keys(formErrors).length === 0 && isSubmit ? (
        navigate("/content"))
 
      : (navigate("/register"))
      }
<form onSubmit={handleSubmit}> 
    <div className="mb-3">
    <label htmlFor="email">
        <strong>Name</strong>
    </label>
    <input type="text" placeholder="Enter name" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e)=>{setName(e.target.value)}}></input>
    <p id="namestatus" style={{color:'red'}}>{formErrors.name}</p>
    </div>

    <div className="mb-3">
    <label htmlFor="email">
        <strong>Email</strong>
    </label>
    <input type="email" placeholder="Enter email" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e)=>{setEmail(e.target.value)}}></input>
    <p id="emailstatus" style={{color:'red'}}>{formErrors.email}</p>
    
    </div>

    <div className="mb-3">
    <label htmlFor="email">
        <strong>Password</strong>
    </label>
    <input type="password" placeholder="Enter password" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e)=>{setPassword(e.target.value)}}></input>
    <p id="passwordstatus" style={{color:'red'}}>{formErrors.password}</p>
    </div>

    <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
    </form>
    <GoogleLogin
  onSuccess={credentialResponse => {
    const credentialResponseDecoded=jwtDecode(credentialResponse.credential);
    console.log(credentialResponseDecoded);
    // if(credentialResponseDecoded){
    //     setName(credentialResponseDecoded.name);
    //     setEmail(credentialResponseDecoded.email);
    //     navigate('/content')
    // }
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
   


</div>


</div>

);
}
export default Signup;
