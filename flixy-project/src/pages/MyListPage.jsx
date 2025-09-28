import { Link } from 'react-router';
import Container from '../components/Container/Container';
import Card from '../components/Card/Card';
import useMyList from '../hooks/MyList';
import SearchResults from '../components/SearchResults';
import '../scss/components/_wrapper.scss';
import { useSearchContext } from '../hooks/useSearchContext';

function MyListPage() {
	const { myList } = useMyList();
	console.log('myList', myList);

	const { query } = useSearchContext();

	return (
		<>
			{query.length > 0 ? (
				<Container>
					<SearchResults />
				</Container>
			) : (
				<Container>
					<div className="wrapper">
						<h2 className="wrapper__title">My List</h2>
						<div className="wrapper__posters--grid">
							{myList.length === 0 ? (
								<p> Your list is empy</p>
							) : (
								myList.map((list) => (
									<Link to={`/${list.media_type}/${list.id}`} key={list.id}>
										<Card
											img={`https://image.tmdb.org/t/p/w500${list.poster_path}`}
											title={list.title || list.name}
											year={new Date(list.release_date || list.first_air_date)}
											stars={list.vote_average}
											layout="grid"
										/>
									</Link>
								))
							)}
						</div>
					</div>
				</Container>
			)}
		</>
	);
}

export default MyListPage;
