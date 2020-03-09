import React from 'react';

export default class ProductViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  render() {
    if (this.props.firstProduct.item) {
      return (
        <div className='product-viewer'>YOUR PRODUCT VIEWER IS WORKING{this.props.firstProduct.item}
        </div>
      )
    } else {
      return (
        <div className='product-viewer'>
        </div>
      )
    }

  }
}