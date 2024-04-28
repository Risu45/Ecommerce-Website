import React, { useEffect, useState } from 'react'
// import data_product from '../Assests/data'
import Items from '../Items/Items'

function Popular() {
    const [data_product, setData_product] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			let res = await fetch('http://localhost:5000/product/popularwomen');
			let data = await res.json();
			setData_product(data);
		}
		fetchData();
	}, [])
    return (
        <div className='container'>
            <h1 className='text-center'>Popular in Womens</h1>
            <div className='row '>
                {data_product.map((product, index) => {
                    return (<div key={index} className="col-md-3 ">
                        <Items image={product.image} id={product.id} name={product.name} new_price={product.new_price} old_price={product.old_price}></Items>
                    </div>)


                })}
            </div>

        </div>
    )
}

export default Popular
