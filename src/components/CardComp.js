import React from "react";
import "./style/card.css";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/numberFormat";

function CardComp({ product }) {
  const { id, image, price, name } = product;
  return (
    <div
      className="card"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <img src={image[0].url} alt="" />
      <Link to={`/details/${id}`} className="link">
        <FiSearch />
      </Link>
      <footer>
        <h4>{name}</h4>
        <p>{formatPrice(price)}</p>
      </footer>
    </div>
  );
}

export default CardComp;
