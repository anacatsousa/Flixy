import Container from '../components/Container/Container';
import '../scss/components/_static-page.scss';

function TermesOfUse() {
	return (
		<Container>
			<section className="static-page">
				<h2 className="static-page__title">Terms of Use</h2>
				<p>Welcome to Flixy! These Terms of Use govern your access to and use of our streaming platform. By accessing our service, you agree to be bound by these terms.</p>
				<h3 className="static-page__subtitle">1. Use of the Service</h3>
				<p>Flixy is for personal, non-commercial use only. You may not copy, distribute, or resell any content accessed through the platform.</p>
				<h3 className="static-page__subtitle">2. Content</h3>
				<p>All content is sourced from external APIs and is presented for demonstration purposes only. We do not host or own any of the media displayed.</p>
				<h3 className="static-page__subtitle">3. Modifications</h3>
				<p>We may update these terms at any time. Continued use of the service after updates constitutes your acceptance of the revised terms.</p>
			</section>
		</Container>
	);
}
export default TermesOfUse;
