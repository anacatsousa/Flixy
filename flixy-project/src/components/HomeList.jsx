import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router';
import Card from './Card/Card';
import useMyList from '../hooks/MyList';
import '../scss/components/_wrapper.scss';
import '../scss/pages/_loading.scss';

function HomeList() {
	const [isLoading, setIsLoading] = useState(false);
	const [popularMovies, setPopularMovies] = useState([]);
	const [popularSeries, setPopularSeries] = useState([]);
	const { myList } = useMyList();

	// Popular Movies

	useEffect(() => {
		const fetchPopularMovies = async () => {
			const options = {
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjU4M2ZhNDIwOTlmNTgwOTFhMzg5YmEzYzA1NjIwZiIsIm5iZiI6MTc1NDA4MjI1My41MDEsInN1YiI6IjY4OGQyYmNkMGQwNmQ2ZmMzYTExY2ZjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aaG6bNSR5S46iZYs5gJAKG1RahRTnrOy22d3mH6y9OU', // Replace with your Bearer token
				},
			};

			setIsLoading(true);

			try {
				const data = await fetch(`https://api.themoviedb.org/3/movie/popular`, options);
				const newPopularMovies = await data.json();

				console.log('newPopularMovies', newPopularMovies);

				setPopularMovies(newPopularMovies.results);
			} catch (error) {
				console.log('error', error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchPopularMovies();
	}, []);

	// Popular Series

	useEffect(() => {
		const fetchPopularSeries = async () => {
			const options = {
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjU4M2ZhNDIwOTlmNTgwOTFhMzg5YmEzYzA1NjIwZiIsIm5iZiI6MTc1NDA4MjI1My41MDEsInN1YiI6IjY4OGQyYmNkMGQwNmQ2ZmMzYTExY2ZjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aaG6bNSR5S46iZYs5gJAKG1RahRTnrOy22d3mH6y9OU', // Replace with your Bearer token
				},
			};

			setIsLoading(true);

			try {
				const data = await fetch(`https://api.themoviedb.org/3/tv/popular`, options);
				const newPopularSeries = await data.json();

				console.log('newPopularSeries', newPopularSeries);

				setPopularSeries(newPopularSeries.results);
			} catch (error) {
				console.log('error', error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchPopularSeries();
	}, []);

	if (isLoading === true) return <span className="loading">LOADING ....</span>;

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
