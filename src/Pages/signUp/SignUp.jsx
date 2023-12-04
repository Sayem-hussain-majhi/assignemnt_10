import { useContext, useEffect, useRef, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provaider/AuthProvaider";
import { useForm } from "react-hook-form";


const SignUp = () => {
  const {register, handleSubmit, watch, formState:{errors}} = useForm()

  const onSubmit = (data)=>{
    console.log(data)
  }

  console.log(watch('example'))
  
    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true)

    const {createUser} = useContext(AuthContext)


  // useEffect(()=>{
  //   loadCaptchaEnginge(6); 
  // },[])

  // const handleLogin =(event)=>{
  //   event.preventDefault()
  //   const form = event.target
  //   const email = form.email.value
  //   const password = form.password.value
  //   console.log(email, password)
  //   signIn(email, password)
  //   .then(res => console.log(res.user))
  //   .catch(error => console.log(error.message))
  // }

  // const handleValidateCaptcha = () =>{
  //   const userCaptchaValue = captchaRef.current.value
  //   console.log(userCaptchaValue) 
  //   if(validateCaptcha(userCaptchaValue)){
  //     setDisabled(false)
  //   }else{
  //     setDisabled(true)
  //   }
  // }






    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Signup now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card  md:w-1/2 max-w-lg shadow-2xl bg-base-100">
            <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", {required: true})} placeholder="name" name="name" className="input input-bordered" required />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", {required: true})} placeholder="email" name="email" className="input input-bordered" required />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", {required: true})} placeholder="password" className="input input-bordered" name="password" required />
                {errors.password && <span>This field is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input type="text" ref={captchaRef}  className="input input-bordered" name="captcha" placeholder='type the catcha above'  />
                <button 
                // onClick={handleValidateCaptcha} 
                className='btn btn-outline btn-xs mt-3'>validate</button>
              </div>
              <div className="form-control mt-6">
                <input
                //  disabled={disabled} 
                 className="btn btn-primary" type="submit" value="Sign up" />
              </div>
            </form>
            <p><small>Allredy have an account <Link to='/login'>please login</Link> </small></p>
            
          </div>
        </div>
      </div>
    );
};

export default SignUp;