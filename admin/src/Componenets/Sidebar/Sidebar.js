import React from 'react'
import list_product from'../Assets/Product_list_icon.svg'
import add_product from'../Assets/Product_Cart.svg'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className='containers' style={{height:'86vh',width:'20vw' ,background:'#b5bec72e'}}>
        <Link to={'/addproduct'} style={{textDecoration:'none'}}>
      <div>
        <img src={add_product} alt="" />
        <p  className="add mx-2">addProduct</p>
        
      </div>
      </Link>
      <Link to={'/listproduct'} style={{textDecoration:'none'}}>
      <div>
      <img src={list_product} alt="" />
        <p className="list mx-2">listProduct</p>
        
      </div>
      </Link>
    </div>
  )
}

export default Sidebar
