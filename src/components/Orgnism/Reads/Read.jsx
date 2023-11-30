import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://64df43e871c3335b25825a9f.mockapi.io/curd-operation")
      .then((res) => {
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://64df43e871c3335b25825a9f.mockapi.io/curd-operation/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);
  const navigate=useNavigate()

  return (
    <div>
      <div className="heading">
      <h2>User Data</h2>
      <button className="btn-success" onClick={()=>navigate('/create')}>Create User</button>
      </div>
      <table className={`table`}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData) => (
            <tr key={eachData.id}>
              <td>{eachData.id}</td>
              <td>{eachData.name}</td>
              <td>{eachData.email}</td>
              <td>
                <Link to="/update">
                  <button
                    className="btn-success"
                    onClick={() =>
                      setToLocalStorage(
                        eachData.id,
                        eachData.name,
                        eachData.email
                      )
                    }
                  >
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="btn-danger"
                  onClick={() => handleDelete(eachData.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div> 
  );
};

export default Read;
