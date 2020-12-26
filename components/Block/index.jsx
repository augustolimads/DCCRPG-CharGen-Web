import React from "react";
import Input from '../Input'

export default function Block(props) {
	return (
        <div 
            className={`flex flex-col justify-center items-center p-1 bg-gray-100 border-2 border-solid rounded-lg 
            ${props.className}`}
        >
			<span className='text-center text-xs font-semibold'>{props.label}</span>
			<Input placeholder={props.placeholder} className="w-full border-transparent bg-transparent"/>
		</div>
	);
}
