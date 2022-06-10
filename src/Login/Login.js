import React from 'react'
import './Login.css'
import vec from  './last.png'
import axios from 'axios'
import {useState} from 'react'
import {toast,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

  function Login() {
    
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    function validate(e){
    e.preventDefault();
    let emails=email;
    let passwords=password; 

    
    let item={
        email:emails,
        password:passwords
    }
    // console.table(item);

    axios.post('https://reqres.in/api/login', {
        email:emails,
        password:passwords
      })
      .then((response)=> {
        if (response.status === 200) {
           console.log(response.status);
            toast.error("login is successful");
          }
      })
      .catch((error)=> {
       if(error.response.status=== 400){
  toast.error("Some of the filed are incorrect are or missing");
  console.log(error.response.status);
       }
      });

   
   

   
  
    }
    
  return (
    <div>
        <div className='container-fluid pt-2'
        style={{height:"10vh"}}
        >
            <div className='row justify-content-between shad'>
                <div className='col-md-4 text-start py-2'>
                 <h4 
                 style={{fontWeight:"900",color:"#05304"}}
                 >
                     ATools<small className='fg'
                     style={{color:"red"}}
                     >*</small>
                 </h4>
                </div>
                <div className='col-lg-5 col-md-7 justify-content-around text-end py-2' id="at767none">
                <button className='btn btn-primary mx-3'
                 style={{backgroundColor:"#053047",fontWeight:"600",color:"white",width:"150px",borderRadius:"0px",outline:"none",border:"none"}}
                >
                Start Free Trial
                </button>
                <button className='btn'
                style={{backgroundColor:"#ffd300",fontWeight:"600",color:"white",width:"150px",borderRadius:"0px",outline:"none",border:"none"}}
                >
                 Login
                </button>
                </div>
            </div>
        </div>
        <div className='container-fluid'>
            <div className='row justify-content-around'>
                <div className='col-md-5 col-sm-8 tys'
                 style={{backgroundColor:"white",height:"90vh"}}
                >
                 <div className='row justify-content-center mt-5'>
                     <div className='col-10 mt-5'>
                         
                         <div className='row mt-5'>
                         <h1
                         style={{fontWeight:"900"}}
                         >
                        Welcome Back
                         </h1>
                         </div>
                         <div className='row'>
                          <p
                          style={{fontWeight:"300",fontSize:"small"}}
                          >
                              <span>
                              Sub title text goes here
                              </span>
                          </p>
                         </div>
                       
                         <div className='row'>
                             <div className='mb-3'>
                             <input type="email"
                              className="form-control"
                              
                              id="exampleInputEmail1"
                               aria-describedby="emailHelp"
                                value={email} 
                                 onChange={(e)=>{setEmail(e.target.value)}}
                                  placeholder="Email Address*" required/>
                             </div>
                         
                         </div>
                         <div className='row'>
                         <div className='mb-3'>
                         <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password*' required/>
                         </div>
                        
                         </div>
                         <div className='row'>
                         <div className='mb-3'>
                             <ToastContainer position="top-center"/>
                             <button className='btn w-100' onClick={validate} 
                              style={{backgroundColor:"#053047",color:"white",fontWeight:"500"}}
                             >
                             Submit
                             </button>
                             
                               

                                
                             
                         </div>
                         </div>
                         
                         <div className='row'>
                         <div className='mb-3'>

                             <div className='row justify-content-between'>
                                 <div className='col-4  mb-1 form-check'>
                                 <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                 <span
                                   style={{color:"#053047",fontSize:"small"}}
                                 >Remember Password</span>
                                
                                 </div>
                                 <div className='col-5 mb-1'>
                                  <span
                                  style={{color:"#053047",fontSize:"small"}}
                                  >
                                      Forget Password?
                                  </span>
                                 </div>
                             </div>


                         </div>
                          </div>
                     </div>
                 </div>
                </div>
                <div className='col-7 text-center' id="at767noneA"
                style={{backgroundColor:"#053047",height:"90vh"}}
                >
                 <img src={vec} alt="backcover" className='img-fluid mt-5'/>
                </div>
            </div>
        </div>  

    </div>
  )
}

export default Login
