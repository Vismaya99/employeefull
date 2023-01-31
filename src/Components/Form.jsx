import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Form = () => {
const [data,setdata]=useState({
    name:"",
    location:"",
    position:"",
    salary:""
})
const inputhandler=(event)=>{
    const {name,value}=event.target
    setdata(
        (previousstate)=>(
            {
                ...previousstate,
                [name]:value
            }
        )
    )
}
const readvalues=()=>{
    console.log(data);
    axios.post("http://localhost:4000/form",data)
    .then(
        (response)=>{
            console.log(response.data);
            if(response.data.status=="success"){
                alert("employee data created successfully")
                
            }else{
                
            }
        }
    )
    .catch(
        (err)=>{
            console.log(err);
        }
    )
}

  return (
    <div><Navbar/>
    <div className="container">
        
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label"
                        >Name</label>
                        <input type="text" className="form-control" placeholder='Enter your name' 
                        name="name"
                        value={data.name}
                        onChange={inputhandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label"
                        >Designation</label>
                        <input type="text" className="form-control" placeholder='Enter your position'
                        name="position"
                        value={data.position}
                        onChange={inputhandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label"
                    >Location</label>
                        <input type="text" className="form-control" placeholder='Enter your location' 
                        name="location"
                        value={data.location}
                        onChange={inputhandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Salary</label>
                        <input type="text" className="form-control" placeholder='Enter your salary'
                        name="salary"
                        value={data.salary}
                        onChange={inputhandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br />
                        <button className="btn btn-warning" onClick={readvalues}>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    </div></div>
  )
}

export default Form