import { useLocation } from 'react-router-dom';

export const useRoute = (all = '') => {
	const location = useLocation();
	const currentPath = all !== 'all' ? location.pathname : location;
	return currentPath;
};
