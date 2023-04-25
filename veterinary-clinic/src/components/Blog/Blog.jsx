import React from 'react'
import '../Blog/Blog.css'

const Blog = () => {
  return (
    <div className='ctn-blog'>
        <div className='blog-section'>
            <h1 className='blog-title'>Subscríbete a nuestro blog</h1>
            <div className='blog-add-data'>
                <input className='blog-input' placeholder='Ingresa tu dirección de correo electrónico'></input>
                <button className='blog-button'>Subscríbete</button>
            </div>
            
        </div>
      
    </div>
  )
}

export default Blog
