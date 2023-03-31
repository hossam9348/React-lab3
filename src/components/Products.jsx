import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


export default function Products() {
  var navigate =  useNavigate();
 let  [products, SetProducts]  = useState([])
  useEffect(()=>{
     axios.get('http://localhost:3005/products').then((res)=>{
      SetProducts(res.data);
     }).catch((err)=>{

     })
  }, [])

  const viewProduct = (id) => {navigate(`/products/${id}`)}
  const editProduct = (id) => {navigate(`/products/${id}/edit`)}
  const goToAddPage = () => {navigate(`/products/0/edit`)}
  const deleteProduct = (id) => {axios.delete(`http://localhost:3005/products/${id}`).then((res)=>{
    console.log(res.data);
    var updatedProducts = products.filter((product)=>{
      if(product.id !== id ){
        return true;
      }
    })
    SetProducts(updatedProducts);
   }).catch((err)=>{
   })}

  return (
    <div>
      <h1 className='mt-5'>Products</h1>
      <i onClick={goToAddPage} className="bi bi-plus-square-fill fs-1"></i>
       <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Product Quantity</th>
          <th>Actoins</th>
        </tr>
      </thead>
      <tbody>
      {
        products.map((product, index)=>{
          return  <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.productName}</td>
         <td>{product.price}</td> 
         <td>{product.quantity}</td>
         <td>
         <i onClick={()=>viewProduct(product.id)} className="bi bi-eye-fill fs-2 text-info mx-2"></i>
        <i onClick={()=>editProduct(product.id)} className="bi bi-pencil-square fs-2 text-warning mx-2"></i>
        <i onClick={()=>deleteProduct(product.id)} className="bi bi-trash3-fill fs-2 text-danger mx-2"></i>
          </td> 
        </tr>
        })
      }
      </tbody>
    </Table>
    </div>
  )
}
