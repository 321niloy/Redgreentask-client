import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Delete from "../../Component/Delete/Delete";

const Viewpage = () => {
  const [data, setdata] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("asc");
  const [currentpage, setcurrentpage] = useState(0);
  const [itemsperpage, setitemperpage] = useState(5);
  const { totaldatapage } = useLoaderData();
  const totalpages = Math.ceil(totaldatapage / itemsperpage);
  const pageNumbers = [...Array(totalpages).keys()];
  const startIndex = currentpage * itemsperpage;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:5000/alldata?sort=${sortBy}&limit=${itemsperpage}&page=${currentpage}`;
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();

          //data filterd
          const filterdata = data.filter(({ name }) =>
          name.toLowerCase().includes(searchQuery.toLowerCase())
        );
          // console.log({data})
          setdata(filterdata);
          let sortedData = filterdata;
          if (sortBy === "ascName") {
            sortedData = filterdata.sort((a, b) =>
              a.name.localeCompare(b.name)
            );
          } else if (sortBy === "descName") {
            sortedData = filterdata.sort((a, b) =>
              b.name.localeCompare(a.name)
            );
          }
          setdata(sortedData);
        } else {
          console.error(`Error fetching data: ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    };

    fetchData();
  }, [searchQuery, sortBy, currentpage, itemsperpage]);



//  for delete
  const handleItemDelete = (deletedItemId) => {
    const updatedData = data.filter((item) => item._id !== deletedItemId);
    setdata(updatedData);
  };
// ===========

// =  for search
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  // ================



  // ==pagination
  const options = [5, 6, 8];
  const handlePageChange = (pageNumber) => {
    setcurrentpage(pageNumber);
  };

  const handleselactchange = (event) => {
    const selectedValue = parseInt(event.target.value);
    setitemperpage(selectedValue);
    setcurrentpage(0); // Reset the current page when changing items per page.
  };
  // ===========================


  // handle sorting
  const handlesorting = (text) => {
    console.log({text})
    setSortBy(text);
  };
  // ==========================






  return (
    <div>
      <div className="mb-3 text-center mt-5">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchQuery}
          onChange={handleSearch}
          className="px-3 py-2 rounded-lg border-sky-950"
          style={{ borderWidth: "5px" }}
        />
      </div>
     <div className="flex justify-center my-5">
     <div className="dropdown dropdown-bottom">
        <label tabIndex={0} className="btn m-1">
          Sorting
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => handlesorting("asc")}>
            <a>ASC</a>
          </li>
          <li onClick={() => handlesorting("desc")}>
            <a>DESC</a>
          </li>
        </ul>
      </div>
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
            {data?.map((data, index) => (
              <tr key={data._id}>
                <th>{startIndex + index + 1}</th>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.location}</td>
                <td>{data.number}</td>
                <td>{data.nid}</td>
                <td>
                  <Link
                    to={`/updatedata/${data._id}`}
                    className="bg-red-500 text-white p-1 rounded-lg"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <Delete id={data._id} onDelete={handleItemDelete}></Delete>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     <div className="flex justify-center">
     <div>
        <p className="text-center my-10">Current Page: {currentpage}</p>
        <button
          onClick={() => handlePageChange(currentpage - 1)}
          disabled={currentpage === 0}
        >
          Previous
        </button>
        {pageNumbers?.map(number => (
          <button
          key={number}
          onClick={() => handlePageChange(number)}
          className={
            currentpage === number
              ? "bg-red-500 p-3 text-white rounded-xl border border-blue-800"
              : "bg-red-300 p-3 text-Black rounded-xl border border-blue-500 font-bold"
          }
        >
          {number}
        </button>
        ))}

        <button
          onClick={() => handlePageChange(currentpage + 1)}
          disabled={currentpage === totalpages - 1}
        >
          Next
        </button>
        <select value={itemsperpage} onChange={handleselactchange}>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
     </div>
    </div>
  );
};

export default Viewpage;


