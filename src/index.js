import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SimpleReactLightbox from 'simple-react-lightbox';

ReactDOM.render(
	<React.StrictMode>
		<SimpleReactLightbox>
			<App />
		</SimpleReactLightbox>
	</React.StrictMode>,
	document.getElementById('root')
);
