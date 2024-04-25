import React,{useState,useEffect} from 'react'
import User from './User'
import { Link, useNavigate } from "react-router-dom";

function Edit() {

    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[id,setId] = useState('');

    var index = User.map(function(e){
            return e.id
        }).indexOf(id);
  
    let history = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
    
        let a=User[index]
        a.Name=name;
        a.Email=email;
    
        history("/home");
      }
    useEffect(()=>{
        setName(localStorage.getItem('Name'))
        setEmail(localStorage.getItem("Email"))
        setId(localStorage.getItem("id"))
    },[])

  return (
    <>
        <h2>Create Member</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name} placeholder="Name" required 
                onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className='form-label'>Email address</label>
          <input type="email" className="form-control" value={email} placeholder="Enter email" required 
                onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <br />
        <button type="submit" className="btn btn-primary" onClick={(e)=>{handleSubmit(e)}}>Edit</button>
        <Link to={"/home"} style={{paddingLeft: "10px"}}>
          <button className='btn btn-primary'>Home</button>
        </Link>
      </form>
    </>
  )
}

export default Edit