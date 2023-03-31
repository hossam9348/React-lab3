import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'


export default function ProductForm() {
  var navigate =  useNavigate();
  const { id } = useParams()
  const[product, setProduct]  = useState({})

  const submitHandler = (e) =>{
     e.preventDefault()
     if(id!=0){
      axios.put(`http://localhost:3005/products/${id}`, formValues).then((res)=>{console.log(res)})
     }else{
      axios.post(`http://localhost:3005/products`, formValues).then((res)=>{console.log(res)})
     }
     navigate('/products')
  }

  const operationHandeler  = (e) =>{
  setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  useEffect(()=>{
    if(id!=0){
      axios.get(`http://localhost:3005/products/${id}`).then((res)=>{
        setProduct(res.data);
        setFormValues(res.data);
       }).catch((err)=>{
   
       })
    }
 }, [])

  let [formValues, setFormValues] = useState({
    productName:"",
    price:0,
    quantity:0,
    imgUrl:"",
    errors: { productName: null,
    price: null,
    quantity: null,
    imgUrl: null }
  })

  return (
    <Form className='p-3 bg-light' onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control required defaultValue={product.productName} name='productName' onChange={operationHandeler} type="text" placeholder="Enter Name" />
        <Form.Text className="text-muted">{formValues.errors.productName != null ? formValues.errors.productName : ""}</Form.Text> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control required defaultValue={product.price} name='price' onChange={operationHandeler} type="number" placeholder="Enter Price" />
        <Form.Text className="text-muted">{formValues.errors.price != null ? formValues.errors.price : ""}</Form.Text> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Quantity</Form.Label>
        <Form.Control required defaultValue={product.quantity} name='quantity' onChange={operationHandeler} type="number" placeholder="Enter Quantity" />
        <Form.Text className="text-muted">{formValues.errors.quantity != null ? formValues.errors.quantity : ""}</Form.Text> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>url</Form.Label>
        <Form.Control required defaultValue={product.imgUrl}  name='imgUrl' onChange={operationHandeler} type="text" placeholder="Enter url" />
        <Form.Text className="text-muted">{formValues.errors.imgUrl != null ? formValues.errors.imgUrl : ""}</Form.Text> 
      </Form.Group>

      <Button variant="primary" type="submit">
        {id ==0 ? "Add Product" : "Edit Product"} 
      </Button>
    </Form>
  );
}
