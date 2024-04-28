import React, { useState, } from 'react'
import logo from '../Assests/logo.jpeg'
// import Navbar from'../Navbar.css'
import { Link,useNavigate } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
    
    const[menu,setMenu]=useState("shop");
const navigate=useNavigate();

    const removeuser=()=>{
        localStorage.removeItem('auth-token')
        navigate('/')
    }
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src={logo} style={{height:"8vh"}}/>
                <Link className="navbar-brand" to="/">Shopping</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav nav-menu me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" onClick={()=>{setMenu("shop")}}><Link   style={{textDecoration:"none"}} to='/'>shop</Link>{menu==="shop"?<hr/>:<></>}</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" onClick={()=>{setMenu("mens")}}> <Link  style={{textDecoration:"none"}} to='/mens'>mens</Link>{menu==="mens"?<hr/>:<></>}</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={()=>{setMenu("womens")}}><Link   style={{textDecoration:"none"}} to='/womens'>womens</Link>{menu==="womens"?<hr/>:<></>}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none"}} to='/kids'>kids</Link>{menu==="kids"?<hr/>:<></>}</a>
                        </li>


                    </ul>
                    <form className="d-flex nav-item" >
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                      <Link to='/cart'> <i className="fa-solid fa-cart-shopping" style={{fontSize:"2rem"}}></i></Link> 
                  {
                    localStorage.getItem('auth-token')?  <Link onClick={removeuser} to='/login'> <button type="button" className="btn btn-primary">logout</button></Link> :  <Link to='/login'> <button type="button" className="btn btn-primary">login</button></Link> 
                  }
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
