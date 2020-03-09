import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: [],
      viewerItem: []
    }
    // BIND SHIT
    this.getAll = this.getAll.bind(this)
    // BIND MORE SHIT
    this.handleViewerItem = this.handleViewerItem.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  // getAll() {
  //   axios({
  //     method: 'get',
  //     url: '/ibay/products'
  //   })
  //   console.log('stuff')
  // }

  // updateViewer(){
  //   if (this.state.viewerItem.length < 1){

  //   }
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

  handleViewerItem(click) {
    this.setState({
      viewerItem: click
    })
  }

  handleSearch(value) {
    console.log('VALUE', value)
    for (var i = 0; i < this.state.allItems.data.length; i++) {
      if (this.state.allItems.data[i].item.includes(value)) {
        this.setState({
          viewerItem: this.state.allItems.data[i]
        }, () => console.log(this.state.allItems.data[i]))
        return;
      }
    }

  }

  componentDidMount() {
    this.getAll()
  }

  render() {
    return (
      <div style={{ backgroundColor: "lightblue" }}>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearch={this.handleSearch} />
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer firstProduct={this.state.viewerItem} />
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList ProductsData={this.state.allItems.data} handleViewerItem={this.handleViewerItem} />
          </div>
        </div>
      </div>
    )
  }
}
