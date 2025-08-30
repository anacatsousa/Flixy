import { useContext } from 'react';
import { SearchContext } from './SearchContext';

function useSearchContext() {
	const context = useContext(SearchContext);
	return context;
}

export { useSearchContext };
