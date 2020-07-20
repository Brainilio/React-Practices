import React from 'react'

export default function Charcomponent(props) {
    
    const style = {
        display: 'inline-block',
        padding: '16px', 
        textAlign: 'center', 
        margin: '16px', 
        border: '1px solid black' 
    }

    return (
        <div onClick={props.click} style={style} className="parent-div-for-letters"> 
        {props.letter} 
        </div>
    )
}
