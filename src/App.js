import React, { createContext, useState } from 'react';
import { Route, HashRouter, BrowserRouter } from 'react-router-dom';
import routes from './routes.js';
import './styles/App.scss';
import Nav from './layout/Nav.jsx';
import TopBar from './layout/TopBar.jsx';

export const ThemeContext = createContext();

const App = () => {
	const [theme, changeTheme] = useState('dark');
	let auth = true;

	return auth ? (
		<BrowserRouter>
			<HashRouter>
				<div className={`app ${theme}`}>
					<TopBar />
					<div className="app_view">
						<ThemeContext.Provider value={[theme, changeTheme]}>
							{routes.map((route, i) => (
								<Route
									key={route.key}
									path={route.path}
									exact={route.exact}
									component={route.component}
								/>
							))}
						</ThemeContext.Provider>
					</div>
					<div className="app_nav">
						<Nav />
					</div>
				</div>
			</HashRouter>
		</BrowserRouter>
	) : null;
};

export default App;
