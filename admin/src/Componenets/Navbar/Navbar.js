import React from 'react'
import admin from'../Assets/nav-logo.svg'
import navprofile from'../Assets/nav-profile.svg'
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
             <div className="container-fluid">
<img src={admin} alt="" />
  <img src={navprofile} alt="" />
     
    </div>
  
</nav>
    </div>
  )
}

export default Navbar
