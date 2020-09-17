import React from 'react';
import Home from './core/Home';
import StateHook from './core/StateHook';
import EffectHook from './core/EffectHook';
import ContextHook from './core/ContextHook';
import MemoHook from './core/MemoHook';
import PersonalHooks from './core/PersonalHooks';
import ReducerHook from './core/ReducerHook';

const routes = [
	{
		name: 'Home',
		key: 1,
		label: 'Home',
		path: '/',
		exact: true,
		color: '#e94560',
		component: () => <Home />
	},
	{
		name: 'useState',
		key: 2,
		label: 'State Hook',
		path: '/useState',
		color: '#0f3460',
		component: () => <StateHook />
	},
	{
		name: 'useReducer',
		key: 2,
		label: 'Reducer Hook',
		path: '/useReducer',
		color: '#0f3460',
		component: () => <ReducerHook />
	},
	{
		name: 'useEffect',
		key: 3,
		label: 'Effect Hook',
		path: '/useEffect',
		color: '#0f3460',
		component: () => <EffectHook />
	},
	{
		name: 'useContext',
		key: 4,
		label: 'Context Hook',
		path: '/useContext',
		color: '#0f3460',
		component: () => <ContextHook />
	},
	{
		name: 'useMemo',
		key: 5,
		label: 'Memo Hook',
		path: '/useMemo',
		color: '#0f3460',
		component: () => <MemoHook />
	},
	{
		name: 'useHook',
		key: 6,
		label: 'My Hooks',
		path: '/useHook',
		color: '#0f3460',
		component: () => <PersonalHooks />
	}
];

export default routes;
