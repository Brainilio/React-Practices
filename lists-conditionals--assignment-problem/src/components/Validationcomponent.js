import React from 'react'

export default function Validationcomponent(props) {

    let LongOrShort = null

    if(props.validation < 5) { 
        LongOrShort = ( 
            <p>Text too short</p>
        )
    } else { 
        LongOrShort = (
            <p>Text long enough</p>
        )
    }



    return (
        <div>
            {LongOrShort}
        </div>
    )
}
