import { useEffect, useState } from 'react';

function usePopularSeries() {
	const [isLoading, setIsLoading] = useState(false);
	const [popularSeries, setPopularSeries] = useState([]);

	useEffect(() => {
		const fetchPopularSeries = async () => {
			const options = {
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
				},
			};

			setIsLoading(true);

			try {
				const data = await fetch(`https://api.themoviedb.org/3/tv/popular`, options);
				const newPopularSeries = await data.json();

				//console.log('newPopularSeries', newPopularSeries);

				setPopularSeries(newPopularSeries.results);
			} catch (error) {
				console.error('error', error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchPopularSeries();
	}, []);

	return { popularSeries, isLoading };
}

export default usePopularSeries;
