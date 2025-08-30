import { useState } from 'react';
import { useEffect } from 'react';

function useSearch(query) {
	const [isLoading, setIsLoading] = useState(false);
	const [search, setSearch] = useState([]);

	useEffect(() => {
		const fetchSearch = async () => {
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
				const data = await fetch(`https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&query=${encodeURIComponent(query)}`, options);
				const newSearch = await data.json();

				setSearch(newSearch.results.filter((item) => item.media_type === 'movie' || item.media_type === 'tv'));
				console.log('newSearch', newSearch.results);
			} catch (error) {
				console.log('error', error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchSearch();
	}, [query]);
	return { isLoading, search };
}

export default useSearch;
