import { useListPokemonSearch } from '@application/hooks/useListPokemonSearch';
import { FC } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

interface Props {
	handleChangePokemonName: (string: string, results: any) => void;
}

const Search: FC<Props> = ({ handleChangePokemonName }) => {
	const { pokemonListSearch } = useListPokemonSearch();

	const handleOnSelect = (item: any) => {
		handleChangePokemonName(item.name, item);
	};

	const formatResult = (item: any) => {
		return (
			<div className='sticky'>
				<span className='block'>{item.name}</span>
			</div>
		);
	};
	return (
		<div className='relative z-50'>
			<ReactSearchAutocomplete
				items={pokemonListSearch}
				onSearch={handleChangePokemonName}
				onSelect={handleOnSelect}
				autoFocus
				formatResult={formatResult}
			/>
		</div>
	);
};

export default Search;

/*
<form>
			<div className='relative'>
				<input
					className='w-full px-4 py-2 rounded-full text-lg 
                    placeholder-gray-500 border-2 border-gray-300 
                    focus:border-yellow-500 focus:outline-none transition-colors 
                    duration-300'
					type='text'
					placeholder='Search your Pokémon'
					name='pokemonName'
					onChange={handleChangePokemonName}
				/>
				<button
					type='button'
					className='absolute right-0 top-1/2 transform -translate-y-1/2 mr-3
                     text-yellow-500 hover:text-yellow-600 transition-colors duration-300'
				>
					<IconSearch className='w-6 h-6' />
				</button>
			</div>
		</form>
*/
