import { Link } from 'react-router';
import flixyLogo from '../../assets/FLIXY.svg';
import flixyLogoWhite from '../../assets/FlixyLogo-White.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import searchIcon from '../../assets/search.svg';
import searchIconGray from '../../assets/search-gray.svg';
import x from '../../assets/x.svg';
import user from '../../assets/user-white.svg';
import userGray from '../../assets/user-gray.svg';
import hamburguer from '../../assets/bars-white.svg';
import hamburguerGray from '../../assets/bars-gray.svg';

import './_navbar.scss';
import { useSearchContext } from '../../context/useSearchContext';

function Nav() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [isHoveredSearch, setIsHoveredSearch] = useState(false);
	const [isHoveredMenu, setIsHoveredMenu] = useState(false);
	const { setQuery, query, isOpen, setIsOpen } = useSearchContext();

	const userProfile = isHovered ? userGray : user;
	const search = isHoveredSearch ? searchIconGray : searchIcon;
	const menu = isHoveredMenu ? hamburguerGray : hamburguer;

	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 0);

		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		const mobile = () => setIsMobile(window.innerWidth < 940);

		mobile();

		window.addEventListener('resize', mobile);
		return () => window.removeEventListener('resize', mobile);
	}, []);

	const open = () => {
		setIsOpen((prev) => {
			if (prev && query) {
				setQuery('');
			}
			return !prev;
		});
	};

	const openMenu = () => {
		setIsOpenMenu((prev) => {
			const nextState = !prev;
			document.body.style.overflow = nextState ? 'hidden' : 'auto';
			return nextState;
		});
	};

	const queryChange = (event) => {
		const value = event.target.value;
		setQuery(value);
		console.log(value);
	};

	return (
		<nav className={`nav ${isScrolled ? 'nav--scrolled' : ''}`}>
			<div className="nav__left">
				<Link to={'/'}>
					<img src={flixyLogo} alt="Flixy logo" className="nav__logo" />
				</Link>
				{isMobile ? (
					<>
						<img src={menu} alt="menu" className="nav__hamburguer" onClick={openMenu} onMouseEnter={() => setIsHoveredMenu(true)} />
						{isOpenMenu && (
							<>
								<div className="overlay"></div>
								<div className={`nav__menu ${isOpenMenu ? 'nav__menu--open' : ''}`}>
									<div className="nav__menu-links">
										<Link to={'/'}>
											<img src={flixyLogoWhite} alt="Flixy logo" className="nav__logo" onClick={openMenu} />
										</Link>
										<img src={x} alt="close" onClick={openMenu} onMouseLeave={() => setIsHoveredMenu(false)} className="nav__icons" />
									</div>
									<Link to="/" onClick={openMenu}>
										Home
									</Link>
									<Link to="/movies" onClick={openMenu}>
										Movies
									</Link>
									<Link to="/tv" onClick={openMenu}>
										Tv Shows
									</Link>
									<Link to="/mylist" onClick={openMenu}>
										My List
									</Link>
								</div>
							</>
						)}
					</>
				) : (
					<div>
						<Link to="/">Home</Link>
						<Link to="/movies">Movies</Link>
						<Link to="/tv">Tv Shows</Link>
						<Link to="/mylist">My List</Link>
					</div>
				)}
			</div>
			<div className="nav__right">
				<div className={`nav__search ${isOpen ? 'nav__search--open' : ''}`}>
					{isOpen && <input type="text" name="search" placeholder="Search by title" value={query} onChange={queryChange} className="nav__input" />}
					<button className="nav__button" onClick={open} onMouseEnter={() => setIsHoveredSearch(true)} onMouseLeave={() => setIsHoveredSearch(false)}>
						{isOpen ? <img src={x} alt="close" className="nav__icons" /> : <img src={search} alt="search" className="nav__icons" />}
					</button>
				</div>

				<Link to={'/'} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
					<img src={userProfile} alt="user profile" className="nav__icons" />
				</Link>
			</div>
		</nav>
	);
}

export default Nav;
