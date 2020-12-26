import React from "react";
import Block from "../Block";

export default function index() {
	return (
		<div className="flex justify-between">
			<Block className="flex-grow w-20" label="Arma" placeholder="Arma" />
			<Block className="flex-none w-20" label="dano" placeholder="Arma" />
			<Block className="flex-none w-20" label="alncance" placeholder="Arma" />
		</div>
	);
}
