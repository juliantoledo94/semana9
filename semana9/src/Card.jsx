import React from 'react'

const Card = ({title, children}) => {
  return (
    <div>
        <h4>{title}</h4>
        {children}
        
    </div>
  )
}

export default Card