import Aside from '@presentation/components/aside';
import ModalPokemon from '@presentation/components/pokemon/pokemon-modal';
import Pokemons from '@presentation/components/pokemon/pokemons';
import Search from '@presentation/components/search';

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
