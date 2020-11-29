import React , {useState} from 'react';
import { Info } from '../Cat.model';
import  InfoTable  from './InfoTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolideHeart, faPaw } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';

const CatBreedInfo: React.FC = (props:any) => {
	const catUrl:string = props.location.state.cat.url;
	const breedInfo:Info = props.location.state.cat.breeds[0];
	const [favorite, setFavorite] = useState(false);

	const addToFavorite = () => {
		setFavorite(true);
		const favorites =JSON.parse(localStorage.getItem('catPhotos')!)|| [];
			if (!favorites.find( (cat: { url: string; }) => cat.url === catUrl)){
				favorites.push({url:catUrl,name:breedInfo.name});
				localStorage.setItem('catPhotos',JSON.stringify(favorites))
			}
	}

	return (
			<div className="main">
				<div className="text">
				<FontAwesomeIcon icon={faPaw} size="3x" color="rgb(255, 0, 191)"/>
					<a href="/Favorite-List">Your Favorite List</a>
					<h1>{breedInfo.name}</h1>
					<FontAwesomeIcon className="heart" onClick={addToFavorite} icon={ favorite ? faSolideHeart: faRegularHeart} size="2x" color="red"/>
					<img className="select-result" src={catUrl} alt="selected-cat"></img>
				</div>
				<div className="result">
					<InfoTable {...props}/>
				</div>
			</div>
	);
};

export default CatBreedInfo;