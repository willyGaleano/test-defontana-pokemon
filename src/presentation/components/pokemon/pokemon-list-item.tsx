import { FC, useEffect, useState } from 'react';
import { Pokemon } from '@application/models/pokemon.model';
import pokemonService from '@application/services/pokemon.service';

interface Props {
	pokemonURL: string;
	handleShowPokemon: (pokemon: Pokemon) => Promise<void>;
}

const PokemonListItem: FC<Props> = ({ pokemonURL, handleShowPokemon }) => {
	const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);
	useEffect(() => {
		(async () => {
			const pokemonResp = await pokemonService.getPokemonByUrl(pokemonURL);
			setPokemon(pokemonResp);
		})();
	}, []);

	return (
		<div
			className='bg-white rounded-xl shadow-md overflow-hidden transform 
    transition duration-500 hover:scale-105'
			onClick={async () => await handleShowPokemon(pokemon)}
		>
			<div>
				<img
					className=' w-full h-48 object-contain'
					src={pokemon?.sprites?.other['official-artwork'].front_default}
					alt={pokemon?.name}
				/>
				<span
					className='absolute top-0 right-0 bg-gray-900 text-white px-2 
        py-1 text-sm rounded-bl-lg'
				>
					#{pokemon?.id}
				</span>
			</div>
			<div className='p-4'>
				<div className='flex items-center justify-between'>
					<div>
						<h2 className='text-2xl font-bold text-gray-800 capitalize'>
							{pokemon?.name}
						</h2>
						{pokemon?.species && (
							<span className='text-sm text-gray-600'>
								({pokemon.species.name})
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PokemonListItem;
