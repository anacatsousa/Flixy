import Container from '../components/Container/Container';
import '../scss/components/_static-page.scss';

function AboutUs() {
	return (
		<Container>
			<section className="static-page">
				<h2 className="static-page__title">About Flixy</h2>
				<p>Flixy is a fictional streaming platform built for educational and portfolio purposes. It showcases how to fetch and display movie and TV show data using external APIs.</p>
				<p>This project was developed to practice modern web development with React, routing, responsive design, and API integration.</p>
				<p>Flixy is not affiliated with any real streaming service and does not host any media content.</p>
			</section>
		</Container>
	);
}
export default AboutUs;
