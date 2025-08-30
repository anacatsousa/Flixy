import { useContext } from 'react';
import { AllGenresContext } from './GenreContext';

function useAllGenresContext() {
	const context = useContext(AllGenresContext);
	return context;
}

export { useAllGenresContext };
