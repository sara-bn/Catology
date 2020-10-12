import React from 'react';
import Select from 'react-select';
import { ValueType} from 'react-select/src/types.js';
import axios from 'axios';
import { Cat } from '../Cat.model';
import { Link } from 'react-router-dom';

interface Breed {
	value: string;
	label: string;
}

interface IState {
	BreedArray: Breed[];
	breedId:string,
	catObj:Cat
}

interface BreedApiResponse {
	name: string;
	id: string;
}

const BASE_URL = 'https://api.thecatapi.com/v1/';

class SelectOptions extends React.Component<any, IState> {
	constructor(props: any){
		super(props);
		this.state = {
			BreedArray:[{value:'', label:''}],	
			breedId:'',
			catObj: {id:'', url:''}	
	  };
	};
	   componentDidMount(){
	   this.displayBreedOptions();
	  };

	  displayBreedOptions = async()=>{
	  const response = await axios.get<BreedApiResponse[]>(BASE_URL + 'breeds');
	  const newCategories = response.data;
	  const selectorOptions: any[] = newCategories.map((category) => {
		  return { value: category.id, label: category.name };
	  });
	  this.setState({BreedArray:selectorOptions})	
	}

	displayResult = (newValue: ValueType<Breed>)=>{
		const selectedBreed = newValue as Breed;
		this.setState({breedId:selectedBreed.value}, () =>{		 
			this.fetchCatResult()
		});
	}

	fetchCatResult= async()=>{
	    const anotherResponse = await axios.get(`${BASE_URL}images/search?breed_ids=${this.state.breedId}`);
		const final = anotherResponse.data[0];
		this.setState({catObj:final});
	  }
	  	
	render(){
		return(
		<div className="main">
			<div className="text">
				<h1>Cat World</h1>
				<h3>Please select the breed</h3>
			</div>
			<Select className="select" name="breeds" options={this.state.BreedArray} onChange={this.displayResult}></Select>
			{this.state.catObj.url.length>1 &&
				<div className="result">
					<Link to={{pathname:'/cats/' , state:{imgUrl:this.state.catObj.url}}}>
						<img className="select-result" src={this.state.catObj.url} alt="cat"></img>
				   </Link> 
		</div>}
		</div>
		)
	}

}
export default SelectOptions;
