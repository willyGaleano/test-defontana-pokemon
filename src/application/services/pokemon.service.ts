import { PokemonSpecie } from '@application/models/pokemon-specie.model';
import { Pokemon, PokemonApiResponse } from '@application/models/pokemon.model';
import httpClient from '@infrastructure/http/http-client';

class PokemonService {
	async getPokemonsPaginated(
		offset: number,
		limit: number,
	): Promise<PokemonApiResponse> {
		const pokemons = await httpClient.instance.get<PokemonApiResponse>(
			`/pokemon?offset=${offset}&limit=${limit}`,
		);
		return pokemons.data;
	}

	async getPokemonByUrl(url: string): Promise<Pokemon> {
		const pokemon = await httpClient.instance.get<Pokemon>(url);
		return pokemon.data;
	}

	async getPokemonSpecies(url: string): Promise<PokemonSpecie> {
		const species = await httpClient.instance.get<PokemonSpecie>(url);
		return species.data;
	}
}

export default new PokemonService();
