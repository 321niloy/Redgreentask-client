import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Authcontext } from "../../context/Authprovider";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const { createusers } = useContext(Authcontext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { email, password } = data;

    createusers(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log("signup createdUser", createdUser);
        Swal.fire('Registration Successful');
        setSuccess('Registration Successful');
        reset();
        navigate("/addpage"); 
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="formstyle">
      <h1 className="text-4xl text-center pt-20 text-white">
        Give Fake email and password
      </h1>

      <div className="mt-3 rounded">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-80">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body space-y-4"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                    className="input input-bordered"
                    required
                  />
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <label className="label">
                    <span className="label-text text-red-500">
                      Password should be six digits
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                    className="input input-bordered"
                    required
                  />
                  {errors.password && (
                    <span className="text-red-500">Password is required</span>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <span className="text-green-500">{success}</span>
                <span className="text-red-500">{error}</span>

                <div className="form-control mt-6">
                  <button className="p-3 bg-sky-600 rounded-xl text-white hover:bg-sky-400 hover:font-extrabold">
                    Registration
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
