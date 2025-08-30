import { Outlet } from 'react-router';
import Nav from './Navbar/NavBar.jsx';
import '../scss/layouts/_main.scss';
import CleanSearch from './CleanSearch.jsx';
import Footer from './Footer/Footer.jsx';

function Layout() {
	return (
		<>
			<CleanSearch />
			<header>
				<Nav />
			</header>

			<main>
				<Outlet />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default Layout;
