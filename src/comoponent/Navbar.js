import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from "../logo.png" ;
import styled from "styled-components";
import {ButtonContainer} from "./Button"

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" width="75" height="75" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
            Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
            <i className="fas fa-cart-plus"/> My Cart
            </span>
          </ButtonContainer>
        </Link>

      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
background: var(--mainDark);
.nav-link{
  color: var(--mainBlue)!important;
  font-size: 17px ;
  text-transform: uppercase ; 
}

`
