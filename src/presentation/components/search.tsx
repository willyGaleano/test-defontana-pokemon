import { IconSearch } from '@tabler/icons-react';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

interface Props {
	handleChangePokemonName: (string: string, results: any) => void;
}

const Search: FC<Props> = ({ handleChangePokemonName }) => {
	const items = [
		{
			id: 0,
			name: 'Cobol',
		},
		{
			id: 1,
			name: 'JavaScript',
		},
		{
			id: 2,
			name: 'Basic',
		},
		{
			id: 3,
			name: 'PHP',
		},
		{
			id: 4,
			name: 'Java',
		},
	];

	const handleOnSearch = (string: string, results: any) => {
		// onSearch will have as the first callback parameter
		// the string searched and for the second the results.
		console.log({
			msg: 'handleOnSearch',
			string,
			results,
		});
	};

	const handleOnHover = (result: any) => {
		// the item hovered
		console.log({
			msg: 'handleOnHover',
			result,
		});
	};

	const handleOnSelect = (item: any) => {
		// the item selected
		console.log({
			msg: 'handleOnSelect',
			item,
		});
	};

	const handleOnFocus = () => {
		console.log({
			msg: 'handleOnFocus',
		});
	};

	const formatResult = (item: any) => {
		return (
			<div className='sticky fixed'>
				<span className='block'>{item.name}</span>
			</div>
		);
	};
	return (
		<div>
			<ReactSearchAutocomplete
				items={items}
				onSearch={handleOnSearch}
				onHover={handleOnHover}
				onSelect={handleOnSelect}
				onFocus={handleOnFocus}
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
