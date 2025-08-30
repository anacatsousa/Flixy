import { Link } from 'react-router';
import './_not-found.scss';

function NotFound() {
	return (
		<main>
			<div className="not-found">
				<h1>Not Found</h1>
				<p>Sorry, there is nothing at this URL.</p>
				<Link to={'/'}>&rarr; Go back Home</Link>
			</div>
		</main>
	);
}

export default NotFound;
