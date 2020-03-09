import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: []
    }
    // BIND SHIT
    this.getAll = this.getAll.bind(this)
    // BIND MORE SHIT
    // console.log(this.state.allItems)

  }

  // getAll() {
  //   axios({
  //     method: 'get',
  //     url: '/ibay/products'
  //   })
  //   console.log('stuff')
  // }

  getAll() {
    axios.get('/ibay/products')
      .then((response) => {
        this.setState({
          allItems: response
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getAll()
  }

  render() {
    return (
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer />
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList ProductsData={this.state.allItems.data} />
          </div>
        </div>
      </div>
    )
  }
}
