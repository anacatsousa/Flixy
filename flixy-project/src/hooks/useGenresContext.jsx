import { useContext } from 'react';
import { AllGenresContext } from '../context/GenreContext';

function useAllGenresContext() {
	const context = useContext(AllGenresContext);
	return context;
}

export { useAllGenresContext };
