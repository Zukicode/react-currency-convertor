import React, { useState } from 'react';

export const ListCurr = ({
	type,
	currencies,
	active,
	setActive,
	defaultCurrency,
	setDefaultCurrency,
}) => {
	//PopUp show
	const [isVisible, setVisible] = useState(false);
	const handleShowMoreCurr = () => setVisible(!isVisible);

	//Select Currency
	const handleActive = curr => {
		if (!defaultCurrency.includes(curr)) {
			setDefaultCurrency([curr, 'UAH', 'EUR']);
		}
		setActive({ ...active, [type]: curr });
	};

	return (
		<div className='h-1/5 flex items-center'>
			{defaultCurrency.map((curr, index) => (
				<div
					key={index}
					onClick={() => handleActive(curr)}
					className={curr === active[type] ? 'button active' : 'button'}
				>
					{curr}
				</div>
			))}
			<div onClick={handleShowMoreCurr} className='button relative'>
				<button>⌄</button>
				{isVisible && (
					<div className='w-full h-56 overflow-y-scroll bg-white absolute top-10 rounded-sm'>
						<ul className='flex flex-col'>
							{currencies.map(curr => (
								<li
									onClick={() => handleActive(curr)}
									key={curr}
									className={
										curr === active[type] ? 'buttonCurr active' : 'buttonCurr'
									}
								>
									{curr}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};
