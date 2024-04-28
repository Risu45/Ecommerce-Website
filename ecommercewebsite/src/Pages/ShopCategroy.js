import React from 'react'
import { useContext } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import Items from '../Components/Items/Items';
// import all_products from '../Components/Assests/all_product';
import dropdown_icons from '../Components/Assests/dropdown_icon.png'


function ShopCategroy(props) {
  const {all_product}=useContext(Shopcontext);
 
  return (
    <div className='container'>
     
        <img src={props.banner} style={{width:"85vw"}} alt="" />
        <p>1-36 items </p>
             <div> sort<img src={dropdown_icons} alt="" /></div>
        
       
        <div className='row'>
           {all_product.map((product,index)=>{
            if(props.category===product.category){
               return(
                <div key={index} className='col-md-3'>
                  <Items name={product.name} id={product.id} image={product.image} new_price={product.new_price} old_price={product.old_price}></Items>
                </div>
           )}
               else{
                return null;
               }
           })}
        </div>
      
    </div>
  )
}

export default ShopCategroy
