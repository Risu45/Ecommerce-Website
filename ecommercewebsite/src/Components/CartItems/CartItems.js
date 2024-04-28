import React, { useContext } from 'react';
import { Shopcontext } from '../../Context/Shopcontext';
import remove_icons from '../Assests/cart_cross_icon.png';
import all_product from'../Assests/all_product' // Import all_product as a named export

function CartItems() {
  const { getDefaulttotalamount,cartItem, removefromcart } = useContext(Shopcontext);

  return (
    <div className='container'>
      {/* <div className='row'>
        <div className='col d-flex'>
        <p className='para mx-2'>Product</p>
        <p className='para mx-2'>Title</p>
        <p className='para mx-2'>Quantity</p>
        <p className='para mx-2'>Total</p>
        <p className='para mx-2'>Price</p>
        <p className='para mx-2'>Remove</p>
        </div>
      </div>
      <hr /> */}
      <table className="table table-responsive ">
  <thead>
  <tr>
      <td>Product</td>
     
      <td>Title</td>
      <td>Quantity
      </td>
      <td>Price</td>
      
      <td>Total</td>
      <td>Remove</td>
    </tr>
   
    </thead>
    <tbody>
    {all_product.map((e) => {
      if(cartItem[e.id]>0){
return(
     
     <tr key={e.id}>
    <td><img src={e.image} alt="" style={{height:"17vh",width:"6vw"}} /></td>
     <td>{e.name}</td>
     <td scope="row">{cartItem[e.id]}</td>
    <td>{e.new_price}</td>
   
    <td>{e.new_price*cartItem[e.id]}</td>
    <td><img src={remove_icons} onClick={()=>{
      removefromcart(e.id)
    }} alt="" /></td>
    
   </tr>
     ) }
})}
<div className='container  ' style={{width:"48vw"}}>
  <h4>Cart total</h4>
  <div className='d-flex  justify-content-between '>
    <p>subtotal</p>
    <p>${getDefaulttotalamount()}</p>
  </div>
  <hr />
  <div className='d-flex  justify-content-between '>
    <p>Shipping</p>
    <p>Free</p>
  </div>
  <hr />
  <div className='d-flex  justify-content-between '>
    <p>Total</p>
    <p>${getDefaulttotalamount()}</p>
  </div>
  <button  className="btn btn-danger">proceed to checkout</button>
</div>
 {/* return null; */}
 </tbody>
</table>
          {/* );
        } */}
        {/* return null; */}
      {/* })} */}
    </div>
  );
}

export default CartItems;
