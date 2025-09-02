import Container from '../Container/Container';
import flixyLogo from '../../assets/FLIXY.svg';
import './_footer.scss';
import { Link } from 'react-router';
import ScrollToTop from '../ScrollToTop';

function Footer() {
	return (
		<>
			<Container>
				<div className="footer">
					<img src={flixyLogo} alt="Flixy logo" className="footer__logo" />
					<div className="footer__info">
						<ScrollToTop />
						<Link to={'/about'}>About Us</Link>
						<Link to={'/contact'}>Contact Us</Link>
						<Link to={'/privacy'}>Privacy Policy</Link>
						<Link to={'/terms'}>Terms of Use</Link>
					</div>
					<p> &copy; {new Date().getFullYear()} Flixy</p>
				</div>
			</Container>
		</>
	);
}

export default Footer;
