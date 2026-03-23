import Container from '../components/Container/Container';
import '../scss/components/_static-page.scss';

function PrivacyPolicy() {
	return (
		<Container>
			<section className="static-page">
				<h1 className="static-page__title">Privacy Policy</h1>
				<p>At Flixy, we respect your privacy. This platform is a fictional streaming service created for educational purposes and does not collect any personal information from users.</p>

				<h2 className="static-page__subtitle">Local Storage</h2>
				<p>Flixy uses your browser's localStorage to save the movies and TV shows you add to your My List. This data is stored only on your device and is not sent to any server.</p>
				<p>You can clear your list at any time by clearing your browser's local storage.</p>

				<h2 className="static-page__subtitle">Data Sharing</h2>
				<p>We do not collect, share, or transmit any user data. There are no analytics, advertising, or tracking tools integrated in this project.</p>

				<h2 className="static-page__subtitle">Third-Party APIs</h2>
				<p>Movie and TV show information is fetched from external APIs (such as The Movie Database). No user data is sent to these services.</p>

				<h2 className="static-page__subtitle">Changes</h2>
				<p>Since this is a personal project, this policy may be updated as the project evolves, but user data will never be collected or shared.</p>
			</section>
		</Container>
	);
}
export default PrivacyPolicy;
