import Select from 'react-select';
import useAllGenres from '../../hooks/Geners';
import './_selectGenres.scss';
import { useMemo } from 'react';
import { useAllGenresContext } from '../../context/useGenresContext';

function SelectGenres({ type }) {
	const { allGenres, isLoading } = useAllGenres(type);
	const { selectedGenres, setSelectedGenres } = useAllGenresContext();

	const genreOptions = useMemo(() => {
		return allGenres.map((genre) => ({
			value: genre.id,
			label: genre.name,
		}));
	}, [allGenres]);

	const handleChange = (selectedOptions) => {
		setSelectedGenres(selectedOptions);
		console.log('selectedOptions', selectedOptions);
	};

	return <Select isMulti options={genreOptions} value={selectedGenres} onChange={handleChange} isLoading={isLoading} placeholder="Genres" className="select" classNamePrefix="select" />;
}
export default SelectGenres;
