import React from 'react'
import arrow_icons from'../Assests/arrow.png'
function Bredcrum(props) {
    const{product}=props
  return (
    <div className='container'>
    HOME<img src={arrow_icons} alt="" />SHOP<img src={arrow_icons} alt="" />{product.category} <img src={arrow_icons}  alt="" />{product.name}
    </div>
  )
}

export default Bredcrum
