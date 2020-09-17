import React, { useReducer } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';

const ReducerHook = () => {
	const reducerCounter = (counter, action) => {
		switch (action) {
			case 'add':
				return counter + 1;
			case 'sus':
				return counter - 1;
			case 'clean':
				return 0;
			default:
				alert('Ha ocurrido un error feo, y lo muestro feamente.');
				break;
		}
	};
	const reducerStringer = (stringer, action) => {
		if (action.length === 0) {
			return 'Al menos debe haber un caracter';
		} else {
			return action;
		}
	};

	const [counter, dispatchCounter] = useReducer(reducerCounter, 0);
	const [stringer, dispatchStringer] = useReducer(reducerStringer, 'asd');

	const cleanAll = () => {
		dispatchCounter('clean');
		dispatchStringer('asd');
	};

	return (
		<div className="hooksViews">
			<div className="hooksViews_cards">
				<Card fontSize={40}>
					<h1>{counter}</h1>
					<button onClick={() => dispatchCounter('add')}>ADD</button>
					<button onClick={() => dispatchCounter('sus')}>SUS</button>
				</Card>
				<Card>
					<h1>{stringer}</h1>
					<Input
						value={stringer}
						onChange={e => dispatchStringer(e.target.value)}
						placeholder="Has el intento.."
					/>
				</Card>
			</div>
			<Button onClick={() => cleanAll()}>¡Limpiar todo!</Button>
		</div>
	);
};

export default ReducerHook;
