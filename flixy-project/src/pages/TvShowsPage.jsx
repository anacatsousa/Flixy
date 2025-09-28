import Container from '../components/Container/Container';
import GenresResults from '../components/GenresResults';
import SearchResults from '../components/SearchResults';
import SeriesList from '../components/TvShowsList';
import { useAllGenresContext } from '../hooks/useGenresContext';
import { useSearchContext } from '../hooks/useSearchContext';

function Series() {
	const { query } = useSearchContext();
	const { selectedGenres } = useAllGenresContext();

	const hasSelectedGenres = selectedGenres && selectedGenres.length > 0;

	return <Container>{query.length > 0 ? <SearchResults /> : hasSelectedGenres ? <GenresResults type="tv" /> : <SeriesList />}</Container>;
}

export default Series;
