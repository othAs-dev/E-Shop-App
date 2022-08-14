import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../FloatingCart/shopping-cart.svg";
import "./FloatingCart.css";
import { useSelector } from "react-redux";
const FloatingCart = () => {
  const shoppingCart = useSelector((state) => state);

  let totalItem = 0;

  for (const item of shoppingCart.cart) {
    totalItem += item.quantity;
  }

  return (
    <Link to="/shoppingCart">
      <div className="floating-cart">
        <p>Votre panier</p>
        <div className="img-notif-container">
          <img src={cartIcon} alt="icone caddie" />
          <span className="notif">{totalItem}</span>
        </div>
      </div>
    </Link>
  );
};

export default FloatingCart;
