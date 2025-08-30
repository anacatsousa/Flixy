import Button from '../Button/Button';
import ButtonMyList from '../ButtonMyList/ButtonMyList';
import star from '../../assets/star-white.svg';
import './_hero.scss';

function Hero({ details, logo }) {
	if (!details || !details.vote_average) return null;
	const type = details.title ? 'movie' : 'tv';

	const hours = Math.floor(details.runtime / 60);
	const min = details.runtime % 60;

	return (
		<div className="hero">
			{logo === undefined ? (
				<h2 className="hero__title">{details.title || details.name}</h2>
			) : (
				<img src={`https://image.tmdb.org/t/p/original${logo.file_path}`} alt={details.title} className="hero__logo" />
			)}
			<div className="hero__section">
				<span>{details.runtime ? `${hours} h ${min} min ` : details.number_of_seasons ? `${details.number_of_seasons} seasons` : ''}</span>
				<div className="hero__vote">
					<img src={star} alt="star" className="hero__star" />
					<span>{details.vote_average.toFixed(1)}</span>
				</div>
				<span>{new Date(details.release_date || details.first_air_date).getFullYear()}</span>
			</div>
			<div className="hero_genres">{details.genres.map((genre) => genre.name).join(' | ')}</div>
			<div className="hero__action">
				<Button text="Watch Now" />
				<ButtonMyList item={details} type={type} />
			</div>
		</div>
	);
}

export default Hero;
