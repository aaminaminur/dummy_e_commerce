import React, { useState } from "react";
import Items from "./Items";
// import { Link } from "react-router-dom";
import "./SearchBar.css";

function SearchBar(props) {
    const [searchProduct, setSearchProduct] = useState("");
    const [resultProduct, setResultProduct] = useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        // const data = new FormData();
        // data.append("searchProduct", searchProduct);
        // console.log(searchProduct);
        await fetch(
            "http://localhost:9000/products/search?query=" + searchProduct,
            {
                method: "GET",
            }
        )
            .then(function (res) {
                return res.json();
            })
            .then(function (jsondata) {
                console.log(jsondata);
                setResultProduct(jsondata);
                console.log(resultProduct);
            })
            .catch(function (err) {
                console.log("Error is ", err);
            });
    };
    return (
        <div className="parentDiv">
            <div className="SearchBarContent">
                <div>
                    <div to="/products">
                        <p className="testEcommerce"> Dummy E-Com </p>
                    </div>
                </div>
                <div to="/products/search">
                    <div className="productSearch">
                        <input
                            type="text"
                            placeholder="Search Items"
                            onChange={(e) => setSearchProduct(e.target.value)}
                        />
                        {/* <button onClick={handleSubmit}>Browse Items</button> */}
                        <input
                            type="Submit"
                            name=""
                            onClick={handleSubmit}
                            value="Search"
                        />
                    </div>
                </div>
            </div>
            <div>
                {resultProduct.map((eachitem) => (
                    <Items
                        productImage={eachitem.productImage}
                        productName={eachitem.productName}
                        productPrice={eachitem.productPrice}
                        productDescription={eachitem.productDescription}
                        key={eachitem.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default SearchBar;
