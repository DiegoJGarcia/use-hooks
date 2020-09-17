import React, { memo, useEffect } from 'react';
import './styles/Card.scss';

const Card = props => {
	useEffect(() => console.log('Se renderizó la lista..'));
	return (
		<div>
			{props.items.map(item => (
				<p key={item.id}>
					{item.id}
					{'  '}
					{item.text}
				</p>
			))}
		</div>
	);
};

export default Card;
//export default memo(Card);
