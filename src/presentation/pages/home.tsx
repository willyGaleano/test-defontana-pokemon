import Aside from '@presentation/components/aside';
import ModalPokemon from '@presentation/components/pokemon/pokemon-modal';
import Pokemons from '@presentation/components/pokemon/pokemons';

const Home = () => {
	return (
		<>
			<Pokemons />
			<Aside />
			<ModalPokemon />
		</>
	);
};

export default Home;
