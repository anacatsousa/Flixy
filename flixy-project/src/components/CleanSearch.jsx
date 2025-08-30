import { useEffect } from 'react';
import { useSearchContext } from '../context/useSearchContext';
import { useAllGenresContext } from '../context/useGenresContext';
import { useLocation } from 'react-router';

function CleanSearch() {
	const { setQuery, setIsOpen } = useSearchContext();
	const { setSelectedGenres } = useAllGenresContext();
	const location = useLocation();

	useEffect(() => {
		const routes = ['/', '/tv', '/movies', '/mylist', '/*', '/about', '/contact', '/privacy', '/terms'];
		const isMainRoute = routes.includes(location.pathname);
		if (location.pathname.startsWith('/movie/') || location.pathname.startsWith('/tv/') || isMainRoute) {
			setQuery('');
			setIsOpen(false);
			setSelectedGenres([]);
		}
	}, [location, setQuery, setIsOpen, setSelectedGenres]);
}

export default CleanSearch;
