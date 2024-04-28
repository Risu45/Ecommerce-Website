import React, { useEffect, useState } from 'react';
import remove_icons from '../Assets/cart_cross_icon.png';

function ListProduct() {
  const [all_product, setAllProduct] = useState([]);

  const fetchInfo = async () => {
    try {
      let response = await fetch('http://localhost:5000/product/allproduct');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let data = await response.json();
      setAllProduct(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  const removeProduct = async (id) => {
    try {
      await fetch('http://localhost:5000/product/deleteproduct',{
        method: 'Delete',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id }),
      });
  
      // Assuming the delete request is successful, update the product list
      await fetchInfo();
    } catch (error) {
      console.error('Error removing product:', error);
      // Add any specific error handling here
    }
  };

  return (
    <div className='container' style={{ maxHeight: '500px', overflowY: 'auto' }}>
      <table className="table table-responsive ">
        <thead>
          <tr>
            <td>Product</td>
            <td>Title</td>
            <td>New Price</td>
            <td>Old Price</td>
            <td>Category</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {all_product.map((e) => {
            return (
              <tr key={e.id}>
                <td><img src={e.image} alt="" style={{ height: "17vh", width: "6vw" }} /></td>
                <td>{e.name}</td>
                {/* <td scope="row"></td> */} 
                <td>{e.new_price}</td>
                <td>{e.old_price}</td>

                <td>{e.category}</td>
                <td><img src={remove_icons}  onClick={()=>{removeProduct(e.id)
                  // Handle remove click
                }} alt="" /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListProduct;
