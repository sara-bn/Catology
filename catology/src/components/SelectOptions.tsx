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
	const [catObject, setCatObject] = useState<Cat>({id: '', url: ''});

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
		<div className="main">
			<div className="text">
				<h1>Cat World</h1>
				<h3>Please select the breed</h3>
			</div>
			<Select className="select" name="breeds" options={breeds} onChange={displayResult}></Select>
				{catObject.url.length>1 &&
				<div className="result">
					<Link to={{pathname:'/cats/' , state:{imgUrl:catObject.url}}}>
						<img className="select-result" src={catObject.url} alt="cat"></img>
				   </Link>
			    </div>
				}

		</div>
	);
};

export default SelectOptions;
