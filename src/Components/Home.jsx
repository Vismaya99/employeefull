import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';



const Home = () => {
    let [data,setdata]=useState([]);
    useEffect(
      ()=>{
        getdata();
      },[]
    )
    const getdata=()=>{
      axios.get('http://localhost:4000')
      .then(
        (response)=>{
         setdata(response.data);
        }
      )
      .catch(
        (err)=>{
          console.log(err);
        }
      )

    }
        
      
  return (
   
   <div><Navbar/><br /><br />
    <div className="container">
    </div>
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row-g-4">
                    {data.map(
                        (x,y)=>{
                            return <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <ul class="list-group">
          <li class="list-group-item active" aria-current="true">Position- {x.position}</li>
          <li class="list-group-item " id='myname'>Employee Name: {x.name}</li>
          <li class="list-group-item">Location- {x.location}</li>
          <li class="list-group-item">Salary- {x.salary}</li>
          
        </ul>
        
                            </div>
                        }
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home