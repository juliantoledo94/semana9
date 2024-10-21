import React from 'react'

const Button = ({handleClick, color, text}) => {
  return (
    <button onClick={handleClick} className={"btn btn-" + color}>{text}</button>
  )
}

export default Button