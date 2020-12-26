import Section from "../../components/Section";
import Block from "../../components/Block";

export default function Details({ className }) {
	return (
		<Section className={className}>
			<div className="flex justify-around space-x-1">
				<Block
					className="flex-grow"
					label="Ocupação"
					placeholder="Ocupação"
				/>
				<Block
					className="flex-none w-24"
					label="Alinhamento"
					placeholder="neutro"
				/>
			</div>
			<div>
				<Block
					className="w-full"
					label="Proficiências"
					placeholder="neutro"
				/>
			</div>
			<div>
				<Block
					className="w-full"
					label="Línguas conhecidas"
					placeholder="neutro"
				/>
			</div>
			<div>
				<Block
					className="w-full"
					label="Notas/Magias"
					placeholder="digite aqui suas notas"
				/>
			</div>
		</Section>
	);
}
