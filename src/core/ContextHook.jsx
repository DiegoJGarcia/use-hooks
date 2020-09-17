import React, { useContext } from 'react';
import './styles/HooksViews.scss';
import { ThemeContext } from '../App';
import Card from '../components/Card';

const ContextHook = () => {
	const [theme, changeTheme] = useContext(ThemeContext);

	console.log(theme);

	return (
		<div className="hooksViews">
			<div className="hooksViews_cards">
				<Card onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}>{`¡Cambiar a tema ${
					theme === 'light' ? 'dark' : 'light'
				}!`}</Card>
			</div>
		</div>
	);
};

export default ContextHook;
