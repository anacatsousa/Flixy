import Container from '../components/Container/Container';
import HomeList from '../components/HomeList';
import SearchResults from '../components/SearchResults';
import { useSearchContext } from '../context/useSearchContext';

function Home() {
	const { query } = useSearchContext();
	return (
		<>
			{query.length > 0 ? (
				<Container>
					<SearchResults />
				</Container>
			) : (
				<>
					<Container>
						<HomeList />
					</Container>
				</>
			)}
		</>
	);
}

export default Home;
