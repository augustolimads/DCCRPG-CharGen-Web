import Section from "../../components/Section";
import Block from "../../components/Block";

export default function Equipment({ className }) {
	return (
		<Section className={className}>
			<div>
				<Block
					className="w-full"
					label="Capacidade de carga"
					placeholder="0"
				/>
			</div>
			<div className="flex justify-between">
				<Block
					label="cobre"
					placeholder="0"
				/>
				<Block
					label="prata"
					placeholder="0"
				/>
				<Block
					label="ouro"
					placeholder="0"
				/>
				<Block
					label="eletrum"
					placeholder="0"
				/>
				<Block
					label="platina"
					placeholder="0"
				/>
			</div>
			<div>
				<Block
					className="w-full"
					label="Equipamentos"
					placeholder="digite aqui suas notas"
				/>
			</div>
		</Section>
	);
}
