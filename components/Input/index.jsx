import React from 'react'

export default function Input(props) {
    return (
        <input 
            {...props}
            className={`max-w-full border-2 border-solid rounded-lg text-center px-1 ${props.className}`}
        />
    )
}
