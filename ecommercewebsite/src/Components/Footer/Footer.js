import React from 'react'
import logo from'../Assests/logo.jpeg'
import icons from'../Assests/whatsapp_icon.png'
import instra from'../Assests/instagram_icon.png'
import pinte from'../Assests/pintester_icon.png'

function Footer() {
  return (
    <div>
      <div className='container d-flex justify-content-center my-3'>
        <img src={logo} style={{height:"18vh"}} alt="" />
        <h1>Shopping</h1>

      </div>
      <div className='container d-flex justify-content-center my-3 '>
      <img  className="imgs mx-3"src={icons}  alt="" />
      <img  className="imgs mx-3"src={instra}  alt="" />
      <img className="imgs mx-3" src={pinte} alt="" />
      </div>
      <hr />
      <div className='container d-flex justify-content-center my-3'>
        
        <p>Copyright@2024- allright servers</p>
      </div>
    </div>
  )
}

export default Footer
