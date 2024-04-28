import React from 'react'
import data_product from'../Assests/data'
import Items from'../Items/Items'
function RelatedProduct() {
  return (
    <div className='container'>
      <h3 className='head text-center'>Related Product</h3>
      <hr />
      <div className='row'>
        {data_product.map((product,index)=>{
            return(
                <div key={index} className='col-md-3'>
                    <Items id={product.id} name={product.name} image={product.image} new_price={product.new_price} old_price={product.old_price} ></Items>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default RelatedProduct
