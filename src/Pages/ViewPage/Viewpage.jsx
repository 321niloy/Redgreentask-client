import { useEffect, useState } from "react";
import Axios from "../../Component/Axios/Axios";
import { Link } from "react-router-dom";
import Delete from "../../Component/Delete/Delete";

const Viewpage = () =>{
    const [data,setdata] = useState()
    const url = "/alldata"
    useEffect(()=>{
        Axios.get(url)
        .then(res=>{
            console.log(res)
            setdata(res)
        })
        .catch(error =>{
            console.log(error)
        })
    },[])


    const handleItemDelete = (deletedItemId) => {
        // Filter the data to exclude the deleted item
        const updatedData = data.filter((item) => item._id !== deletedItemId);
        // Update the state with the filtered data
        setdata(updatedData);
      };
    
    return(
        <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Age</th> 
        <th>Location</th> 
        <th>Number</th> 
        <th>NID</th> 
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead> 
    <tbody>
      {
        data?.map((data,index) =><tr key={data._id}>
        <th>{index+1}</th> 
        <td>{data.name}</td> 
        <td>{data.age}</td> 
        <td>{data.location}</td> 
        <td>{data.number}</td> 
        <td>{data.nid}</td> 
        <td><Link to={`/updatedata/${data._id}`} className="bg-red-500 text-white p-1 rounded-lg">Edit</Link></td>
        <td><Delete id={data._id} onDelete={handleItemDelete} ></Delete></td>
      </tr>)
      }
    </tbody> 
  </table>
</div>
    )
}
export default Viewpage;