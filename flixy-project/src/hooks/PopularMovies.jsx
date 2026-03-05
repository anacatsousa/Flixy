import { useEffect, useState } from 'react';

function usePopularMovies() {
	const [isLoading, setIsLoading] = useState(false);
	const [popularMovies, setPopularMovies] = useState([]);

	useEffect(() => {
		const fetchPopularMovies = async () => {
			const options = {
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
				},
			};

			setIsLoading(true);

			try {
				const data = await fetch(`https://api.themoviedb.org/3/movie/popular`, options);
				const newPopularMovies = await data.json();

				//console.log('newPopularMovies', newPopularMovies);

				setPopularMovies(newPopularMovies.results);
			} catch (error) {
				console.error('error', error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchPopularMovies();
	}, []);

	return { popularMovies, isLoading };
}

export default usePopularMovies;
