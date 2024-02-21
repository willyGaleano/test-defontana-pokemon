import { PokemonListSearch } from '@application/models/pokemon.model';
import pokemonService from '@application/services/pokemon.service';
import { useEffect, useState } from 'react';

export const useListPokemonSearch = () => {
	const [pokemonListSearch, setPokemonListSearch] = useState<
		PokemonListSearch[]
	>([]);

	useEffect(() => {
		(async () => {
			const pokemonsResp = await pokemonService.getPokemonsPaginated(0, 5000);
			const pokemonList = pokemonsResp.results.map((pokemon, index) => {
				return {
					id: index + 1,
					name: pokemon.name,
				};
			});
			setPokemonListSearch(pokemonList);
		})();
	}, []);

	return { pokemonListSearch };
};
