import React from "react";
import "./Cart.css";


export default function Cart(props) {
    return (
        <div className="cart-wrapper">
            <span className="quantity">{props.quantity}</span>
            <p>Cart</p>
        </div>
    );
}