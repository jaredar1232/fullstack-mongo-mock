import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  onChangeHandler(e) {
    console.log(e)
    this.setState({
      value: e.target.value
    }, () => (this.props.handleSearch(this.state.value)))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.onChangeHandler} />
        </label>
        <input type="submit" value="Submit" onClick={(e) => e.preventDefault()} />
      </form>
    );
  }
}
//   console.log('props from sear', props)
//   return (<div className="search-bar form-inline">
//     <input className="form-control" type="text" id="search" onChange={}/>
//     <button className="btn hidden-sm-down" >
//       submit
//     </button>
//   </div>)
// };

export default Search;

// document.getElementById("search").textContent