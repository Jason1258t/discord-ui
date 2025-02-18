import React from 'react'
import './styles.css'

const TextField = ({onChange, type, value, about}) => {
  return (
    <div className={type}>
      <p className="about">{about}</p>
      <input className='base-textfield' type={type} value={value} onChange={onChange}/>
    </div>
  )
}

export default TextField