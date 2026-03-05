import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

function useCredits(type) {
	const params = useParams();
	const id = params.id;

	const [isLoading, setIsLoading] = useState(false);
	const [credits, setCredits] = useState([]);

	// Credits

	useEffect(() => {
		const fetchCredits = async () => {
			const options = {
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
				},
			};

			setIsLoading(true);

			try {
				const data = await fetch(`https://api.themoviedb.org/3/${type}/${id}/credits`, options);
				const newCredits = await data.json();

				//console.log('newCredits', newCredits);

				setCredits(newCredits);
			} catch (error) {
				console.error('error', error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchCredits();
	}, [id, type]);

	if (isLoading === true) return <span className="loading">LOADING...</span>;

	return { credits, type };
}

export default useCredits;
