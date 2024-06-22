import React, { useEffect, useState } from 'react'
import { productData } from '../../static/data'
import styles from "../../styles/styles";
import ProductCard from '../Route/ProductCard/ProductCard';

const SuggestedProduct = ({data}) => {

    const [products, setProducts] = useState(null)

    useEffect(()=>{
        const d = productData && productData.filter((i) => i.category===data.category)
        setProducts(d)
    })

  return (
    <div>
      {
        data ? (
          <div className={`${styles.section} p-4`}>
          <h2 className={`${styles.heading} text-[25px] font-[500] border-b mb-6`}>
              Related Products
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[20px] md:gap-[25px] lg:gap-[25px] xl:gap-[30px] mb-12'>
           {
            products && products.map((i, index) => (
              <ProductCard data={i} key={index}/>
            ))
           }
          </div>

          </div>
        ) : null
      }
    </div>
  )
}

export default SuggestedProduct
