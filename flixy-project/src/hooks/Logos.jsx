import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

function useLogos(type) {
	const params = useParams();
	const id = params.id;

	const [isLoading, setIsLoading] = useState(false);
	const [logos, setLogos] = useState([]);

	// Logos

	useEffect(() => {
		const fetchLogos = async () => {
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
				const data = await fetch(`https://api.themoviedb.org/3/${type}/${id}/images`, options);
				const newLogos = await data.json();

				console.log('newLogos', newLogos);

				setLogos(newLogos.logos);
			} catch (error) {
				console.log('error', error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchLogos();
	}, [id, type]);

	if (isLoading === true) return <span>LOADING...</span>;

	const logo = logos?.find((l) => l.iso_639_1 === 'en');

	return { logo, type };
}

export default useLogos;
