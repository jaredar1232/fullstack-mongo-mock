import React from 'react';

const Products = (props) => {
  return (
    <div className='product-list-entry'>
      <h5 style={{ color: "red" }}>{props.productInfo.item}</h5>
      <div>Min Buyout: {props.productInfo.min_cost}</div>
      <div>Current Bid: {props.productInfo.curr_bid}</div>
      <div>Time Remaining: {props.productInfo.ends_in}</div>
      <img src="https://picsum.photos/id/237/200/300"></img>
    </div>
  )
}

export default Products