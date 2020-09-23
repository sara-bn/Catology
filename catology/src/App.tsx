import React from 'react';
import SelectOptions from './components/SelectOptions';
import Login from './components/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CatObject from './components/CatObject';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={SelectOptions} />
				<Route exact path="/login" component={Login} />
				<Route path="/cats/:id" component={CatObject}></Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
