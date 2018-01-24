import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{
        id: 1,
        nameProduct: 'Iphone 6 plus',
        price: 16000000,
        status: true
      }, {
        id: 2,
        nameProduct: 'Iphone 7 plus',
        price: 26000000,
        status: true
      }, {
        id: 3,
        nameProduct: 'Iphone 7',
        price: 36000000,
        status: true
      }, {
        id: 4,
        nameProduct: 'Iphone 8 plus',
        price: 46000000,
        status: true
      }, {
        id: 5,
        nameProduct: 'Iphone 8',
        price: 56000000,
        status: true
      }],
      isActive: true
    }
    this.onAddProduct = this.onAddProduct.bind(this);
    this.modifyActive = this.modifyActive.bind(this);
  }
  eventClick(text) {
    alert(text);
    console.log(text);
  }
  onAddProduct() {
    console.log(this.refs.name.value);
  }
  modifyActive() {
    var str=JSON.parse(JSON.stringify(this.state.products));

    // if (this.state.isActive === true) {
    //   this.setState({
    //     isActive:false
    //   })
    // } else {
    //   this.setState({
    //     isActive:true
    //   })
    // }
    // this.state.products.map((product,index)=>{
    //     this.setState({
    //       status:false
    //     })
    // })
    // this.setState({
    //   isActive:!this.state.isActive
    // })
    // for (var i = 0; i < this.state.products.length; i++) 
    // { 
    //   if (this.state.products[i].id === 2) { 
    //     this.setState({ 
    //       status : false 
    //     }) } }
        console.log(str);
  }
  render() {
    let pr = this.state.products.map((product, index) => {
      let result = '';
      if (product.status) {
        result = <Product price={product.price} key={product.id} >{product.nameProduct} {product.id}</Product>
      }
      return result;
    });
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="form-group">
                <label>Product Name</label>
                <input type="text" className="form-control" placeholder="Input field" ref="name" />
              </div>
              <button type="submit" className="btn btn-primary" onClick={this.onAddProduct}>Insert Data</button>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-xs-6 col-sm-12 col-md-6 col-lg-6">
              {pr}
            </div>
          </div>
          <button type="button" className="btn btn-warning" onClick={this.modifyActive}>Click Me : {this.state.isActive === true ? 'true' : 'false'}</button>
        </div>
      </div>
    );
  }
}

export default App;
