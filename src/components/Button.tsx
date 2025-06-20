import React from 'react'

const Button = (props:any) => {
    const {btn, className,onClick} = props
  return (
    <div>
        <button 
        className={className}
        onClick={onClick}>{btn}</button>
    </div>
  )
}

export default Button