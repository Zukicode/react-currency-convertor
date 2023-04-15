import React, { useEffect, useState } from 'react';

//Components
import { ListCurr } from './../ListCurr/ListCurr';
import { Enter } from './../Enter/Enter';

//API
import { BASE_URL } from '../../utils/constant';

function App() {
	const [defaultCurrencyFrom, setDefaultCurrencyFrom] = useState([
		'USD',
		'UAH',
		'EUR',
	]);
	const [defaultCurrencyTo, setDefaultCurrencyTo] = useState([
		'USD',
		'UAH',
		'EUR',
	]);
	const [currencies, setCurrencies] = useState([]);

	const [active, setActive] = useState({
		from: 'USD',
		to: 'UAH',
	});

	const [changeFrom, setChangeFrom] = useState('1');
	const [changeTo, setChangeTo] = useState('');

	useEffect(() => {
		fetch(BASE_URL)
			.then(res => res.json())
			.then(data => setCurrencies(Object.keys(data.rates)));
	}, []);

	useEffect(() => {
		fetch(
			`https://api.exchangerate.host/convert?from=${active.from}&to=${active.to}&amount=${changeFrom}`
		)
			.then(res => res.json())
			.then(data => setChangeTo(data.result.toFixed(2)));
	}, [changeTo, changeFrom, active.from, active.to]);

	return (
		<div className='w-full h-full p-3 flex flex-col items-center justify-center gap-5 bg-white rounded-md lg:flex-row'>
			<div className='currency'>
				<ListCurr
					type='from'
					currencies={currencies}
					active={active}
					setActive={setActive}
					defaultCurrency={defaultCurrencyFrom}
					setDefaultCurrency={setDefaultCurrencyFrom}
				/>
				<Enter
					type={'from'}
					active={active}
					change={changeFrom}
					setChange={setChangeFrom}
				/>
			</div>

			<div className='currency'>
				<ListCurr
					type='to'
					currencies={currencies}
					active={active}
					setActive={setActive}
					defaultCurrency={defaultCurrencyTo}
					setDefaultCurrency={setDefaultCurrencyTo}
				/>
				<Enter
					type={'to'}
					active={active}
					change={changeTo}
					setChange={setChangeTo}
				/>
			</div>
		</div>
	);
}

export default App;
