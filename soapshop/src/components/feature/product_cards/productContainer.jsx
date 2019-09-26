import React, { Component } from "react";
import { storeProducts, detailProduct } from "../data";
class ProductProvider extends Component {
    state = {
      products: [],
      detailProduct: detailProduct,
      cart: [],
      modalOpen: false,
      modalProduct: detailProduct,
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0
    };
    componentDidMount() {
      this.setProducts();
    }
  
     setProducts = () => {
      fetch('http://localhost:3002/')
              .then(res => res.json())
              .then(ish => this.setState({ products: ish }))
    };
  
    getItem = id => {
      const product = this.state.products.find(item => item.id === id);
      return product;
    };
    handleDetail = id => {
      const product = this.getItem(id);
      this.setState(() => {
        return { detailProduct: product };
      });
    };
    addToCart = id => {
      let tempProducts = [...this.state.products];
      const index = tempProducts.indexOf(this.getItem(id));
      const product = tempProducts[index];
      product.inCart = true;
      product.count = 1;
      const price = product.price;
      product.total = price;
  
      this.setState(() => {
        return {
          products: [...tempProducts],
          cart: [...this.state.cart, product],
          detailProduct: { ...product }
        };
      }, this.addTotals);
    };
    openModal = id => {
      const product = this.getItem(id);
      this.setState(() => {
        return { modalProduct: product, modalOpen: true };
      });
    };
    closeModal = () => {
      this.setState(() => {
        return { modalOpen: false };
      });
    };
    render() {
        return (
          <ProductContext.Provider
            value={{
              ...this.state,
              handleDetail: this.handleDetail,
              addToCart: this.addToCart,
              openModal: this.openModal,
              closeModal: this.closeModal,
              increment: this.increment,
              decrement: this.decrement,
              removeItem: this.removeItem,
              clearCart: this.clearCart
            }}
          >
            {this.props.children}
          </ProductContext.Provider>
        );
      }
    }
    
    const ProductConsumer = ProductContext.Consumer;
    
    export { ProductProvider, ProductConsumer };