import React, { Component } from 'react';
class Product extends Component {

  constructor(props) {
    super(props);
    this.buyProduct = this.buyProduct.bind(this);
  }

  buyProduct() {
    alert("Buy Success! " + this.props.children);
  }


  render() {
    return <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="thumbnail">
        <img src="https://cellphones.com.vn/media/catalog/product/cache/7/image/500x500/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-6-plus-gold_11.png" alt="Iphone" />
        <div className="caption">
          <h3>{this.props.children}</h3>
          <p>{this.props.price} VNĐ</p>
          <button type="button" className="btn btn-success" onClick={this.buyProduct} >Mua Hàng</button>
        </div>
      </div>
    </div>
  }
}

export default Product;
