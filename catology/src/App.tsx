import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

interface Breed {
	value: string;
	label: string;
}

interface ApiResponse {
	name: string;
	id: string;
}

const App: React.FC = () => {
	const [breeds, setBreeds] = useState<Breed[]>([]);

	async function displayBreeds() {
		const url = 'https://api.thecatapi.com/v1/breeds';
		const response = await axios.get<ApiResponse[]>(url);
		const newCategories = response.data;
		const selectorOptions: Breed[] = newCategories.map((category) => {
			return { value: category.id, label: category.name };
		});
		console.log(selectorOptions);
		setBreeds(selectorOptions);
	}

	useEffect(() => {
		displayBreeds();
	}, []);
	return (
		<div className="app">
			<div className="text">
				<h1>Cat World</h1>
				<h3>Please select the breed</h3>
			</div>
			<div className="select">
				<Select name="breeds" options={breeds}></Select>
			</div>
		</div>
	);
};

export default App;
