import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router';
import Card from './Card/Card';
import '../scss/components/_wrapper.scss';
import '../scss/pages/_loading.scss';
import SelectGenres from './SelectGenres/SelectGenres';

function MoviesList() {
	const [isLoading, setIsLoading] = useState(false);
	const [popularMovies, setPopularMovies] = useState([]);
	const [nowPlaying, setNowPlaying] = useState([]);
	const [topRated, setTopRated] = useState([]);
	const [upcoming, setUpcoming] = useState([]);

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

	// Now Playing

	useEffect(() => {
		const fetchNowPlaying = async () => {
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
				const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing`, options);
				const newNowPlaying = await data.json();

				console.log('newNowPlaying', newNowPlaying);

				setNowPlaying(newNowPlaying.results);
			} catch (error) {
				console.log('error', error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchNowPlaying();
	}, []);

	// Top Rated

	useEffect(() => {
		const fetchTopRated = async () => {
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
				const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated`, options);
				const newTopRated = await data.json();

				console.log('newTopRated', newTopRated);
				setTopRated(newTopRated.results);
			} catch (error) {
				console.log('error', error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchTopRated();
	}, []);

	// Airing Today

	useEffect(() => {
		const fetchAiringToday = async () => {
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
				const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming`, options);
				const newAiringToday = await data.json();

				console.log('newAiringToday', newAiringToday);
				setUpcoming(newAiringToday.results);
			} catch (error) {
				console.log('error', error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchAiringToday();
	}, []);

	if (isLoading === true) return <span className="loading">LOADING ....</span>;

	return (
		<>
			<div className="wrapper">
				<div className="wrapper__inicial">
					<h2 className="wrapper__title">Popular Movies</h2>
					<SelectGenres type="movie" />
				</div>
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
				<h2 className="wrapper__title">Now Playing</h2>
				<div className="wrapper__posters">
					{nowPlaying.map((moviePlaying) => (
						<Link to={`/movie/${moviePlaying.id}`} key={moviePlaying.id}>
							<Card
								img={`https://image.tmdb.org/t/p/w500${moviePlaying.poster_path}`}
								title={moviePlaying.title}
								year={new Date(moviePlaying.release_date)}
								stars={moviePlaying.vote_average}
								layout="flex"
							/>
						</Link>
					))}
				</div>
			</div>
			<div className="wrapper">
				<h2 className="wrapper__title">Top Rated</h2>
				<div className="wrapper__posters">
					{topRated.map((topRatedMovie) => (
						<Link to={`/movie/${topRatedMovie.id}`} key={topRatedMovie.id}>
							<Card
								img={`https://image.tmdb.org/t/p/w500${topRatedMovie.poster_path}`}
								title={topRatedMovie.title}
								year={new Date(topRatedMovie.release_date)}
								stars={topRatedMovie.vote_average}
								layout="flex"
							/>
						</Link>
					))}
				</div>
			</div>
			<div className="wrapper">
				<h2 className="wrapper__title">Airing Today</h2>
				<div className="wrapper__posters">
					{upcoming.map((upcomingMovie) => (
						<Link to={`/movie/${upcomingMovie.id}`} key={upcomingMovie.id}>
							<Card
								img={`https://image.tmdb.org/t/p/w500${upcomingMovie.poster_path}`}
								title={upcomingMovie.title}
								year={new Date(upcomingMovie.release_date)}
								stars={upcomingMovie.vote_average}
								layout="flex"
							/>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}

export default MoviesList;
