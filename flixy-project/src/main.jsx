import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import './scss/style.scss';
import Home from './pages/HomePage.jsx';
import Movies from './pages/MoviesPage.jsx';
import Series from './pages/TvShowsPage.jsx';
import Movie from './pages/MoviePage.jsx';
import Serie from './pages/TvShowPage.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import MyListPage from './pages/MyListPage.jsx';
import Layout from './components/Layout.jsx';
import MyListProvider from './context/MyListContext.jsx';
import AllGenresProvider from './context/GenreContext.jsx';
import { SearchProvider } from './context/SearchContext.jsx';
import SimpleNavbar from './components/SimpleNavbar/SimpleNavbar.jsx';
import AboutUs from './pages/AboutUsPage.jsx';
import ContactUs from './pages/ContactUsPage.jsx';
import PrivacyPolicy from './pages/PrivacyPolicyPage.jsx';
import TermesOfUse from './pages/TermsOfUsePage.jsx';
import Success from './pages/Submitted/SuccessPage.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<MyListProvider>
				<AllGenresProvider>
					<SearchProvider>
						<Routes>
							<Route element={<Layout />}>
								<Route path="/" element={<Home />} />
								<Route path="/movies" element={<Movies />} />
								<Route path="/tv" element={<Series />} />
								<Route path="/movie/:id" element={<Movie />} />
								<Route path="/tv/:id" element={<Serie />} />
								<Route path="/mylist" element={<MyListPage />} />
								<Route path="/about" element={<AboutUs />} />
								<Route path="/contact" element={<ContactUs />} />
								<Route path="/privacy" element={<PrivacyPolicy />} />
								<Route path="/terms" element={<TermesOfUse />} />
								<Route path="/success" element={<Success />} />
							</Route>
							<Route
								path="*"
								element={
									<>
										<SimpleNavbar />
										<NotFound />
									</>
								}
							/>
						</Routes>
					</SearchProvider>
				</AllGenresProvider>
			</MyListProvider>
		</BrowserRouter>
	</StrictMode>
);
