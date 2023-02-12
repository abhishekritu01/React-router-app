import React from 'react'
import { useParams } from 'react-router-dom'

const ProductWithId = () => {

    const {productId} =useParams();
  return (
    <div>
        <h2>ProductWithId   : {productId}</h2>
        <pre>{JSON.stringify(productId,null,2)}</pre>
    </div>

  )
}

export default ProductWithId