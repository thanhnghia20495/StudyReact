import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Form from './components/Form';

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
    this.modifyActive1 = this.modifyActive1.bind(this);
    this.modifyActive2 = this.modifyActive2.bind(this);
    console.log(this.state.products)
  }
  eventClick(text) {
    alert(text);
    console.log(text);
  }
  onAddProduct() {
    console.log(this.refs.name.value);
  }
  modifyActive1() {
    for (let i = 0; i < this.state.products.length; i++) {
      var str = JSON.parse(JSON.stringify(this.state.products[i]));
      str.status = false
      this.state.products[i] = str;
      this.setState({
        products: str
      })
    }
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
    console.log(this.state.products)
  }
  modifyActive2() {
    for (let i = 0; i < this.state.products.length; i++) {
      var str = JSON.parse(JSON.stringify(this.state.products[i]));
      str.status = true
      this.state.products[i] = str;
      this.setState({
        products: str
      })
    }
    console.log(this.state.products)
    }
    render() {
      // let pr = this.state.products.map((product, index) => {
      let items = [];
      for (let i = 0; i < this.state.products.length; i++) {
        var item = '';
        if (this.state.products[i].status) {
          item = <Product price={this.state.products[i].price} key={this.state.products[i].id} >{this.state.products[i].nameProduct} {this.state.products[i].id}</Product>
        }
        items.push(item);
      }
      //   return result;
      // });
      return (
        <div>
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Form/>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-xs-6 col-sm-12 col-md-6 col-lg-6">
                {items}
              </div>
            </div>
            <button type="button" className="btn btn-warning" onClick={this.modifyActive1}>Ẩn</button>
            <button type="button" className="btn btn-warning" onClick={this.modifyActive2}>Hiện</button>
          </div>
        </div>
      );
    }
  }

  export default App;
