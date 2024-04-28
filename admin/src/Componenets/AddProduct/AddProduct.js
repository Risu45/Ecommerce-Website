import React, { useState } from 'react';
import upload from '../Assets/upload_area.svg';

function AddProduct() {
  const [image, setImage] = useState(false);
  const [productD, setProductD] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: ""
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  }

  const changeHandler = (e) => {
    setProductD({ ...productD, [e.target.name]: e.target.value });
  }
  const handlesubmit = (e) => {
    e.preventDefault();
  }
  const addProduct = async () => {
    console.log(productD);
    let responseData;
    let product = productD;
    let formData = new FormData();
    formData.append('product', image);
    await fetch('http://localhost:5000/product/uploads', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData
    }).then((resp) => resp.json()).then((data) => { responseData = data; });
    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product)
      await fetch('http://localhost:5000/product/addproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product),
      }).then((resp) => resp.json()).then((data) => {
        data.success ? alert("product added") : alert("fail")
      })
    }
  }


  return (
    <div className='container'>
      <form onSubmit={handlesubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Product title</label>
          <input value={productD.name} onChange={changeHandler} type="text" className="form-control" id="title" name="name" />
        </div>
        <div className="mb-3  d-flex">
          <div>
            <label htmlFor="price" className="form-label">Price</label>
            <input value={productD.old_price} onChange={changeHandler} type="text" className="form-control" id="price" style={{ height: '2.5rem' }} name="old_price" />
          </div>
          <div className='offer mx-3'>
            <label htmlFor="offerprice" className="form-label">Offer Price</label>
            <input value={productD.new_price} onChange={changeHandler} type="text" className="form-control" id="offer" style={{ height: '2.5rem' }} name="new_price" />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="productcategory" className="form-label">Product Category</label>
          <select value={productD.category} onChange={changeHandler} className="form-select" id="productcategory" name="category">
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kid">Kid</option>
          </select>
        </div>
        <div>
          <div className='upload my-3'>
            <img src={image ? URL.createObjectURL(image) : upload} style={{ width: "150px" }} alt="" />
          </div>
          <input onChange={imageHandler} type="file" /></div>
        <button onClick={addProduct} type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  );
}

export default AddProduct;
