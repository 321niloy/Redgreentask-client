import { useForm } from "react-hook-form";
import Axios from "../../Component/Axios/Axios";
import Swal from "sweetalert2";
import "./add.css"
const Addpage = () =>{
    const {     register,  handleSubmit,  watch,  formState: { errors },reset } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        const url = '/adddata'
        Axios.post(url,data)
        .then(res =>{
            console.log("data posted successfull check",res)
            Swal.fire('Data added Successfull')
            reset();
         })
         .catch(error =>{
            console.log(error)
         })

    }
return(

     <div className="foradd">
        <h1 className="text-5xl text-sky-700 my-5 text-center ">Add Details</h1>
        <div className="hero min-h-screen  rounded-xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-sky-600 bg-opacity-40">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-extrabold">Name</span>
          </label>
          <input type="text" placeholder="Name" {...register("name", { required: true })} className="input input-bordered"/>
          {errors.name && <span className="text-red-800">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-extrabold">Age</span>
          </label>
          <input type="number" placeholder="Age" {...register("age", { required: true })} className="input input-bordered"  />
          {errors.age && <span className="text-red-800">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-extrabold">Location</span>
          </label>
          
        <input type="text" placeholder="Location" {...register("location", { required: true })} className="input input-bordered"  />
        {errors.location && <span className="text-red-800">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-extrabold">Number</span>
          </label>
          <input type="number" placeholder="Number" {...register("number", { required: true })} className="input input-bordered"  />
          {errors.number && <span className="text-red-800">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-extrabold">NID</span>
          </label>
          <input type="number" placeholder="NID" {...register("nid", { required: true })} className="input input-bordered"/>
          {errors.nid && <span className="text-red-800">This field is required</span>}
        </div>
        <div className="form-control mt-6">
        <input className="p-3 bg-white bg-opacity-40 rounded-xl text-blue-800 font-extrabold hover:bg-opacity-100 hover:bg-white cursor-pointer" type="submit" value="Add Details"/>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>

   

)
}
export default Addpage;

