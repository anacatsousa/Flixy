import { useState } from 'react';
import plusWhite from '../../assets/plus-white.svg';
import plusGrey from '../../assets/plus-gray.svg';
import checkWhite from '../../assets/check-white.svg';
import checkGray from '../../assets/check-gray.svg';
import useMyList from '../../hooks/MyList';
import './_buttonMyList.scss';

function ButtonMyList({ item, type }) {
	const [isHovered, setIsHovered] = useState(false);
	const { addToList, removeFromList, isInList } = useMyList();

	const plus = isHovered ? plusGrey : plusWhite;
	const check = isHovered ? checkGray : checkWhite;
	const inList = isInList(item.id);

	const click = () => {
		const itemType = {
			...item,
			media_type: type,
		};

		if (isInList(item.id)) {
			removeFromList(item.id);
		} else {
			addToList(itemType);
		}
	};

	return (
		<button className="btn-mylist" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={click}>
			{inList ? <img src={check} alt="My List" /> : <img src={plus} alt="My List" />}
			<p>My List</p>
		</button>
	);
}

export default ButtonMyList;
