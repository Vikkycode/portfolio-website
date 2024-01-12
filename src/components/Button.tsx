import React from 'react'

const Button = (props:any) => {
    const {btn, className} = props
  return (
    <div>
        <button className={className}>{btn}</button>
    </div>
  )
}

export default Button