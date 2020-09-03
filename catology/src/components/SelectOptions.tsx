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

const SelectOptions: React.FC = () => {
	const [breeds, setBreeds] = useState<Breed[]>([]);

	async function displayBreeds() {
		const url = 'https://api.thecatapi.com/v1/breeds';
		const response = await axios.get<ApiResponse[]>(url);
		const newCategories = response.data;
		const selectorOptions: Breed[] = newCategories.map((category) => {
			return { value: category.id, label: category.name };
		});
		setBreeds(selectorOptions);
	}

	useEffect(() => {
		displayBreeds();
	}, []);
	return (
		<div className="select">
			<Select name="breeds" options={breeds}></Select>
		</div>
	);
};

export default SelectOptions;
