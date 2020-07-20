import React from 'react'

const UserInput = (props) => { 
    const style = { 
        border: '2px solid purple' 

    };
    return (
        <div className="user-input">
            <input  
            style={style}
            type="text" 
            value={props.name} 
            onChange={props.changed}>
            </input>
        </div>
    );
}

export default UserInput