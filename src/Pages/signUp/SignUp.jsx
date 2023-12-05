import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provaider/AuthProvaider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const SignUp = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const navigate = useNavigate()
  
  const { createUser, google } = useContext(AuthContext)

  const handleGoogle= ()=>{
    google()
    navigate('/')
  }

  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
    .then(res => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: " Successfully Sign Up",
        showConfirmButton: false,
        timer: 2000
    });
    })
  }








  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Signup now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card  md:w-1/2 max-w-lg shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" {...register("name", { required: true })} placeholder="name" name="name" className="input input-bordered" required />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" {...register("email", { required: true })} placeholder="email" name="email" className="input input-bordered" required />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" name="password" required />
              {errors.password && <span>This field is required</span>}
              <label className="label">
               
              </label>
            </div>

            <div className="form-control mt-6">
              <input
                //  disabled={disabled} 
                className="btn btn-primary" type="submit" value="Sign up" />
            </div>
          </form>
          <p onClick={handleGoogle} className='btn btn-ghost text-xl font-bold text-center py-3'><small>Google </small></p>
          <div className='divider'>Or</div>
          <p><small>Allredy have an account <Link to='/login'>please login</Link> </small></p>

        </div>
      </div>
    </div>
  );
};

export default SignUp;