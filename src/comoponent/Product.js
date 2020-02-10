import React, { Component } from 'react';
import styled from "styled-components" ;
import {Link} from "react-router-dom" ;
import { ProductConsumer } from "../context";



export default class Product extends Component {
  render() {
const {id, title, img, price, inCart} = this.props.product ;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
<div className="img-container p-1" onClick>
  <Link to="/details">
    <img src={img} alt="product" className="card-img-top"/>
  </Link>
  <button className="cart-btn" disabled={inCart ? true : false} onClick ={ () => {console.log
  ('added to the cart');}}>
  {inCart ? (<p className="text-capitalize mb-0" disabled>
 {" "} in Cart
  </p>) : (<i className="fas fa-cart-plus "/>)}
</button>
<div className="card-footer d-flex justify-content-between">
  <p className="align-self-center mb-0">
{title}
  </p>
  <h3 className="text-blue font-italic mb-0">
<span className="mr-1"> $
</span>
{price}

  </h3>
</div>
</div>
        </div>
      </ProductWrapper>
    );
  }
}


const ProductWrapper = styled.div `
.card{
  border-color : var(--mainYellow);
  border-radius: 5px;
  transition: all 1s linear;
}
.card-footer{
  background: transparent;
  border-top: transparent;
  transition: all 0.5s linear;
}
&:hover{
  .card{
    border: 1px solid rbga(0,0,0,0.2);
    box-shadow : 2px 2px 5px 0px rgba(0,0,0,5);

  }
  .card-footer{
    background: rgba(247,247,247);
  }
}
.img-container{
  position: relative;
  overflow: hidden;
}
.img-container:hover .card-img-top{
margin-botton: 3px;
}
.cart-btn{
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 40px 220px 70px 80px;
  border: none;
  background: transparent ;
  border-radius : 35px;
  color: var(--mainRed) ;
  transform: translate(100%, 100%);
  transition: all 0.5s linear;
}
.img-container:hover .cart-btn {
  transform: translate(0, 0);
  border-color: none;
}
`;