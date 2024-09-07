import React from 'react'

const Warning = ({warning}) => {
    
    if(!warning){
        return null;
    }
    
    return (
        <h2>
            AVISO!!!!
        </h2>
    )
}

export default Warning;
