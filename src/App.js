import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {
  render() {
    var products = [{
      id: 1,
      nameProduct: 'Iphone 6 plus',
      price: 16000000,
      status: true
    }, {
      id: 2,
      nameProduct: 'Iphone 7 plus',
      price: 26000000,
      status: false
    }, {
      id: 3,
      nameProduct: 'Iphone 7',
      price: 36000000,
      status: false
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
    }];
    let pr = products.map((product, index) => {
      let result = '';
      if (product.status) {
        result = <Product price={product.price} key={product.id} >{product.nameProduct} {product.id}</Product>
      }
      return result;
    });
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-xs-6 col-sm-12 col-md-6 col-lg-6">
            {pr}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
