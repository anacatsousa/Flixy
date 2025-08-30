import star from '../../assets/star-solid-full.svg';
import './_card.scss';

function Card({ img, title, year, stars, layout }) {
	return (
		<div className={`card card--${layout}`}>
			<img src={img} alt={title} className="card__img" />
			<div className="card__wrapper">
				<span className="card__title">{title}</span>
				<div className="card__section">
					<img src={star} alt="Star icon" className="card__star" />
					<span className="card__stars">{typeof stars === 'number' ? stars.toFixed(1) : ''}</span>
					<span> | </span>
					<span className="card__year">{year instanceof Date && !isNaN(year) ? year.getFullYear() : 'unknown'}</span>
				</div>
			</div>
		</div>
	);
}

export default Card;
