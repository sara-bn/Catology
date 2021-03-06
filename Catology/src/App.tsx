import React from 'react';
import SelectOptions from './components/SelectOptions';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CatBreedInfo from './components/CatBreedInfo';
import FavoriteList from './components/FavoriteList';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={SelectOptions} />
				<Route path="/breed-info" component={CatBreedInfo}/>
				<Route path="/Favorite-List" component={FavoriteList}/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
