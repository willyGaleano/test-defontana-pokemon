import { useEffect, useState } from 'react';
import { Pokemon } from '@application/models/pokemon.model';
import pokemonService from '@application/services/pokemon.service';
import usePokemonStore from '@application/store/pokemon.store';

export const usePokemon = () => {
	const limit = 15;
	const { pokemons, setPokemons, setPokemonDetail } = usePokemonStore(
		(state) => ({
			pokemons: state.pokemons,
			setPokemons: state.setPokemons,
			setPokemonDetail: state.setPokemonDetail,
		}),
	);
	const [offset, setOffset] = useState(0);
	const [totalPokemons, setTotalPokemons] = useState(0);
	const [pokemonName, setPokemonName] = useState('');
	const [totalPages, setTotalPages] = useState(Math.ceil(pokemons?.count / 20));

	useEffect(() => {
		(async () => {
			if (pokemonName) {
				const pokemonsResp = await pokemonService.getPokemonsPaginated(
					0,
					totalPokemons,
				);
				const filteredPokemons = {
					...pokemonsResp,
					results: pokemonsResp.results.filter((pokemon) =>
						pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()),
					),
				};
				setPokemons(filteredPokemons);
				setTotalPokemons(filteredPokemons.count);
				setTotalPages(Math.ceil(filteredPokemons.count / limit));
				return;
			}

			const pokemonsResp = await pokemonService.getPokemonsPaginated(
				offset,
				limit,
			);
			setTotalPokemons(pokemonsResp.count);
			setTotalPages(Math.ceil(pokemonsResp.count / limit));
			setPokemons(pokemonsResp);
		})();
	}, [pokemonName, offset]);

	const handleShowPokemon = async (pokemon: Pokemon) => {
		await setPokemonDetail(pokemon);
	};

	return {
		pokemons,
		handleShowPokemon,
		setPokemonName,
		setOffset,
		totalPokemons,
		totalPages,
		limit,
	};
};
