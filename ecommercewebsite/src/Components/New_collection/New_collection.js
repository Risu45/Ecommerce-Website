import React, { useEffect, useState } from 'react'
import './New_collection.css'
// import new_collections from '../Assests/new_collections'
import Items from '../Items/Items'
function New_collection() {
  
  const [new_collections, setnew_collections] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			let collectionRes = await fetch('http://localhost:5000/product/newcollection');
			let collectionData = await collectionRes.json();
			console.log(collectionData);
			setnew_collections(collectionData.newcollection);
		}
		fetchData();
	}, [])
  return (
    <div className='container'>
      <div className='row'>
        {new_collections.map((collection,index)=>{
            return(
                <div key={index} className='col-md-3'>
                    <Items id={collection.id} image={collection.image} name={collection.name} new_price={collection.new_price} old_price={collection.old_price}></Items>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default New_collection
