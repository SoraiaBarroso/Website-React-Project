import React from 'react'
import "./Feature.css"
import {BsHexagon} from "react-icons/bs"

const Feature = ({icon, heading}) => {
  return (
    <div className='feature'>
        <div className='feature-icon'>
            <BsHexagon color='#00B0FF' size={55}/>
            <div className='inner-icon'>
                {icon}
            </div>
        </div>
        <div className='feature-text'>
            <h3>
                {heading}
            </h3>
            <p>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Nullam mollis leo at dapibus dictum.
                Ut posuere est erat, id semper dui ultricies at.
            </p>
        </div>
    </div>
  )
}

export default Feature
