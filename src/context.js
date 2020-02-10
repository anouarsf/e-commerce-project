import React, { Component } from 'react';
import {storeProducts, detailProduct} from "./data";

const ProductContext = React.createContext();
//Provider
//Consumer

 class ProductProvider extends Component {
   state = {
     products: storeProducts,
     detailProduct: detailProduct
   }

   handleDetail = () => {
     console.log('hi from details');
   }

   addToCart = () => {
     console.log('hi from add to cart');
   }
  render() {
    return (
      <ProductContext.Provider value= {{...this.state, 
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer ;
export { ProductProvider, ProductConsumer };