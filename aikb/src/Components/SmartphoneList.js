import React from 'react'
import './SmartphoneList.css'

export const Smartphones = ({ smartphones }) => {
    return (
        <div id="SmartphoneList">
            <ul>
                {smartphones.map(item =>(
                    <li key={item.name}><a>{item.name}</a></li>
                ))}
            </ul>
        </div>
    )
}