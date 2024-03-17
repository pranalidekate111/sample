import React from 'react'

function Comp({text, color, textColor = "black"}) {
  return (
    <div className='div' style={{backgroundColor: color, color: textColor}}>{text}</div>
  )
}

export default Comp