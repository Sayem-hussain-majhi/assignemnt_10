import { useContext, useEffect, useRef, useState } from 'react';

import { AuthContext } from '../../Provaider/AuthProvaider';
import { Link,  useNavigate } from "react-router-dom";


const Login = () => {
    const captchaRef = useRef(null)
    const navigate = useNavigate()


    const {signIn, google} = useContext(AuthContext)

    const handleGoogle= ()=>{
      google()
      navigate('/')
    }




  const handleLogin =(event)=>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password)
    signIn(email, password)
    .then(res => console.log(res.user))
    .catch(error => console.log(error.message))
  }

  const handleValidateCaptcha = () =>{
    const userCaptchaValue = captchaRef.current.value
    console.log(userCaptchaValue) 
    if(validateCaptcha(userCaptchaValue)){
      setDisabled(false)
    }else{
      setDisabled(true)
    }
  }



    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        
        </div>
        <div className="card  md:w-1/2 max-w-lg shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" name="password" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
           
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
         
         

          <p onClick={handleGoogle} className='btn btn-ghost text-xl font-bold text-center py-3'><small>Google </small></p>
          <div className='divider'>Or</div>
          <p className='text-xl font-bold text-center'><small>New here <Link to='/signup'>create an account</Link> </small></p>
          
        </div>
      </div>
    </div>
    );
};

export default Login;