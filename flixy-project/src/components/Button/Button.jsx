import './_button.scss';
import { useState } from 'react';
import plusWhite from '../../assets/plus-white.svg';
import plusGrey from '../../assets/plus-gray.svg';
import checkWhite from '../../assets/check-white.svg';
import checkGray from '../../assets/check-gray.svg';
import useMyList from '../../hooks/MyList';

function Button({ text, item, type, variant, myList = false }) {
	const [isHovered, setIsHovered] = useState(false);
	const { addToList, removeFromList, isInList } = useMyList();

	if (!myList) {
		return <button className="btn">{text}</button>;
	}

	if (!item || typeof item.id === 'undefined') {
		console.error("Button: 'item' prop is missing or invalid", item);
		return null;
	}

	const plus = isHovered ? plusGrey : plusWhite;
	const check = isHovered ? checkGray : checkWhite;
	const inList = isInList(item.id);

	const click = () => {
		const itemType = { ...item, media_type: type };
		if (inList) {
			removeFromList(item.id);
		} else {
			addToList(itemType);
		}
	};

	return (
		<button className={`btn btn--${variant}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={click}>
			{inList ? <img src={check} alt="Added to my list" /> : <img src={plus} alt="Add to my list" />}
			{text}
		</button>
	);
}

export default Button;
