import React from 'react'
import './styles.css'

const TextField = ({onChange, type, value}) => {
  return (
    <input className='base-textfield' type={type} value={value} onChange={onChange}/>
  )
}

export default TextField