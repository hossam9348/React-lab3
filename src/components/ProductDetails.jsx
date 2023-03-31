import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {

   const { id } = useParams();
   const[product, setProduct]  = useState({})


   useEffect(()=>{
    axios.get(`http://localhost:3005/products/${id}`).then((res)=>{
     setProduct(res.data);
    }).catch((err)=>{

    })
 }, [])

  return (
    <div className="bg-dark p-3">
    <div className="container">
        <div class="card">
            <img src={ product?.imgUrl } className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{ product?.productName }</h5>
                <p className="card-text">
                    price: { product?.price }
                </p>
                <p className="card-text">
                    quantity: { product?.quantity }
                </p>
                <a className="btn btn-primary">{ product?.quantity===0?'sold  out' : 'Buy Now' }</a>
            </div>
        </div>
    </div>
</div>
  )
}
