import React from 'react';
import Button from './Button';
import Card from './Card';
import './styles/Dialog.scss';

const Dialog = props => {
	return (
		props.show && (
			<div className="dialog">
				{props.title}
				<Card onClick={props.clickAceptar}>{props.children}</Card>
			</div>
		)
	);
};

export default Dialog;
