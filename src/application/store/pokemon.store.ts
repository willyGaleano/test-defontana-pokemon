import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';
import {
	Pokemon,
	PokemonApiResponse,
	PokemonDetailResponse,
} from '@application/models/pokemon.model';
import pokemonService from '@application/services/pokemon.service';
import { buildPokemonDetail } from '@application/utils/pokemon.util';

type PokemonState = {
	pokemons: PokemonApiResponse;
	loadingSelected: boolean;
	pokemonDetail: PokemonDetailResponse | null;
	showDetailPokemon: boolean;
};

type PokemonActions = {
	setPokemons: (pokemons: PokemonApiResponse) => void;
	setPokemonDetail: (pokemon: Pokemon) => Promise<void>;
	setLoadingSelected: (loading: boolean) => void;
	setShowDetailPokemon: (show: boolean) => void;
};

const initialState: PokemonState = {
	pokemons: {} as PokemonApiResponse,
	pokemonDetail: null,
	loadingSelected: false,
	showDetailPokemon: false,
};

const usePokemonStore = createWithEqualityFn<PokemonState & PokemonActions>(
	(set) => ({
		...initialState,
		setPokemons: (pokemons) => set({ pokemons }),
		setPokemonDetail: async (pokemon: Pokemon) => {
			set({ loadingSelected: true });
			const pokemonSpecies = await pokemonService.getPokemonSpecies(
				pokemon.species.url,
			);
			const pokemonDetail = buildPokemonDetail(pokemon, pokemonSpecies);
			set({ pokemonDetail });
			set({ showDetailPokemon: true });
			setTimeout(() => {
				set({ loadingSelected: false });
			}, 350);
		},
		setLoadingSelected: (loading) => set({ loadingSelected: loading }),
		setShowDetailPokemon: (show) => set({ showDetailPokemon: show }),
	}),
	shallow,
);

export default usePokemonStore;
