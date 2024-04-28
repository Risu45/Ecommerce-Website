import React from 'react'
import'./Items.css'
import {Link} from'react-router-dom'
function Items(props) {
  return (
    <div>
      <div className="card my-3">
     <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} className="card-img-top" alt="..."/></Link>
  <div className="card-body">
    {/* <h5 class="card-title">Card title</h5> */}
    <p className="card-text">{props.name}</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    <span className='mx-2'>₹{props.new_price}</span>
    <span > <s>₹{props.old_price}</s></span>
  </div>

</div>
    </div>
  )
}

export default Items
