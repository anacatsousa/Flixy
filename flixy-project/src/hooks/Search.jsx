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
					Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
				},
			};

			setIsLoading(true);

			try {
				const data = await fetch(`https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&query=${encodeURIComponent(query)}`, options);
				const newSearch = await data.json();

				setSearch(newSearch.results.filter((item) => item.media_type === 'movie' || item.media_type === 'tv'));
				//console.log('newSearch', newSearch.results);
			} catch (error) {
				console.error('error', error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchSearch();
	}, [query]);
	return { isLoading, search };
}

export default useSearch;
