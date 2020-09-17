import React, { useState } from 'react';
import './styles/HooksViews.scss';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import Dialog from '../components/Dialog';
import { useModal } from '../hooks/useModal';
import { useRoute } from '../hooks/useRoute';

const PersonalHooks = () => {
	const [openDialog, toggleDialog, dataDialog] = useModal();
	const [data, setData] = useState('');

	const route = useRoute('all');
	console.log(route);

	const cleanAll = () => {
		setData('');
	};

	return (
		<div className="hooksViews">
			<div className="hooksViews_cards">
				<Dialog show={openDialog} aceptar="Ya cierralo" clickAceptar={() => toggleDialog()}>
					<h1>{dataDialog}</h1>
				</Dialog>
				<Card>
					<Input
						name="dialogInput"
						value={data}
						onChange={e => setData(e.target.value)}
						placeholder="Modifica los datos del modal.."
					/>
					<Button onClick={() => toggleDialog(data)}>¡Muestramelo en un modal!</Button>
				</Card>
				<Card>{route.pathname}</Card>
			</div>
			<Button onClick={() => cleanAll()}>¡Limpiar todo!</Button>
		</div>
	);
};

export default PersonalHooks;
