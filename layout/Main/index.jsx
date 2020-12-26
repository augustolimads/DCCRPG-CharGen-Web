import Section from '../../components/Section'
import Input from '../../components/Input'
import Block from '../../components/Block'
import Attr from '../../components/Attribute'

export default function Main({className}) {
	return (
		<Section className={className}>
			<div className="grid grid-cols-2 gap-1">
				<Input
					placeholder="Nome"
					className="border-yellow-600 bg-gray-100"
				/>
				<Input
					placeholder="Classe e nível"
					className="border-yellow-600 bg-gray-100"
				/>
			</div>

			<div className="flex justify-around space-x-1">
				<Block
					className="flex-grow border-green-600"
					label="Dado de ação"
					placeholder="0"
				/>
				<Block
					className="flex-none w-20 border-green-600"
					label="XP"
					placeholder="0"
				/>
			</div>

			<div className="grid grid-cols-2 border-2 border-solid border-blue-800 rounded-lg bg-gray-300 p-1 gap-1">
				<Attr label="Força" placeholder="0" />
				<Attr label="Personalidade" placeholder="0" />
				<Attr label="Agilidade" placeholder="0" />
				<Attr label="Sorte" placeholder="0" />
				<Attr label="Vigor" placeholder="0" />
				<Attr label="Inteligência" placeholder="0" />
			</div>

			<div className="grid grid-cols-3 gap-1">
				<Block
					className="border-yellow-400"
					label="Fortitude"
					placeholder="0"
				/>
				<Block
					className="border-yellow-400"
					label="Reflexos"
					placeholder="0"
				/>
				<Block
					className="border-yellow-400"
					label="Vontade"
					placeholder="0"
				/>
			</div>

			<div className="flex justify-around space-x-1">
				<Block
					className="flex-grow border-green-300"
					label="Augúrio"
					placeholder="0"
				/>
				<Block
					className="w-20 flex-none border-green-300"
					label="Bônus"
					placeholder="0"
				/>
			</div>
		</Section>
	);
}
