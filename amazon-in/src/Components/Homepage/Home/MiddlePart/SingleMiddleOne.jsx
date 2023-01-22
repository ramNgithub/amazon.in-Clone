import React from 'react'
import style from "./MiddleOne.module.css"

const SingleMiddleOne = (el) => {
    const Price=(el.price*80)
  return (
    <div className={style.SingleCard}>
        <img src={el.thumbnail} alt="Not-Found" />
        <p>{el.description}</p>
        <div>
        <p>₹ {Price}</p>
        </div>
    </div>
  )
}

export default SingleMiddleOne