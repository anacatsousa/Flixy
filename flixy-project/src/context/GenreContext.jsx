import { createContext, useState } from 'react';

const AllGenresContext = createContext();

function AllGenresProvider({ children }) {
	const [selectedGenres, setSelectedGenres] = useState([]);

	return <AllGenresContext.Provider value={{ selectedGenres, setSelectedGenres }}>{children}</AllGenresContext.Provider>;
}

export { AllGenresContext };
export default AllGenresProvider;
