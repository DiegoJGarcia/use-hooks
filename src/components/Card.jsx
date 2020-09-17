import React from 'react';
import './styles/Card.scss';

const Card = props => {
	return (
		<div
			className="card"
			onClick={props.onClick}
			style={{
				fontSize: props.fontSize,
				maxHeight: props.size,
				overflowY: props.noScroll ? 'hidden' : 'auto'
			}}
		>
			{props.children}
		</div>
	);
};

export default Card;
