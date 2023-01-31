import React from 'react'

const Navbar = () => {
  
 let name= sessionStorage.getItem("name");
  return (
    <div>
        
<nav class="navbar bg-warning  " >
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Home/Employee Dashboard</a>
  </div>
</nav>
<nav class="navbar bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Welcome,{name}</a>
    {/* <a class="navbar-brand" href="/form">Add Employee form</a> */}
  </div>
</nav>


    </div>
  )
}

export default Navbar