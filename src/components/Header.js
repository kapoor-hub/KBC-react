import React from 'react'
import "./Header.css"
import {BrowserRouter, Link} from 'react-router-dom'

const header = () => {
  return (
    <div className='header'>
      <Link to="/" className='title'> Kaun Banega Crorepati </Link>
        </div>    
  )
}

export default header
