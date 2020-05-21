import React from 'react'

const UserOutput = (props) => { 
        return (
            <div>
                <p>Hi, this is {props.name}..</p>
                <p>I'm a cool person, I mean it.. Who am I again? Oh yeah.. I'm {props.name}</p>
            </div>
        )
}

export default UserOutput