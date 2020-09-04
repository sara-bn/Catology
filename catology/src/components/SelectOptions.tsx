import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { ValueType, ActionMeta } from 'react-select/src/types.js';
import axios from 'axios';
import CatObject from './CatObject';
import { Cat } from '../Cat.model';

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
		setCatObject(final);
	};

	useEffect(() => {
		displayBreedOptions();
	}, []);
	return (
		<div>
			<div className="select">
				<Select name="breeds" options={breeds} onChange={displayResult}></Select>
			</div>
			<CatObject cat={catObject} />
		</div>
	);
};

export default SelectOptions;
