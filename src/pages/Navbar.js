import React from 'react'
import "./style/navbar.css";
import header from "../assets/header.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  return (
    <section className="navbar">
      <img src={header} alt="" />
      <header>E-Commarce Site</header>
      <AiOutlineShoppingCart/>
    </section>
  )
}

export default Navbar
