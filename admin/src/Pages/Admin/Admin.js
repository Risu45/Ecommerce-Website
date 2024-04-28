import React from 'react'
import Sidebar from '../../Componenets/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import AddProduct from '../../Componenets/AddProduct/AddProduct'
import ListProduct from '../../Componenets/ListProduct/ListProduct'
function Admin() {
  return (
    <div className='container d-flex '>
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
        

        
      </Routes>
    </div>
  )
}

export default Admin
