import { ChangeEvent, useState } from 'react';
import { usePokemon } from '@application/hooks/usePokemon';
import PokemonList from './pokemon-list';
import Search from '../search';
import { debounce } from '@application/utils/pokemon.util';

const Pokemons = () => {
	const {
		pokemons,
		handleShowPokemon,
		setPokemonName,
		setOffset,
		totalPages,
		limit,
	} = usePokemon();
	const [currentPage, setCurrentPage] = useState(1);

	const prevPage = () => {
		if (currentPage > 1) {
			const pageTemp = currentPage - 1;
			setOffset((pageTemp - 1) * limit);
			setCurrentPage(pageTemp);
		}
	};

	const nextPage = () => {
		if (currentPage < totalPages) {
			const pageTemp = currentPage + 1;
			setOffset((pageTemp - 1) * limit);
			setCurrentPage(pageTemp);
		}
	};
	const debouncedSetPokemonName = debounce((value: string) => {
		setPokemonName(value.trim().toLowerCase());
	}, 400);
	const handleChangePokemonName = (string: string, results: any) => {
		console.log({
			msg: 'handleOnSearch',
			results,
		});
		debouncedSetPokemonName(string);
	};
	return (
		<section className='relative'>
			<section className='p-4 py-5'>
				<Search handleChangePokemonName={handleChangePokemonName} />
				{pokemons?.results ? (
					<>
						<PokemonList
							pokemonsResult={pokemons.results}
							handleShowPokemon={handleShowPokemon}
						/>
						<div className='flex justify-center mt-8'>
							<button
								className='bg-yellow-500 hover:bg-yellow-600
							 text-gray-800 font-bold py-2 px-4 rounded-l'
								onClick={prevPage}
								disabled={currentPage === 1}
							>
								Previous
							</button>
							<span
								className='bg-yellow-500 text-gray-800 font-bold 
						py-2 px-4'
							>
								{currentPage} of {totalPages}
							</span>
							<button
								className='bg-yellow-500 hover:bg-yellow-600
							 text-gray-800 font-bold py-2 px-4 rounded-r'
								onClick={nextPage}
								disabled={currentPage === totalPages}
							>
								Next
							</button>
						</div>
					</>
				) : (
					<div className='text-center mt-10'>
						<p className='text-2xl font-bold'>Loading...</p>
					</div>
				)}
			</section>
		</section>
	);
};

export default Pokemons;
