import React, { useEffect, useState } from 'react';
import './styles/HooksViews.scss';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';

const EffectHook = () => {
	const [counter, setCounter] = useState(0);
	const [message, setMessage] = useState('');
	const [suscripciones, setSuscripciones] = useState([]);

	const [clean, setClean] = useState(true);

	useEffect(() => {
		setMessage('Esta es la primera vez que se monta el componente..');
		console.log('Este efecto se ejecutara solo esta vez');
	}, []);

	useEffect(() => {
		if (counter > 0) {
			setMessage('Las dependencias han cambiado..');
		}
		console.log('Cambio el contador');
	}, [counter]);

	useEffect(() => {
		setSuscripciones([...suscripciones, `Te has suscripto ${suscripciones.length} veces..`]);
		console.log('Cambio el contador o el mensaje');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [counter, message]);

	useEffect(() => {
		if (counter !== 0) setMessage('Vovlemos a empezar..');
		setSuscripciones([]);
		console.log('Cambio el estado de del limpiador');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [clean]);

	return (
		<div className="hooksViews">
			<div className="hooksViews_cards">
				<Card fontSize={40} onClick={() => setCounter(counter + 1)}>
					<h1>{counter}</h1>
				</Card>
				<Card>
					<h1>{message}</h1>
				</Card>
				<Card fontSize={5}>
					{suscripciones.map((dato, i) => (
						<h1 key={i}>{dato}</h1>
					))}
				</Card>
			</div>
			<Button onClick={() => setClean(!clean)}>¡Limpiar todo!</Button>
		</div>
	);
};

export default EffectHook;
