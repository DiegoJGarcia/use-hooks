import React, { useState } from 'react';
import './styles/HooksViews.scss';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';

const StateHook = () => {
	const [counter, setCounter] = useState(0);
	const [stringer, setStringer] = useState('asd');
	const [arrayer, setArrayer] = useState([]);
	const [objeter, setObjeter] = useState({
		objetoUno: 'Uno',
		objetoDos: 'Dos'
	});

	const cleanAll = () => {
		setCounter(0);
		setStringer('asd');
		setArrayer([]);
		setObjeter({
			objetoUno: 'Uno',
			objetoDos: 'Dos'
		});
	};

	return (
		<div className="hooksViews">
			<div className="hooksViews_cards">
				<Card fontSize={40} onClick={() => setCounter(counter + 1)}>
					<h1>{counter}</h1>
				</Card>
				<Card>
					<h1>{stringer}</h1>
					<Input
						value={stringer}
						onChange={e => setStringer(e.target.value)}
						placeholder="Has el intento.."
					/>
				</Card>
				<Card
					fontSize={5}
					onClick={() =>
						setArrayer(state => [...state, `Tu historial de clicks es de ${arrayer.length} veces!`])
					}
				>
					{arrayer.map((dato, i) => (
						<h1 key={i}>{dato}</h1>
					))}
				</Card>
				<Card fontSize={10}>
					<h1>{objeter.objetoUno}</h1>
					<h1>{objeter.objetoDos}</h1>
					<Input
						name="objetoUno"
						value={objeter.objetoUno}
						onChange={e => setObjeter({ ...objeter, [e.target.name]: e.target.value })}
						placeholder="Ahora con el un objeto.."
					/>
					<Input
						name="objetoDos"
						value={objeter.objetoDos}
						onChange={e => setObjeter({ ...objeter, [e.target.name]: e.target.value })}
						placeholder="Nuevamente, con el mismo objeto.."
					/>
				</Card>
			</div>
			<Button onClick={() => cleanAll()}>¡Limpiar todo!</Button>
		</div>
	);
};

export default StateHook;
