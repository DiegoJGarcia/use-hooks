import { useState } from 'react';

export const useModal = (defData = null, defOpen = false) => {
	const [data, setData] = useState(defData);
	const [open, setOpen] = useState(defOpen);
	const toggle = (newData, opening = !open) => {
		setOpen(opening);
		opening ? setData(newData) : setData(null);
	};
	return [open, toggle, data];
};
