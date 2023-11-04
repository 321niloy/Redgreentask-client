import { useEffect, useState } from "react";
import Axios from "../../Component/Axios/Axios";
import { Link, useLoaderData } from "react-router-dom";
import Delete from "../../Component/Delete/Delete";

const Viewpage = () =>{
    const [data,setdata] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    // const {totaldatapage} = useLoaderData();
    const [totaldatapage,settotaldatapage] = useState([])
    const [sortBy, setSortBy] = useState("asc"); 
    const [currentpage,setcurrentpage] = useState(0)
    const [itemsperpage,setitemperpage] = useState(5)
    const totalpages = Math.ceil(totaldatapage/itemsperpage)
    const pageNumbers = [...Array(totalpages).keys()]
    console.log(totaldatapage)
    // console.log(currentpage)
   
    // useEffect(()=>{
    //   const url = "/alldata"
    //     Axios.get(url)
    //     .then(res=>{
    //         console.log(res)
    //         setdata(res)
    //     })
    //     .catch(error =>{
    //         console.log(error)
    //     })
    // },[])

      useEffect(()=>{
      const url = "/totalpage"
        Axios.get(url)
        .then(res=>{
            console.log("res",res.data)
           
        })
        .catch(error =>{
            console.log(error)
        })
    },[])



    useEffect(() => {
      const url = `http://localhost:5000/alldata?page=${currentpage}&limit=${itemsperpage}&sortdb=${sortBy}`;
      Axios.get(url)
        .then((res) => {
          console.log(res); // Log the response data to see if it's correct
          setdata(res); // Update the state with the data array
        })
        .catch((error) => {
          console.log(error); // Log any errors
        });
    }, [currentpage, itemsperpage]);
    
    



const options = [5,6,8]
function handleselactchange (event){
setitemperpage(parseInt(event.target.value))
setcurrentpage(0)
 }








    const handleItemDelete = (deletedItemId) => {
        // Filter the data to exclude the deleted item
        const updatedData = data?.filter((item) => item._id !== deletedItemId);
        // Update the state with the filtered data
        setdata(updatedData);
      };




      const handleSearch = (event) => {
        setSearchQuery(event.target.value);
      };
    
      const filterdata = data.filter((data) =>
        data.name.toLowerCase().includes(searchQuery.toLowerCase())
      );



  const handlesorting = (text) =>{
    setSortBy(text)
    console.log(text)
  }

    
    return(
   <div>
   <div className='mb-3 text-center mt-5'>
        <input
          type='text'
          placeholder='Search by Name'
          value={searchQuery}
          onChange={handleSearch}
          className='px-3 py-2  rounded-lg border-sky-950'
          style={{ borderWidth: '5px' }} 
        />
      </div>
      <div className="dropdown dropdown-bottom">
  <label tabIndex={0} className="btn m-1">Sorting</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li onClick={() => handlesorting("asc")}><a>ASC</a></li>
    <li onClick={() => handlesorting("desc")}><a>DESC</a></li>
  </ul>
</div>

      

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
        filterdata?.map((data,index) =><tr key={data._id}>
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
{/* pagination */}
<div>
<p>Current Page: {currentpage}</p>
  {
    pageNumbers.map(number=><button key={number} 
    onClick={()=> setcurrentpage(number)}
    className={currentpage=== number?"bg-red-500 p-3 text-white rounded-xl border border-blue-800":"bg-red-300 p-3 text-Black rounded-xl border border-blue-500 font-bold"}>
    {number}
    </button>)
  }
  <select value={itemsperpage} onChange={handleselactchange}>
 {
  options?.map(option =>(
    <option key={option} value={option}>
      {option}
    </option>
  ))
 }
  </select>
</div>
   </div>
    )
}
export default Viewpage;

