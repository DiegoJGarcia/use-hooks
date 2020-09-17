import React from 'react';
import './styles/Input.scss';

const Input = props => {
	return (
		<input
			className="input"
			type={props.type || 'text'}
			name={props.name}
			value={props.value}
			onChange={e => props.onChange(e)}
			placeholder={props.placeholder}
		/>
	);
};

export default Input;
