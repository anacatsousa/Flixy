import { useState } from 'react';
import CardDetails from '../CardDetails';
import personPhoto from '../../assets/person.svg';
import poster from '../../assets/poster.svg';
import useGenres from '../../hooks/Recomendation';
import Card from '../Card/Card';
import { Link } from 'react-router';
import './_tabs.scss';
import '../../scss/pages/_loading.scss';
import ScrollToTop from '../ScrollToTop';

function Tabs({ credits, type, genresId, id }) {
	const [isActive, setIsActive] = useState('similar');
	const { genres, isLoading } = useGenres(type, genresId);

	return (
		<>
			<div className="tabs">
				<div className="tabs__header">
					<button onClick={() => setIsActive('similar')} className={`tabs__title ${isActive === 'similar' ? 'tabs__title--active' : ''}`}>
						More Like This
					</button>
					<button onClick={() => setIsActive('details')} className={`tabs__title ${isActive === 'details' ? 'tabs__title--active' : ''}`}>
						Details
					</button>
				</div>
				<div className="tabs__content">
					{isActive === 'similar' && (
						<div className="similar">
							<div className="wrapper__posters">
								{isLoading ? (
									<p className="loading-section">Loading ...</p>
								) : (
									genres
										.filter((similar) => similar.id !== id)
										.map((similar) => (
											<Link to={`/${type}/${similar.id}`} key={similar.id}>
												<Card
													img={similar.poster_path === null ? poster : `https://image.tmdb.org/t/p/w500${similar.poster_path}`}
													title={similar.title || similar.name}
													year={new Date(similar.release_date || similar.first_air_date)}
													stars={similar.vote_average}
													layout="flex"
												/>
											</Link>
										))
								)}
							</div>
						</div>
					)}
					{isActive === 'details' && (
						<div className="tabs__details">
							<div className="tabs__details-cast">
								<h3 className="tabs__details-title">Cast</h3>
								<div className="tabs__cast">
									{credits.cast.map((person) => {
										return (
											<>
												<CardDetails key={person.id || person.cast_id} className="tabs__cast-info">
													{person.profile_path === null ? (
														<img src={personPhoto} alt="teste" className="tabs__cast-info-img" />
													) : (
														<img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt={person.name} className="tabs__cast-info-img" />
													)}
													<div>
														<p>{person.name}</p>
														<p>{person.character}</p>
													</div>
												</CardDetails>
											</>
										);
									})}
								</div>
							</div>
							<div className="tabs__details-crew">
								{credits.crew.length > 0 && (
									<>
										<h3 className="tabs__details-title">Crew</h3>
										<div className="tabs__crew">
											{credits.crew.map((person) => {
												return (
													<>
														<CardDetails key={person.id || person.crew_id} className="tabs__crew-info">
															<p>{person.name}</p>
															<p>{person.job}</p>
														</CardDetails>
													</>
												);
											})}
										</div>
									</>
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default Tabs;
