import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import New_collection from '../Components/New_collection/New_collection'
import Footer from '../Components/Footer/Footer'
function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <New_collection/>
      
      {/* <Footer></Footer> */}
    </div>
  )
}

export default Shop
