import { useState, useEffect } from 'react';

function useAllGenres(type) {
	const [allGenres, setAllGenres] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchAllGenres = async () => {
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
				const data = await fetch(`https://api.themoviedb.org/3/genre/${type}/list?language=en`, options);
				const newAllGenres = await data.json();

				//console.log('newAllGenres', newAllGenres);

				setAllGenres(newAllGenres.genres || []);
			} catch (error) {
				console.error('error', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchAllGenres();
	}, [type]);

	return { allGenres, isLoading };
}

export default useAllGenres;
