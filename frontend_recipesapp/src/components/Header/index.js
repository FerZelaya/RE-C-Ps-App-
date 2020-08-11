import React from 'react'
import './header.css'



export default (props)=>{
    return(
        <header>
            <h1 className="title">{props.title}</h1>
        </header>
    )
}