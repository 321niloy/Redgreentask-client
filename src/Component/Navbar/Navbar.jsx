
import { Link, useNavigate } from "react-router-dom";
import "./nav.css"
import { useContext } from "react";
import { Authcontext } from "../../context/Authprovider";
const Navbar = () =>{
  const {user,logOut} = useContext(Authcontext)
  const navigate = useNavigate()

  const handlelogout = () =>{
    logOut()
    navigate("/");

  }
    return(
        <div className="navbar bg-base-100 nvstyle">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn  btn-circle hover:bg-sky-600 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-sky-800 text-white rounded-box w-52">
              <li ><Link to="/" className="hover:text-white hover:bg-sky-950">Homepage</Link></li>
       {
        user && <div>
        <li ><Link to="/addpage" className="hover:text-white hover:bg-sky-950">Add Data</Link></li>
              <li ><Link to="/alldata" className="hover:text-white hover:bg-sky-950">View all Data</Link></li>
        </div>
       }
              {
                user? <li><button onClick={() => handlelogout()} to="/addpage" className="hover:text-white hover:bg-sky-950">Log out</button></li>:
               <div>
               <li ><Link to="/log" className="hover:text-white hover:bg-sky-950">Login</Link></li>
              <li ><Link to="/registration" className="hover:text-white hover:bg-sky-950">Registration</Link></li>
               </div>
              }
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl text-sky-600 text-center ">Red Green Technology LTD.</a>
        </div>
      
      </div>
    )
}
export default Navbar;