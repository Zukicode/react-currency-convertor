import React from 'react';
import ReactDOM from 'react-dom/client';

//Styles
import './styles/global.scss';

//Components
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
