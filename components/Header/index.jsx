import React from "react";

export default function Header() {
	return (
		<header className="fixed bg-gray-200 w-screen p-2 md:px-8 flex flex-col sm:flex-row justify-between items-center space-x-2 space-y-2 text-xs">
				<select className="px-4 py-2 w-72">
					<option>Falkor</option>
				</select>
				<div className="space-x-2 flex">
					<button className="bg-black text-white py-2 px-4">
						Novo personagem
					</button>
					<button className="bg-red-600 text-white py-2 px-4">
						Deletar
					</button>
				</div>
		</header>
	);
}
