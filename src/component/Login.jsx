import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate,NavLink} from "react-router-dom";

function Login() {

    const [val,setVal] = useState({
        email:"",
        pwd:""
    });
    // console.log(val)
    let history = useNavigate();

    const getdata=(e)=>{
        const {value,name}=e.target;
        // console.log(value,name);

        setVal(()=>{
            return {
                ...val,
                [name]:value
            }
        })
    }

    const add=(e)=>{
        e.preventDefault();
        // console.log(val);

        const getAttr = localStorage.getItem("USERS")
        console.log(getAttr)

        const {email,pwd} = val;

        if (email === '') {
            alert("Provide Email");
        } 
        else if (!email.includes("@")) {
            alert("Provide proper Email");
        } 
        else if (pwd === ''){
            alert("Provide Passowrd");
        }
        else if (pwd.length < 8){
            alert("Passowrd length should be greater than 8");
        }
        else{
            if(getAttr && getAttr.length){
                const user = JSON.parse(getAttr);
                const userlogin = user.filter((el,k)=>{
                    return el.email === email && el.pwd === pwd
                });
                if(userlogin.length === 0){
                    alert("Invalid Email OR Password")
                }
                else{
                    alert("Successfulll...");
                    history("/home")
                }
            }
        }
    }

  return (
    <>
        <div className="conatiner mt-3">
                <section className="d-flex justify-content-between">
                    <div className="left_data mt-3 p-3" style={{width:"100%"}}>
                        <h2 className="text-center col-lg-12">Login</h2>
                        <Form>
                            <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                                <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-12"controlId="formBasicPassword">
                                <Form.Control type="password" name="pwd" onChange={getdata} placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={add} className="mb-3 col-lg-2">
                                Submit
                            </Button>
                        </Form>
                        <p className="mt-3" style={{marginLeft:100}}>New User <span><NavLink to="/">Sign In</NavLink></span></p>
                    </div>
                    <div className="right_data mt-3" style={{width:"100%",textAlign:"center"}}>
                        <div className="sign_img mt-3" style={{paddingTop:90}}>
                            <img src="/signin.png" style={{maxWidth:480,width:"100%"}} alt="" />
                        </div>
                    </div>
                </section>
            </div>
    </>
  )
}

export default Login
