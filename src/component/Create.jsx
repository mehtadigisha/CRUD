import React,{useState} from 'react'
import './Create.css'
import User from './User'
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";


const Create = () => {

  const[name,setName] = useState('');
  const[email,setEmail] = useState('');

  let history = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();

    const ids=uuid();
    let uniqueId = ids.slice(0,8);
    
    let a=name,b= email;
    
    User.push({id:uniqueId,Name:a,Email:b});

    history("/home");
  }

  return (
    <>
      
      <h2>Create Member</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Name" required 
                onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className='form-label'>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" required 
                onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <br />
        <button type="submit" className="btn btn-primary" onClick={(e)=>{handleSubmit(e)}}>Submit</button>
        <Link to={"/home"} style={{paddingLeft: "10px"}}>
          <button className='btn btn-primary'>Home</button>
        </Link>
      </form>
      
    </>
  )
}

export default Create