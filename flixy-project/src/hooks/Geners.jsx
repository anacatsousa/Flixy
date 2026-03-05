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
					Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
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
