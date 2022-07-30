import React, { useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import "./style/amount.css"
function StockAmount({stock}) {
    const [amount,setAmount] = useState(1);
    const increase = () => {
        setAmount((oldAmount) => {
            let newAmount = oldAmount + 1;
            if (newAmount > stock) {
                newAmount = stock
            };
            return newAmount
        });
    };
    const decrease = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount -1;
            if (tempAmount < 1) {
              tempAmount = 1
            }
            return tempAmount
          })
    }
  return (
    <section className='amount'>
      <button onClick={decrease}><AiOutlineMinus/></button>
      <h5>{amount}</h5>
      <button onClick={increase}><AiOutlinePlus/></button>
      <p>(Stock Amount : {stock})</p>
    </section>
  )
}

export default StockAmount
