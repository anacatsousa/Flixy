import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router';
import Card from './Card/Card';
import '../scss/components/_wrapper.scss';
import '../scss/pages/_loading.scss';
import SelectGenres from './SelectGenres/SelectGenres';
import usePopularSeries from '../hooks/PopularSeries';

function SeriesList() {
	const [isLoading, setIsLoading] = useState(false);
	const [topRated, setTopRated] = useState([]);
	const [onTheAir, setOnTheAir] = useState([]);
	const [airingToday, setAiringToday] = useState([]);

	// Popular Series

	const { popularSeries, isLoading: seriesloading } = usePopularSeries();

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
				const data = await fetch(`https://api.themoviedb.org/3/tv/top_rated`, options);
				const newTopRated = await data.json();

				//console.log('newTopRated', newTopRated);
				setTopRated(newTopRated.results);
			} catch (error) {
				console.error('error', error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchTopRated();
	}, []);

	// On The Air

	useEffect(() => {
		const fetchOnTheAir = async () => {
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
				const data = await fetch(`https://api.themoviedb.org/3/tv/on_the_air`, options);
				const newOnTheAir = await data.json();

				//console.log('newOnTheAir', newOnTheAir);

				setOnTheAir(newOnTheAir.results);
			} catch (error) {
				console.error('error', error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchOnTheAir();
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
				const data = await fetch(`https://api.themoviedb.org/3/tv/airing_today`, options);
				const newAiringToday = await data.json();

				//console.log('newAiringToday', newAiringToday);
				setAiringToday(newAiringToday.results);
			} catch (error) {
				console.error('error', error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchAiringToday();
	}, []);

	if (isLoading || seriesloading === true) return <span className="loading">LOADING ....</span>;

	return (
		<>
			<div className="wrapper">
				<div className="wrapper__inicial">
					<h2 className="wrapper__title">Popular Series</h2>
					<SelectGenres type="tv" />
				</div>
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
			<div className="wrapper">
				<h2 className="wrapper__title">Top Rated</h2>
				<div className="wrapper__posters">
					{topRated.map((topRatedSerie) => (
						<Link to={`/tv/${topRatedSerie.id}`} key={topRatedSerie.id}>
							<Card
								img={`https://image.tmdb.org/t/p/w500${topRatedSerie.poster_path}`}
								title={topRatedSerie.name}
								year={new Date(topRatedSerie.first_air_date)}
								stars={topRatedSerie.vote_average}
								layout="flex"
							/>
						</Link>
					))}
				</div>
			</div>
			<div className="wrapper">
				<h2 className="wrapper__title">On The Air</h2>
				<div className="wrapper__posters">
					{onTheAir.map((serieOnTheAir) => (
						<Link to={`/tv/${serieOnTheAir.id}`} key={serieOnTheAir.id}>
							<Card
								img={`https://image.tmdb.org/t/p/w500${serieOnTheAir.poster_path}`}
								title={serieOnTheAir.name}
								year={new Date(serieOnTheAir.first_air_date)}
								stars={serieOnTheAir.vote_average}
								layout="flex"
							/>
						</Link>
					))}
				</div>
			</div>

			<div className="wrapper">
				<h2 className="wrapper__title">Airing Today</h2>
				<div className="wrapper__posters">
					{airingToday.map((serieAiringToday) => (
						<Link to={`/tv/${serieAiringToday.id}`} key={serieAiringToday.id}>
							<Card
								img={`https://image.tmdb.org/t/p/w500${serieAiringToday.poster_path}`}
								title={serieAiringToday.name}
								year={new Date(serieAiringToday.first_air_date)}
								stars={serieAiringToday.vote_average}
								layout="flex"
							/>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}

export default SeriesList;
