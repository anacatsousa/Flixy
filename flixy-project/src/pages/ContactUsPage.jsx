import { useState } from 'react';
import Container from '../components/Container/Container';
import { useNavigate } from 'react-router';

function ContactUs() {
	const [isValid, setIsValid] = useState({
		firstName: { value: '', valid: true, errorMessage: '' },
		lastName: { value: '', valid: true, errorMessage: '' },
		email: { value: '', valid: true, errorMessage: '' },
		message: { value: '', valid: true, errorMessage: '' },
	});

	let navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;

		setIsValid((prevState) => ({
			...prevState,
			[name]: {
				value,
				valid: true,
				errorMessage: '',
			},
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let formIsValid = true;
		const newState = { ...isValid };

		Object.keys(newState).forEach((fieldName) => {
			const field = newState[fieldName];
			if (field.value.trim() === '') {
				field.valid = false;
				field.errorMessage = 'Mandatory field';
				formIsValid = false;
			} else if (fieldName === 'email' && !field.value.includes('@')) {
				field.valid = false;
				field.errorMessage = 'This is not a valid email';
				formIsValid = false;
			} else {
				field.valid = true;
				field.errorMessage = '';
			}
		});

		setIsValid(newState);

		if (formIsValid) {
			navigate('/success');

			// submit dada

			// const formData = {
			// 	firstName: isValid.firstName.value,
			// 	lastName: isValid.lastName.value,
			// 	email: isValid.email.value,
			// 	message: isValid.message.value,
			// };

			// try {
			// 	const response = await fetch('/your-server-endpoint', {
			// 	method: 'POST',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 	},
			// 	body: JSON.stringify(formData), // Converte o objeto para JSON
			// 	});

			// 	if (response.ok) {
			// 	alert('Form submitted!');
			// 	navigate('/success'); // Redireciona para a página de sucesso
			// 	} else {
			// 	alert('Failed to submit form. Try again.');
			// 	}
			// } catch (error) {
			// 	alert('Error submitting form. Please try again later.');
			// }
		} else {
			Object.keys(newState).forEach((fieldName) => {
				const field = newState[fieldName];
				if (field.value.trim() === '') {
					field.valid = false;
					field.errorMessage = 'Mandatory field';
					formIsValid = false;
				}
			});
		}
	};

	return (
		<Container>
			<div className="static-page">
				<h2 className="static-page__title">Contact Us</h2>
				{/* <form action="" method="post" onSubmit={handleSubmit} className="static-page__form"> */}
				<form onSubmit={handleSubmit} className="static-page__form" noValidate>
					<div className="static-page__form-group">
						<label htmlFor="first-name" className="static-page__label">
							First Name
						</label>
						<input type="text" id="first-name" name="firstName" className="static-page__input" placeholder="First name" value={isValid.firstName.value} onChange={handleChange} required />
						<span className={`static-page__error-message ${isValid.firstName.valid ? '' : 'invalid'}`}>{isValid.firstName.errorMessage}</span>
					</div>
					<div className="static-page__form-group">
						<label htmlFor="last-name" className="static-page__label">
							Last Name
						</label>
						<input type="text" id="last-name" name="lastName" className="static-page__input" placeholder="Last name" value={isValid.lastName.value} onChange={handleChange} required />
						<span className={`static-page__error-message ${isValid.lastName.valid ? 'valid' : 'invalid'}`}>{isValid.lastName.errorMessage}</span>
					</div>
					<div className="static-page__form-group">
						<label htmlFor="email" className="static-page__label">
							Email
						</label>
						<input type="email" id="email" name="email" className="static-page__input" placeholder="exemple@email.com" value={isValid.email.value} onChange={handleChange} required />
						<span className={`static-page__error-message ${isValid.email.valid ? 'valid' : 'invalid'}`}>{isValid.email.errorMessage}</span>
					</div>
					<div className="static-page__form-group">
						<label htmlFor="message" className="static-page__label">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							rows="4"
							className="static-page__textarea"
							placeholder="Write your text..."
							value={isValid.message.value}
							onChange={handleChange}
							required
						></textarea>
						<span className={`static-page__error-message ${isValid.message.valid ? 'valid' : 'invalid'}`}>{isValid.message.errorMessage}</span>
					</div>
					<button type="submit" className="static-page__btn">
						Submit
					</button>
				</form>
			</div>
		</Container>
	);
}
export default ContactUs;
