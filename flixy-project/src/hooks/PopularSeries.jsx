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
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjU4M2ZhNDIwOTlmNTgwOTFhMzg5YmEzYzA1NjIwZiIsIm5iZiI6MTc1NDA4MjI1My41MDEsInN1YiI6IjY4OGQyYmNkMGQwNmQ2ZmMzYTExY2ZjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aaG6bNSR5S46iZYs5gJAKG1RahRTnrOy22d3mH6y9OU', // Replace with your Bearer token
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
