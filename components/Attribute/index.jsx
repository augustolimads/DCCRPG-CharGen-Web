import React from "react";
import Input from "../Input";

export default function Attr(props) {
	return (
		<div 
			className="flex flex-col justify-center items-center p-2 border-2 border-solid border-blue-600 rounded-lg bg-gray-200"
		>
			<div 
				className="flex w-full justify-between space-x-2"
			>
				<p className="text-center text-sm font-semibold">
					{props.label}
				</p>

				<span className="px-2"> -3 </span>
			</div>
			<Input
				placeholder={props.placeholder}
				className="text-center w-full border-transparent bg-transparent"
			/>
		</div>
	);
}
