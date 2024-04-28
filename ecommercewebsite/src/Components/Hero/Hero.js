import React from 'react'
import './Hero.css'
import shopping from '../Assests/shopping.png'
function Hero() {
    return (
        <div className='div1' >
            <div className='container left d-flex justify-content-around align-items-center '>
                
                    <div>
                    <p>New Arrival only</p>
                    <h1>new 😊</h1>
                    <h1>collections for everyone</h1>
                    </div>
             
                <div>
                    <img src={shopping} className='navimg' alt=""  />
                </div>
            </div>
        </div>
    )
}

export default Hero
