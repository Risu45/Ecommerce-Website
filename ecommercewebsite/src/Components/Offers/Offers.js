import React from 'react'
import exclusive_image from '../Assests/exclusive_image.png'
import './Offers.css'

function Offers() {
  return (
    <div className='container '>
      <div className="card mb-3 d-flex justofy-content-around align-items-center" style={{background:"linear-gradient(50deg, rgb(137 219 111), rgb(199 43 213))"} }>
  <div className="row g-0 ">
    <div className="col-md-4">
      <img src={exclusive_image} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8 d-flex justify-content-center align-items-center">
      <div className="card-body">
        <h5 className="card-title">exclusive Offers</h5>
        <p className="card-text">Only on best sellers products.</p>
        {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
        <button type="button" class="btn btn-danger">check now</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Offers
