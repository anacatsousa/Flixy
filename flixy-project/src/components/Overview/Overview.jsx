import './_overview.scss';

function Overview({ details }) {
	return <p className="overview">{details.overview}</p>;
}

export default Overview;
