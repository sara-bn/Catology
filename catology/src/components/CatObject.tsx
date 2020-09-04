import React from 'react';
import { Cat } from '../Cat.model';
interface CatProps {
	cat: Cat;
}
const CatObject: React.FC<CatProps> = (props) => {
	return (
		<div className="result">
			<img src={props.cat.url} alt="cat-image"></img>
			<h3>Name:</h3>
			<h3>Origin:</h3>
			<p></p>
		</div>
	);
};

export default CatObject;
