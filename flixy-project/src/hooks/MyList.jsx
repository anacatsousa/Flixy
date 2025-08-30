import { useContext } from 'react';
import { MyListContext } from '../context/MyListContext';

function useMyList() {
	return useContext(MyListContext);
}
export default useMyList;
