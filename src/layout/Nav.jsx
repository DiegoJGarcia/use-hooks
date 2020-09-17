import React from 'react';
import './styles/Nav.scss';
import { useHistory, useLocation } from 'react-router-dom';
import Button from '../components/Button.jsx';
import routes from '../routes.js';

const Nav = () => {
	const history = useHistory();

	const location = useLocation();

	const currentIndex = routes.findIndex(r => r.path === location.pathname);

	const go = where => {
		switch (where) {
			case 'home':
				history.push('/');
				break;
			case 'last':
				history.push(routes[currentIndex - 1].path);
				break;
			case 'next':
				history.push(routes[currentIndex + 1].path);
				break;
			default:
				break;
		}
	};

	return (
		<div className="nav">
			{currentIndex !== 0 && (
				<div>
					<Button disabled={currentIndex === 1} onClick={() => go('last')}>
						{currentIndex === 1
							? 'No hay donde volver :('
							: `<-- Volver a ${routes[currentIndex - 1].label}`}
					</Button>
					<Button circle onClick={() => go('home')}>
						Volver al inicio
					</Button>
					<Button disabled={currentIndex + 1 === routes.length} onClick={() => go('next')}>
						{currentIndex + 1 === routes.length
							? 'No hay nada mas :('
							: `Seguir con ${routes[currentIndex + 1].label} -->`}
					</Button>
				</div>
			)}
		</div>
	);
};

export default Nav;
