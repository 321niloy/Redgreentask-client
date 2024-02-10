import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
      // Navigate to the registration page
      navigate("/registration");
    };

    return (
      <div className="text-center bg-gradient-to-b from-sky-300 to-sky-500 p-10 h-screen">
        <h1 className="text-4xl text-white font-serif font-extrabold mb-8">
          Welcome to Our Website
        </h1>
        <p className="text-3xl text-white font-serif font-extrabold mb-6">
          Please Register with Fake Email,Then you can see a Acation Menu
        </p>
        <p className="text-2xl text-white font-serif font-extrabold mb-6">
          After Clicking action menu you can  Add, Read, Update,sorting,pagination and Delete options.
        </p>
  
        <div className="flex justify-center items-center mt-10">
          <div className="bg-white p-8 rounded-md shadow-md w-96">
            {/* Your registration and login components can go here */}
            <p className="text-xl text-gray-700 font-serif mb-4">
              Ready to get started?
            </p>
            <button onClick={handleRegisterClick} className="bg-sky-600 text-white py-2 px-4 rounded-md hover:bg-sky-700 transition duration-300">
              Register Now
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  