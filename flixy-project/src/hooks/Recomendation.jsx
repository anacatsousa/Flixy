import { useEffect, useState } from 'react';

function useGenres(type, number = []) {
	const [isLoading, setIsLoading] = useState(false);
	const [genres, setGenres] = useState([]);

	const genreIds = number.map((ids) => ids.id);
	console.log('genreIds', genreIds);

	useEffect(() => {
		const fetchGenres = async () => {
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
				const data = await fetch(`https://api.themoviedb.org/3/discover/${type}?with_genres=${genreIds}&sort_by=popularity.desc`, options);
				const newGenres = await data.json();
				console.log('newGenres', newGenres.results);

				setGenres(newGenres.results);
			} catch (error) {
				console.error('error', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchGenres();
	}, [type]);

	return { genres, isLoading };
}

export default useGenres;
