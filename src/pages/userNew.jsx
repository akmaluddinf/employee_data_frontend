import React from 'react';

export default function UserDetail(){
    function handleClick(){
        console.log('saving')
    }

    return(
        <div>
            <input type="text" />
            <button onClick={handleClick}>Save</button>
        </div>
    )
}