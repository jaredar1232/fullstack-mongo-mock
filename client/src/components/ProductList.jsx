import React from 'react';
import Products from './Products';

const ProductList = (props) => {
  if (props.ProductsData) {
    return (
      <div className='product-list'>
        {props.ProductsData.map((product) => (<Products productInfo={product} key={product._id} />))}
      </div>
    )
  } else {
    return (
      <div className='product-list'>
        There are currently no Auctions!
      </div>
    )
  }
}

export default ProductList

//arrayOfProducts