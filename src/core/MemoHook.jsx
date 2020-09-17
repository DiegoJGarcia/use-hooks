import React, { useEffect, useMemo, useState } from 'react';
import './styles/HooksViews.scss';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import List from '../components/List';

const MemoHook = () => {
	const [items, setItems] = useState([{ id: 1, text: 'Primer Item' }]);
	const [input, setInput] = useState('');
	const [searcher, setSearcher] = useState('');

	useEffect(() => console.log('Se renderizó el componente..'));

	const addItem = () => {
		let newItem = { id: items.length + 1, text: input };
		setItems([...items, newItem]);
	};

	//const changeData = useMemo(() => {}, []);

	const filteredItems = useMemo(() => {
		console.log('Filtrando..');
		return items.filter(item => item.text.includes(searcher));
	}, []);
	// }, [searcher, items]);

	const cleanAll = () => {
		setInput('');
		setSearcher('');
		setItems([]);
	};

	return (
		<div className="hooksViews">
			<div className="hooksViews_cards">
				<Card>
					<Input value={input} onChange={e => setInput(e.target.value)} placeholder="Agrega algo" />
					<Button onClick={() => addItem()}>Agregar</Button>
					<Input
						value={searcher}
						onChange={e => setSearcher(e.target.value)}
						placeholder="Busca algo.."
					/>
				</Card>
				<Card>
					<List items={filteredItems} />
				</Card>
			</div>
			<Button onClick={() => cleanAll()}>¡Limpiar todo!</Button>
		</div>
	);
};
export default MemoHook;
