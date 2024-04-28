import React, { createContext, useState,useEffect } from "react";
import all_product from'../Components/Assests/all_product'


export const Shopcontext=createContext(null);
const getDefaultcart=()=>{
  let cart={}
  for(let index=0;index< all_product.length;index++){
    cart[index]=0;
   
  }
  return cart;
 }
 
function ShopcontextProvider(props) {
  const[cartItem,setItems]=useState(getDefaultcart())
  const[all_product,setall_product]=useState([]);
  const fetchData = async () => {
		let allProductRes = await fetch('http://localhost:5000/product/allproduct');
		let allProductData = await allProductRes.json();
		setall_product(allProductData);

		if (localStorage.getItem('auth-token')) {
			let authRes = await fetch('http://localhost:5000/product/getcart', {
				method: 'POST',
				headers: {
					Accept: 'application/form-data',
					'auth-token': `${localStorage.getItem('auth-token')}`,
					'Content-Type': 'application/json'
				},
				body: "",
			});

			let authData = await authRes.json();
			setItems(authData);
		}
	}

	useEffect(() => {
		fetchData();
	}, [])
  
   
const addcart=async(itemsId)=>{
  // setItems((prev)=>({...prev,[itemsId]:prev[itemsId]+1}))
  if (localStorage.getItem('auth-token')) {
    const cartResponse = await fetch('http://localhost:5000/product/addcart', {
      method: "POST",
      headers: {
        Accept: "application'json",
        'auth-token':` ${localStorage.getItem('auth-token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ itemId: itemsId })
    });
    const cartData = await cartResponse.json();
    console.log(cartData);
    fetchData();
  }
}

const removefromcart= async(itemsId)=>{
  // setItems((prev)=>({...prev,[itemsId]:prev[itemsId]-1}))
  if (localStorage.getItem('auth-token')) {
    const cartResponse = await fetch('http://localhost:5000/product/removecart', {
      method: "POST",
      headers: {
        Accept: "application'json",
        'auth-token': `${localStorage.getItem('auth-token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ itemId: itemsId })
    });
    const cartData = await cartResponse.json();
    console.log(cartData);
    fetchData();
  }
}
const getDefaulttotalamount = () => {
  let totalamount = 0;
  for (const item in cartItem) {
    if (cartItem[item] > 0) {
      let itemInfo = all_product.find((product) => product.id === Number(item));
      totalamount += itemInfo.new_price * cartItem[item];
    }
  }
  return totalamount;
};
const contextvalue={ getDefaulttotalamount,all_product,cartItem,addcart,removefromcart}
  return (
    <Shopcontext.Provider value={contextvalue}>{props.children}</Shopcontext.Provider>
  )
}

export default ShopcontextProvider
