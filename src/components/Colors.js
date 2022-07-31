import React, { useState } from "react";
import "./style/colors.css";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:0.5rem;
`
function Colors({ color }) {
  const [selectColor, setSelectColor] = useState(color[0]);

  return (
    <Wrapper>
        <p>Color : </p>
      {color?.map((item, index) => {
        return (
          <button className={`${selectColor === item ? "color-btn active" : "color-btn"}`} style={{backgroundColor:item}} onClick={() => setSelectColor(item)} key={index}>
            <FaCheck />
          </button>
        );
      })}
    </Wrapper>
  );
}

export default Colors;
