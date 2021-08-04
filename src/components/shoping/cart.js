import React, { useState } from "react";
import Header from "../Header";
import { Footer } from "../Footer";
import "./style.css";
import Product from "../../Jsonfiles/products";
const Cart = () => {
  const [cart, setCart] = useState(Product);
  return (
    <>
      <Header />
      <div className="container">
        <ul className="p-0">
          {cart.map((curelem) => {
            const { id, title, description, price, img, amount } = curelem;
            return (
              <li className="cart_inner">
                <figure>
                  <img src={img} alt="" />
                </figure>
                <div className="cart_info">
                  <h6>{title} </h6>
                </div>
                <div className="values">
                  <button>+</button>
                  <input type="text" name="" />
                  <button>-</button>
                </div>
                <div className="price">
                  <p>{price} </p>
                </div>
                <button className="cros">+</button>
              </li>
            );
          })}
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
