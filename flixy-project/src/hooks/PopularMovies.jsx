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

	return { popularMovies, isLoading };
}

export default usePopularMovies;
