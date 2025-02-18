import React from 'react'
import './styles.css'

const TextField = ({onChange, type, value, about, placeholder}) => {
  return (
    <div style={{alignContent: 'left', minWidth: '100%'}}>
      <p className="about">{about}</p>
      <input className='base-textfield' type={type} value={value} onChange={onChange} placeholder={placeholder}/>
    </div>
  )
}

export default TextField