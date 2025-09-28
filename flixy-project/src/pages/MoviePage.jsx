import Container from '../components/Container/Container';
import useDetails from '../hooks/Details';
import useLogos from '../hooks/Logos';
import Hero from '../components/Hero/Hero';
import Overview from '../components/Overview/Overview';
import Tabs from '../components/Tabs/Tabs';
import useCredits from '../hooks/Credits';
import SearchResults from '../components/SearchResults';
import { useSearchContext } from '../hooks/useSearchContext';
import '../scss/pages/_loading.scss';

function Movie() {
	const { details, isLoading: loadingDetails } = useDetails('movie');
	const { logo, isLoading: loadingLogos } = useLogos('movie');
	const { credits, isLoading: loadingCredits } = useCredits('movie');

	const { query } = useSearchContext();

	if (loadingDetails || loadingLogos || loadingCredits) {
		return <span className="loading">LOADING...</span>;
	}

	if (!details) {
		return <p className="loading">LOADING...</p>;
	}

	const bgImage = {
		backgroundImage: `
			linear-gradient(70deg, rgba(20, 20, 20, 1), rgba(20, 20, 20, 0) 90% ), 
			linear-gradient(to top, rgba(20, 20, 20, 1), rgba(20, 20, 20, 0) 150px),
			url(https://image.tmdb.org/t/p/original${details.backdrop_path})
			`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		width: '100%',
		height: '75dvh',
	};
	return (
		<>
			{query.length > 0 ? (
				<Container>
					<SearchResults />
				</Container>
			) : (
				<>
					<div style={bgImage}>
						<Container>
							<Hero details={details} logo={logo} />
						</Container>
					</div>
					<Container>
						<Overview details={details} />
						<Tabs credits={credits} genresId={details.genres} type="movie" id={details.id} />
					</Container>
				</>
			)}
		</>
	);
}

export default Movie;
