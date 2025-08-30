import { Link } from 'react-router';
import '../Submitted/_success.scss';

function Success() {
	return (
		<div className="success">
			<h2>Form submitted!</h2>
			<Link to={'/'}>&rarr; Go back Home</Link>
		</div>
	);
}

export default Success;
