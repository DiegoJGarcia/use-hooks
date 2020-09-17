import React from 'react';
import './styles/Home.scss';
import { Link } from 'react-router-dom';
import Card from '../components/Card.jsx';
import routes from '../routes.js';

const Home = () => {
	return (
		<div className="home">
			{routes.map(
				r =>
					r.path !== '/' && (
						<Link key={r.key} to={r.path}>
							<Card fontSize="2em" size="80px" noScroll>
								{r.label}
							</Card>
						</Link>
					)
			)}
		</div>
	);
};

export default Home;
