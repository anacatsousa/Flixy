import { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const MyListContext = createContext();

function MyListProvider({ children }) {
	const [myList, setMyList] = useState(() => {
		const saved = localStorage.getItem('myList');
		return saved ? JSON.parse(saved) : [];
	});

	// Saved

	useEffect(() => {
		const saved = localStorage.getItem('myList');
		if (saved) {
			setMyList(JSON.parse(saved));
		}
	}, []);

	// Update

	useEffect(() => {
		localStorage.setItem('myList', JSON.stringify(myList));
	}, [myList]);

	const addToList = (items) => {
		if (!myList.find((item) => item.id === items.id)) {
			setMyList([items, ...myList]);
		}
	};

	const removeFromList = (id) => {
		setMyList(myList.filter((item) => item.id !== id));
	};

	const isInList = (id) => {
		return myList.some((item) => item.id === id);
	};

	return <MyListContext.Provider value={{ myList, addToList, removeFromList, isInList }}>{children}</MyListContext.Provider>;
}

export { MyListContext };
export default MyListProvider;
