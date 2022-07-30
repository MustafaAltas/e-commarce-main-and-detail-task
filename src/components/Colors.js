import React, { useState } from "react";
import "./style/colors.css";
import { FaCheck } from "react-icons/fa";

function Colors({ color }) {
  const [selectColor, setSelectColor] = useState(color[0]);

  return (
    <section className="colors">
        <p>Color : </p>
      {color?.map((item, index) => {
        return (
          <button className={`${selectColor === item ? "color-btn active" : "color-btn"}`} style={{backgroundColor:item}} onClick={() => setSelectColor(item)} key={index}>
            <FaCheck />
          </button>
        );
      })}
    </section>
  );
}

export default Colors;
