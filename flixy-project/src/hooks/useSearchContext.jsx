import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

function useSearchContext() {
	const context = useContext(SearchContext);
	return context;
}

export { useSearchContext };
