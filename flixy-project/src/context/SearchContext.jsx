import { useState } from 'react';
import { createContext } from 'react';
import useSearch from '../hooks/Search.jsx';

const SearchContext = createContext();

export function SearchProvider({ children }) {
	const [query, setQuery] = useState('');
	const { search, isLoading } = useSearch(query);
	const [isOpen, setIsOpen] = useState(false);

	return <SearchContext.Provider value={{ query, setQuery, search, isLoading, isOpen, setIsOpen }}>{children}</SearchContext.Provider>;
}

export { SearchContext };
