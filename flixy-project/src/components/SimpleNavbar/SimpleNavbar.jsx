import { Link } from 'react-router';
import flixyLogoWhite from '../../assets/FlixyLogo-White.svg';
import './_simpleNavbar.scss';

function SimpleNavbar() {
	return (
		<>
			<header>
				<nav className="simple-navbar">
					<Link to={'/'}>
						<img src={flixyLogoWhite} alt="Flixy logo" className="simple-navbar__logo" />
					</Link>
				</nav>
			</header>
		</>
	);
}
export default SimpleNavbar;
