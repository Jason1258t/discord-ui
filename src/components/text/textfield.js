import React from 'react'
import './styles.css'

const TextField = ({onChange, type, value, about}) => {
  return (
    <div style={{justifyContent: 'left', minWidth: '100%'}}>
      <p className="about">{about}</p>
      <input className='base-textfield' type={type} value={value} onChange={onChange}/>
    </div>
  )
}

export default TextField