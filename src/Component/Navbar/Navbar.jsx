
// import { Link, useNavigate } from "react-router-dom";
// import "./nav.css"
// import { useContext, useState } from "react";
// import { Authcontext } from "../../context/Authprovider";
// const Navbar = () =>{
//   const {user,logOut} = useContext(Authcontext)
//   const navigate = useNavigate()

//   const handlelogout = () =>{
//     logOut()
//     navigate("/");

//   }

//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const handleDropdownToggle = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   const handleMenuItemClick = () => {
//     // Close the dropdown when a menu item is clicked
//     setDropdownOpen(false);
//   };
//     return(
// <div className="navbar bg-blue-500 p-4">
//       {/* Navbar Start */}
//       <div className="navbar-start space-x-4">
//         <Link to="/" className="text-white hover:text-gray-300">
//           Home
//         </Link>
//         {user && (
//           <div className="group inline-block relative">
//             <button
//               onClick={handleDropdownToggle}
//               className="text-white hover:text-gray-300 focus:outline-none"
//             >
//               Actions
//             </button>
//             <ul
//               className={`${
//                 isDropdownOpen ? 'block' : 'hidden'
//               } absolute bg-blue-500 text-white w-40 mt-2 rounded-md shadow-md`}
//             >
//               <li>
//                 <Link
//                   to="/addpage"
//                   onClick={handleMenuItemClick}
//                   className="block px-4 py-2 hover:bg-blue-600"
//                 >
//                   Add Data
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/alldata"
//                   onClick={handleMenuItemClick}
//                   className="block px-4 py-2 hover:bg-blue-600"
//                 >
//                   View all Data
//                 </Link>
//               </li>
//               <li>
//                 <button
//                   onClick={() => {
//                     handleMenuItemClick();
//                     handlelogout();
//                   }}
//                   className="block px-4 py-2 cursor-pointer hover:bg-blue-600"
//                 >
//                   Log out
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Navbar Center */}
//       <div className="navbar-center">
//         <Link to="/" className="text-white text-2xl font-bold">
//           Your Logo
//         </Link>
//       </div>

//       {/* Navbar End */}
//       <div className="navbar-end space-x-4">
//         {user ? (
//           <button
//             onClick={() => {
//               handleMenuItemClick();
//               handlelogout();
//             }}
//             className="text-white hover:text-gray-300"
//           >
//             Log out
//           </button>
//         ) : (
//           <div>
//             <Link
//               to="/log"
//               onClick={handleMenuItemClick}
//               className="text-white hover:text-gray-300"
//             >
//               Login
//             </Link>
//             <Link
//               to="/registration"
//               onClick={handleMenuItemClick}
//               className="text-white hover:text-gray-300"
//             >
//               Register
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>



//     )
// }
// export default Navbar;


import { Link, useNavigate } from "react-router-dom";
import "./nav.css";
import { useContext, useState } from "react";
import { Authcontext } from "../../context/Authprovider";

const Navbar = () => {
  const { user, logOut } = useContext(Authcontext);
  const navigate = useNavigate();

  const handlelogout = () => {
    logOut();
    navigate("/");
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = () => {
    // Close the dropdown when a menu item is clicked
    setDropdownOpen(false);
  };

  return (
    <div className="navbar bg-blue-500 p-4">
      {/* Navbar Start */}
      <div className="navbar-start space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        {user && (
          <div className="group inline-block relative">
            <button
              onClick={handleDropdownToggle}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              Actions
            </button>
            <ul
              className={`${
                isDropdownOpen ? 'block' : 'hidden'
              } absolute bg-blue-500 text-white w-40 mt-2 rounded-md shadow-md`}
            >
              <li>
                <Link
                  to="/addpage"
                  onClick={handleMenuItemClick}
                  className="block px-4 py-2 hover:bg-blue-600"
                >
                  Add Data
                </Link>
              </li>
              <li>
                <Link
                  to="/alldata"
                  onClick={handleMenuItemClick}
                  className="block px-4 py-2 hover:bg-blue-600"
                >
                  View all Data
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleMenuItemClick();
                    handlelogout();
                  }}
                  className="block px-4 py-2 cursor-pointer hover:bg-blue-600"
                >
                  Log out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Navbar Center */}
      <div className="navbar-center">
        <Link to="/" className="text-white text-2xl font-bold">
          My Task
        </Link>
      </div>

      {/* Navbar End */}
      <div className="navbar-end space-x-4">
        {user ? (
          <button
            onClick={() => {
              handleMenuItemClick();
              handlelogout();
            }}
            className="text-white hover:text-gray-300"
          >
            Log out
          </button>
        ) : (
          <div>
            <Link
              to="/log"
              onClick={handleMenuItemClick}
              className="text-white hover:text-gray-300"
            >
              Login
            </Link>
            <Link
              to="/registration"
              onClick={handleMenuItemClick}
              className="text-white hover:text-gray-300 ms-5"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
