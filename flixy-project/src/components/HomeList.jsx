import { Link } from 'react-router';
import Card from './Card/Card';
import useMyList from '../hooks/MyList';
import '../scss/components/_wrapper.scss';
import '../scss/pages/_loading.scss';
import usePopularMovies from '../hooks/PopularMovies';
import usePopularSeries from '../hooks/PopularSeries';

function HomeList() {
	const { myList } = useMyList();
	const { popularMovies, isLoading: moviesLoading } = usePopularMovies();
	const { popularSeries, isLoading: seriesloading } = usePopularSeries();

	if (moviesLoading || seriesloading === true) return <span className="loading">LOADING ...</span>;

	return (
		<>
			{myList.length === 0 ? (
				''
			) : (
				<div className="wrapper">
					<h2 className="wrapper__title">My List</h2>
					<div className="wrapper__posters">
						{myList.map((list) => (
							<Link to={`/${list.media_type}/${list.id}`} key={list.id}>
								<Card
									img={`https://image.tmdb.org/t/p/w500${list.poster_path}`}
									title={list.title || list.name}
									year={new Date(list.release_date || list.first_air_date)}
									stars={list.vote_average}
									layout="flex"
								/>
							</Link>
						))}
					</div>
				</div>
			)}

			<div className="wrapper">
				<h2 className="wrapper__title">Popular Movies</h2>
				<div className="wrapper__posters">
					{popularMovies.map((popularMovie) => (
						<Link to={`/movie/${popularMovie.id}`} key={popularMovie.id}>
							<Card
								img={`https://image.tmdb.org/t/p/w500${popularMovie.poster_path}`}
								title={popularMovie.title}
								year={new Date(popularMovie.release_date)}
								stars={popularMovie.vote_average}
								layout="flex"
							/>
						</Link>
					))}
				</div>
			</div>
			<div className="wrapper">
				<h2 className="wrapper__title">Popular Series</h2>
				<div className="wrapper__posters">
					{popularSeries.map((popularSerie) => (
						<Link to={`/tv/${popularSerie.id}`} key={popularSerie.id}>
							<Card
								img={`https://image.tmdb.org/t/p/w500${popularSerie.poster_path}`}
								title={popularSerie.name}
								year={new Date(popularSerie.first_air_date)}
								stars={popularSerie.vote_average}
								layout="flex"
							/>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}

export default HomeList;
