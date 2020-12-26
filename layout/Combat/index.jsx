import Section from '../../components/Section'
import Block from '../../components/Block'
import Weapon from '../../components/Weapon'

export default function Combat({className}) {
	return (
		<Section className={className}>
			<div className="grid grid-cols-3">
				<Block label="Iniciativa" placeholder="0" />
				<Block label="CA" placeholder="0" />
				<Block label="PV" placeholder="0" />
			</div>

			<div className="grid grid-cols-3">
				<Block label="Ataque" placeholder="0" />
				<Block label="Crítico" placeholder="0" />
				<Block label="Falha" placeholder="0" />
			</div>

			<div>
				<Block label="Jogada de conjuração" placeholder="d20+1+1" />
			</div>

			<div>
				<Weapon />
				<Weapon />
				<Weapon />
			</div>

			<div className="grid grid-cols-2">
				<Block label="Armadura" placeholder="nome e CA" />
				<Block label="escudo" placeholder="nome e CA" />
			</div>
		</Section>
	);
}
