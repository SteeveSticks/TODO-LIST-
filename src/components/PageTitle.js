import React from 'react'
import style from '../styles/modules/title.module.scss'

const Pagetitle = ({children}) => {
  return (
    <div>
      <p className= {style.title}>{children}</p> 
    </div>
  )
}

export default Pagetitle