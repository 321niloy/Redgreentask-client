
import Axios from "../Axios/Axios"
import toast, { Toaster } from "react-hot-toast"

const Delete = ({id,onDelete }) =>{
    
    const toastStyle = {
        fontSize: "40px", // Adjust the font size as needed
        padding: "30px",   // Adjust the padding as needed
        // Add any other CSS properties to customize the toast size
      };

    const handledelete = (id) =>{
        console.log(id)
        const url = `/singledata/${id}`
        Axios.delete(url)
        .then(res =>{
            toast.success('Delete Successfully.',{ style: toastStyle })
            onDelete(id)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return(
        <>
            <button onClick={() => handledelete(id)} className="bg-blue-500 font-extralight text-white p-1 rounded-lg">Delete</button>
        <Toaster className="w-64 h-64" position="top-right" reverseOrder={false} />
        </>
    )
}
export default Delete;