import { Link } from 'react-router';
import Card from './Card/Card';
import poster from '../assets/poster.svg';
import '../scss/components/_wrapper.scss';
import '../scss/pages/_loading.scss';
import { useSearchContext } from '../hooks/useSearchContext';

function SearchResults() {
	const { query, search, isLoading } = useSearchContext();

	if (isLoading === true) return <span className="loading">LOADING ....</span>;

	return (
		<>
			{query && (
				<div className="wrapper">
					<h2 className="wrapper__title">Search</h2>
					<div className="wrapper__posters--grid">
						{query && search.length === 0 && <p>No results</p>}
						{search.map((list) => (
							<Link to={`/${list.media_type}/${list.id}`} key={list.id}>
								<Card
									img={list.poster_path === null ? poster : `https://image.tmdb.org/t/p/w500${list.poster_path || list.known_for.poster_path}`}
									title={list.title || list.name}
									year={new Date(list.release_date || list.first_air_date)}
									stars={list.vote_average}
									layout="grid"
								/>
							</Link>
						))}
					</div>
				</div>
			)}
		</>
	);
}

export default SearchResults;
