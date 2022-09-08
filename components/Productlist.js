import React from 'react'
import Product from './Product.js'


export default function Productlist(props) {
    console.log(props)
  return (
    props.productList.map((product,i)=>{
return <Product product={product} key={i}/>
    })
  )
}
