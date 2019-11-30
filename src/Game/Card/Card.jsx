import React, { useState, useEffect } from 'react'
import './card.css'

const Card = ({ visible, flipped, value, onClick, shown }) => {
  const [className, setClassName] = useState()

  useEffect(() => {
    if (visible || flipped) {
      setClassName("card-text-visible")
    } else if (shown) {
      setClassName("card-text-shown")
    } else {
      if (className !== "card-text-shown") {
        setClassName("card-text-hidden")
      } else {
        setClassName("card-text")
      }
    }
  }, [shown, flipped, visible])

  return (
    <div className={`card ${visible && "card-visible"} ${flipped && "card-flipped"} ${shown && 'card-shown'}`} onClick={onClick}>
      <span className={`text ${className}`}>{value}</span>
    </div>
  )
}

export default Card