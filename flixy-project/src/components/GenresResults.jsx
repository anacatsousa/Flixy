import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Card from './Card/Card';
import poster from '../assets/poster.svg';
import '../scss/components/_wrapper.scss';
import '../scss/pages/_loading.scss';
import { useAllGenresContext } from '../context/useGenresContext';
import SelectGenres from './SelectGenres/SelectGenres';

function GenresResults({ type }) {
	const { selectedGenres } = useAllGenresContext();
	const [search, setSearch] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchByGenre = async () => {
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
				const genreIds = selectedGenres.map((genre) => genre.value).join(',');
				const data = await fetch(`https://api.themoviedb.org/3/discover/${type}?with_genres=${genreIds}&language=en-US`, options);
				const newByGenres = await data.json();
				console.log('newByGenres', newByGenres);

				setSearch(newByGenres.results || []);
			} catch (error) {
				console.error('error', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchByGenre();
	}, [selectedGenres]);

	if (isLoading) return <span className="loading">LOADING ....</span>;

	return (
		<div className="wrapper">
			<div className="wrapper__inicial">
				<h2 className="wrapper__title">{type === 'tv' ? 'Tv Shows' : 'Movies'}</h2>
				<SelectGenres type={type} />
			</div>
			<div className="wrapper__posters--grid">
				{search.length === 0 && <p>No results</p>}
				{search.map((list) => (
					<Link to={`/${type}/${list.id}`} key={list.id}>
						<Card
							img={list.poster_path === null ? poster : `https://image.tmdb.org/t/p/w500${list.poster_path}`}
							title={list.title || list.name}
							year={new Date(list.release_date || list.first_air_date)}
							stars={list.vote_average}
							layout="grid"
						/>
					</Link>
				))}
			</div>
		</div>
	);
}

export default GenresResults;
