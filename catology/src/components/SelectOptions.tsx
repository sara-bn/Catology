import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { ValueType, ActionMeta } from 'react-select/src/types.js';
import axios from 'axios';
import { Cat } from '../Cat.model';
import { Link } from 'react-router-dom';

interface Breed {
	value: string;
	label: string;
}

interface BreedApiResponse {
	name: string;
	id: string;
}

const BASE_URL = 'https://api.thecatapi.com/v1/';
const SelectOptions: React.FC = () => {
	const [breeds, setBreeds] = useState<Breed[]>([]);
	const [breedId, setBreedId] = useState<string>('');
	const [catObject, setCatObject] = useState<Cat>({ breeds: [], id: '', url: '', width: 0, height: 0 });

	async function displayBreedOptions() {
		const response = await axios.get<BreedApiResponse[]>(BASE_URL + 'breeds');
		const newCategories = response.data;
		const selectorOptions: Breed[] = newCategories.map((category) => {
			return { value: category.id, label: category.name };
		});
		setBreeds(selectorOptions);
	}
	const displayResult = async (newValue: ValueType<Breed>, actionMeta: ActionMeta<Breed>) => {
		const selectedBreed = newValue as Breed;
		setBreedId(selectedBreed.value);
		const response = await axios.get<Cat[]>(`${BASE_URL}images/search?breed_ids=${breedId}`);
		const final = response.data[0];
		console.log(final)
		setCatObject(final);
	};

	useEffect(() => {
		displayBreedOptions();
	}, []);
	return (
		<div className="main">
			<div className="text">
				<h1>Cat World</h1>
				<h3>Please select the breed</h3>
			</div>
			<Select name="breeds" options={breeds} onChange={displayResult}></Select>
			<div className="result">
				<Link to={'/cats/' + catObject.url} key={catObject.url}>
					<img src={catObject.url} alt="cat"></img>
				</Link>
			</div>
		</div>
	);
};

export default SelectOptions;
