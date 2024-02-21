import { FC } from 'react';
import { colorByType } from '@application/common/constants';
import { IconX } from '@tabler/icons-react';
import PokemonDetail from './pokemon-detail';
import usePokemonStore from '@application/store/pokemon.store';

const ModalPokemon: FC = () => {
	const { showModal, setShowDetailPokemon, pokemon } = usePokemonStore(
		(state) => ({
			showModal: state.showDetailPokemon,
			setShowDetailPokemon: state.setShowDetailPokemon,
			pokemon: state.pokemonDetail,
		}),
	);
	const onCloseModal = () => {
		setShowDetailPokemon(false);
	};

	return (
		<section
			className={`fixed lg:hidden top-0 left-0 right-0 h-screen transition-all duration-500 ${
				showModal ? 'visible opacity-100' : 'invisible opacity-0'
			} ${colorByType[pokemon?.id ? pokemon.types[0] : 'normal']}`}
		>
			<button
				onClick={onCloseModal}
				className='bg-white absolute top-4 right-4 p-1 rounded-lg 
                hover:opacity-80 transition-opacity'
			>
				<IconX size={34} stroke={4} />
			</button>
			<article
				className={`bg-white h-[85%] absolute w-full rounded-tl-3xl rounded-tr-3xl text-center transition-all duration-500 ${
					showModal ? 'bottom-0' : '-bottom-full'
				}`}
			>
				{pokemon?.id ? <PokemonDetail pokemon={pokemon} /> : null}
			</article>
		</section>
	);
};
export default ModalPokemon;
