import React from "react";
import "./Items.css";

const Items = (props) => {
    return (
        <div className="productComponent">
            <div>Product Image: {props.productImage}</div>
            <div>Product Name: {props.productName}</div>
            <div>Price: {props.productPrice}</div>
            <div>Description: {props.productDescription}</div>
        </div>
    );
};
export default Items;
