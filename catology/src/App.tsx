import React from 'react';
import SelectOptions from './components/SelectOptions';

const App: React.FC = () => {
	return (
		<div className="app">
			<div className="text">
				<h1>Cat World</h1>
				<h3>Please select the breed</h3>
			</div>
			<div className="select">
				<SelectOptions />
			</div>
		</div>
	);
};

export default App;
