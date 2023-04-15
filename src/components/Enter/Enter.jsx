import React from 'react';

export const Enter = ({ type, active, change, setChange }) => {
	const onChangeInput = e => {
		setChange(e.target.value);
	};

	return (
		<textarea
			placeholder={active[type]}
			className='border rounded-md p-5 text-lg resize-none h-full'
			value={change}
			onChange={onChangeInput}
		></textarea>
	);
};
