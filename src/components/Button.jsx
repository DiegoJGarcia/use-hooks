import React from 'react';
import './styles/Button.scss';
import homeicon from './styles/homeicon.svg';

const Button = props => {
	return (
		<button
			className="button"
			style={props.circle ? { borderRadius: '50px', width: '50px', height: '50px' } : null}
			disabled={props.disabled}
			type="button"
			onClick={() => props.onClick()}
		>
			{props.circle ? (
				<img src={homeicon} alt="home_icon" style={{ width: '28px', height: '28px' }} />
			) : (
				props.children
			)}
		</button>
	);
};

export default Button;
