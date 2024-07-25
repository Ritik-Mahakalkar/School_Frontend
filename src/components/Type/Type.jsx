import React from 'react'
import './Type.css'

import { assets } from '../../assets/assets';
const Type = () => {
  return (
    <div>
        <div className="type-container">
            <div className="partA">
                <div className="part-image">
                    <img src={assets.teacher1} alt="" />
                </div>
                <p>Kindergarden</p>

            </div>
            <div className="partB">
            <div className="part-image">
                    <img src={assets.teacher1} alt="" />
                </div>
                <p>Primary</p>

            </div>
            <div className="partC">
            <div className="part-image">
                    <img src={assets.teacher1} alt="" />
                </div>
                <p>Middle</p>

            </div>
            <div className="partD">
            <div className="part-image">
                    <img src={assets.teacher1} alt="" />
                </div>
                <p>Secondary/Sineor Secondary</p>

            </div>
            
        </div>
      
    </div>
  )
}

export default Type
