import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

function useDetails(type) {
	const params = useParams();
	const id = params.id;

	const [isLoading, setIsLoading] = useState(false);
	const [details, setDetails] = useState([]);

	// Details

	useEffect(() => {
		if (!id) return; // evita fetch se id undefined

		const fetchDetails = async () => {
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
				const data = await fetch(`https://api.themoviedb.org/3/${type}/${id}`, options);
				const newDetails = await data.json();

				//console.log('newDetails', newDetails);

				setDetails(newDetails);
			} catch (error) {
				console.error('error', error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchDetails();
	}, [id, type]);

	if (isLoading === true) return <span className="loading">LOADING...</span>;

	return { details, isLoading };
}

export default useDetails;
