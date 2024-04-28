import React, { useContext } from 'react'
import start_icons from'../Assests/star_icon.png'
import start_dull from'../Assests/star_dull_icon.png'
import { Shopcontext } from '../../Context/Shopcontext';
import './ProductDisplay.css';
function ProductDisplay(props) {
    const {product}=props;
    const {addcart}=useContext(Shopcontext)
  return (
    <div className='container maincontainer  d-flex justify-content-around my-3 '>
        <div className='col-md-1'>
        <div className='row '>
            
              <img className='img my-2' src={product.image}  alt="" />
              <img className='img my-2' src={product.image} alt="" />
              <img className='img my-2' src={product.image}  alt="" />
              <img  className='img my-2' src={product.image} alt="" />
          </div>
            </div>
       
          <div class="card mx-3 bigimg"  >
          <img src={product.image} className="card-img-top" style={{height:"100%"}} alt="..."/>
  </div>
       
        <div>
            <h5>{product.name}</h5>
            <div className='row'>
                <div className='col' >
            <img src={start_icons} alt="" /> 
            <img src={start_icons} alt="" /> 
            <img src={start_icons} alt="" /> 
            <img src={start_icons} alt="" /> 
            <img src={start_dull} alt="" /> 
           <p>(122)</p>
            </div>
            </div>
           
         <div className='col d-flex'>
            
         <p className='para mx-2' style={{color:"red"}}>${product.new_price}</p>
          <p><s>${product.old_price}</s></p>
         </div>
         <div className='container '>
            <p>A lightweight ,usually knitted ,pullover shirt, close-fitting and round neckline and short sleeves and undershirt  </p>
         </div>
          <h5>Select Size</h5>
          <div className='row '>
            <div className='col d-flex '>
            <button type="button" class="btn btn-outline-secondary mx-2">X</button>
            <button type="button" class="btn btn-outline-secondary mx-2">XL</button>
             <button type="button" class="btn btn-outline-secondary mx-2">S</button>
            <button type="button" class="btn btn-outline-secondary mx-2">M</button>
            <button type="button" class="btn btn-outline-secondary">XXL</button>
            </div>
          </div>
          <button type="button" class="btn btn-danger my-2" onClick={()=>{addcart(product.id)}}>Add Cart</button>
          <p> <span>Category:</span> {product.category}</p>
          <p><span>Tag:</span>Modern ,Latest</p>
        </div>
      
    </div>
  )
}

export default ProductDisplay
