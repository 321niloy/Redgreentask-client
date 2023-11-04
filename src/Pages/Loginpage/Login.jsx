import { useForm } from "react-hook-form";
import "./log.css"
import { useContext, useState } from "react";
import { Authcontext } from "../../context/Authprovider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const{signin}=useContext(Authcontext)
    const [succes,setsuccess] = useState()
    const [error,seterror] = useState()
    const navigate = useNavigate()

    const {     register,  handleSubmit,  watch,  formState: { errors },reset } = useForm()

    const onSubmit = (data) => {
      console.log("kaka",data)
      const { email, password} = data;

      signin(email,password)
      .then(result =>{
        const loguser = result.user
        console.log(loguser)
        setsuccess('Login Successful')
        Swal.fire('Login Successfull')
        navigate("/alldata");
      })
      .catch(error=>{
        console.log(error)
        seterror("Password or email is wrong",error.messege)
      })

    }

    return(
       <div className="formstyle mt-3 rounded">
         <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-80">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" required />
                {errors.email && <span className="text-red-500">Email field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" {...register("password", { required: true })} className="input input-bordered" required />
                {errors.email && <span className="text-red-500">Password field is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <span className="text-green-500">{succes}</span>
              <span className="text-red-500">{error}</span>
              <div className="form-control mt-6">
                <button className="p-3 bg-sky-600 rounded-xl text-white hover:bg-sky-400 hover:font-extrabold">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
       </div>
    )
}

export default Login;