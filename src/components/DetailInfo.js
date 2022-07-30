import React from "react";
import { formatPrice } from "../utils/numberFormat";
import AddToCart from "./AddToCart";
import Colors from "./Colors";
import ProductSize from "./ProductSize";
import Rating from "./Rating";
import StockAmount from "./StockAmount";
import "./style/detailinfo.css";

function DetailInfo({ details }) {
  const { name, category, rating, reviews, description, price ,color , stock,size} = details;


  return (
    <aside>
      <article>
        <h1>{name}</h1>
        <h3>{formatPrice(price)}</h3>
        <h6>{category}</h6>
      </article>
      <Rating rating={rating} reviews={reviews} />
      <hr />
      <article>
        <h5>Ürün Açıklaması</h5>
        <p>{description}</p>
      </article>
      <Colors color={color}/>
      <StockAmount stock={stock}/>
      <ProductSize size={size}/>
      <AddToCart/>
    </aside>
  );
}

export default DetailInfo;
