import { FC } from 'react';
import PokemonListItem from './pokemon-list-item';
import { Pokemon, PokemonResult } from '@application/models/pokemon.model';

interface Props {
	pokemonsResult: PokemonResult[];
	handleShowPokemon: (pokemon: Pokemon) => Promise<void>;
}

const PokemonList: FC<Props> = ({ pokemonsResult, handleShowPokemon }) => {
	return (
		<section
			className='pt-14 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] 
    gap-4 gap-y-14'
		>
			{pokemonsResult.map((result) => (
				<PokemonListItem
					key={result.url}
					pokemonURL={result.url}
					handleShowPokemon={handleShowPokemon}
				/>
			))}
		</section>
	);
};

export default PokemonList;
