
import React from 'react';

class CartItem extends React.Component {
  render () {
    const { qty, price, title } = this.props.product;
    const { product } = this.props;

    return (
      <div className="cart-item">
        <div className="left-block">
          <img
            style={{ height: 110, width: 110, borderRadius: 5, background: '#ccc' }}
            src={product.img} alt =""
          />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}> {title} </div>
          <div style={{ color: '#777' }}>{price}</div>
          <div style={{ color: '#777' }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            <img 
              alt="add"
              src="https://th.bing.com/th/id/OIP.d3fUvgGRRpgUGWZjahC-sQHaHa?pid=ImgDet&w=151&h=151&c=7"
              className="action-icons"
              onClick={() => this.props.onIncreaseQuantity(product)}
            />
            <img
              alt="minus"
              src="https://th.bing.com/th/id/OIP.8Vh_442i30VigdcNjYJr4QHaHY?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className="action-icons"
              onClick={() => this.props.onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              src="https://th.bing.com/th/id/OIP.V53CIVNmqVnxtYRrvrslhQHaHa?w=169&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className="action-icons"
              onClick={() => this.props.onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CartItem;