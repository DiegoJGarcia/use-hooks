import React from 'react';
import './styles/TopBar.scss';
import { useRoute } from '../hooks/useRoute.js';
import routes from '../routes.js';

const TopBar = () => {
	const route = useRoute();

	return (
		<div className="topbar">
			{routes.map(
				r =>
					route === r.path && (
						<p key={r.key}>
							<h1>{r.label}</h1>
						</p>
					)
			)}
		</div>
	);
};

export default TopBar;
