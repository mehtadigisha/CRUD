import React from 'react';
import './Home.css';
import User from './User';
import { Link,useNavigate } from "react-router-dom";

function Home() {

    let history = useNavigate();

    const handleDelete = (id) => {
        var index = User.map(function(e){
            return e.id
        }).indexOf(id);

        User.splice(index,1);

        history("/home")
    }

    const handleEdit = (id , name , email)=>{
      localStorage.setItem('Name',name)
      localStorage.setItem("Email",email)
      localStorage.setItem('id',id)
    }

  return (
    <div className="home-container">
      <h2>User List</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {User && User.length > 0 ? (
              User.map((item, index) => (
                <tr key={index}>
                  <td>{item.Name}</td>
                  <td>{item.Email}</td>
                  <td>
                    <Link to={"/edit"}>
                    <button className='btn btn-primary' onClick={()=>handleEdit(item.id,item.Name,item.Email)}>Edit</button>
                    </Link>
                    &nbsp;
                    <button className='btn btn-primary' onClick={()=>handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{textAlign:"center"}}><h3>No Data</h3></td>
              </tr>
            )}
          </tbody>
        </table>
        <br /><br />
        <Link to={"/create"} className='d-grid gap-2'>
            <button className='btn btn-primary'>Create</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
