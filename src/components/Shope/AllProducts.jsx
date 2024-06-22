import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct, getallProduct } from "../../redux/actions/product";

const AllProducts = () => {

    const {product, isLoading}= useSelector((state)=> state.products)
    const {seller}= useSelector((state)=> state.seller)

    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(getallProduct(seller));
    },[dispatch])

      console.log(product)

  return (
    <div>
      
    </div>
  )
}

export default AllProducts
