import React from "react";
import "./App.css";
// import CartItem from './CartItem';
import Cart from "./cart";
import Navbar from "./navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          qty: 10,
          price: 2500,
          title: "Shoes",
          img:
         "https://th.bing.com/th/id/OIP.DE9CkHZ9XyiCAMxsi4j9pgHaHc?pid=ImgDet&rs=1",
          id: 1
        },
        {
          qty: 1,
          price: 77777,
          title: "Washing Machine",
          img:
            "https://images-na.ssl-images-amazon.com/images/I/81HApTZ8D8L._SL1500_.jpg",
          id: 2
        },
        {
          qty: 4,
          price: 999,
          title: "Watch",
          img:
            "https://th.bing.com/th?id=OIP.1g3-RfYZ9E5OMggzEYlgDgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
          id: 3
        }
      ]
    };
  }

  handleIncreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    });
  };

  handleDecreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;

    this.setState({
      products
    });
  };

  handleDeleteProduct = id => {
    const { products } = this.state;

    const items = products.filter(product => product.id !== id);

    this.setState({
      products: items
    });
  };

  getcountOfCartItems = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach(product => {
      count += product.qty;
    });

    return count;
  };

  getcartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;

    products.map(product => {
      if (product.qty > 0) {
        cartTotal = cartTotal + product.qty * product.price;
      }
      return "";
    });

    return cartTotal;
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getcountOfCartItems()} />
        <Cart
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          products={products}
        />
        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL : {this.getcartTotal()}
        </div>
      </div>
    );
  }
}

export default App;

