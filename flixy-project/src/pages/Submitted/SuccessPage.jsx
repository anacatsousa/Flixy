import { Link } from 'react-router';
import '../Submitted/_success.scss';

function Success() {
	return (
		<div className="success">
			<h1>Form submitted!</h1>
			<Link to={'/'}>&rarr; Go back Home</Link>
		</div>
	);
}

export default Success;
