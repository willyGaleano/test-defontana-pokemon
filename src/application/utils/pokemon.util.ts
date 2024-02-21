import { PokemonSpecie } from '@application/models/pokemon-specie.model';
import {
	Ability,
	Pokemon,
	PokemonDetailResponse,
	Sprites,
	Stat,
	Type,
} from '@application/models/pokemon.model';

const formatStats = (stats: Stat[]) => {
	const nameTypes: Record<string, string> = {
		hp: 'HP',
		attack: 'ATK',
		defense: 'DEF',
		'special-attack': 'SpA',
		'special-defense': 'SpD',
		speed: 'SPD',
	};
	const newStats = stats.map(({ stat, base_stat }) => ({
		name: nameTypes[stat.name],
		base_stat,
	}));

	newStats.push({
		name: 'TOT',
		base_stat: newStats.reduce((acc, stat) => stat.base_stat + acc, 0),
	});

	return newStats;
};

const getImageByPokemon = (sprites: Sprites) => {
	return (
		sprites.versions['generation-v']['black-white'].animated.front_default ??
		sprites.versions['generation-v']['black-white'].front_default
	);
};

const formatTypes = (types: Type[]) => types.map((type) => type.type.name);

const formatAbilities = (abilities: Ability[]) =>
	abilities.map((ability) => ability.ability.name);

const getPokemonDescription = (pokemonSpecie: PokemonSpecie) =>
	pokemonSpecie?.flavor_text_entries[1]?.flavor_text;

const buildPokemonDetail = (
	pokemon: Pokemon,
	pokemonSpecies: PokemonSpecie,
) => {
	const pokemonDetail: PokemonDetailResponse = {
		id: pokemon.id,
		name: pokemon.name,
		height: pokemon.height,
		weight: pokemon.weight,
		stats: formatStats(pokemon.stats),
		types: formatTypes(pokemon.types),
		abilities: formatAbilities(pokemon.abilities),
		description: getPokemonDescription(pokemonSpecies),
		image: getImageByPokemon(pokemon.sprites),
	};
	return pokemonDetail;
};

const debounce = (callback: Function, delay: number) => {
	let timerId: NodeJS.Timeout;

	return (...args: any[]) => {
		clearTimeout(timerId);
		timerId = setTimeout(() => {
			callback(...args);
		}, delay);
	};
};

export {
	formatStats,
	formatTypes,
	formatAbilities,
	getPokemonDescription,
	getImageByPokemon,
	buildPokemonDetail,
	debounce,
};
