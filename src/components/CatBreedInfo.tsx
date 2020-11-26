import React , {useState} from 'react';
import { Info } from '../Cat.model';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import  InfoTable  from './InfoTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolideHeart, faPaw } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';

const CatBreedInfo: React.FC = (props:any) => {

	const catUrl:string = props.location.state.cat.url;
	const breedInfo:Info = props.location.state.cat.breeds[0];
	const [favorite, setFavorite] = useState(false);
	const theme = createMuiTheme({
		typography: {
		fontSize: 24,
		fontFamily: [
			'Baloo 2',
			'cursive',
		].join(','),
		},});

	const addToFavorite = () => {
		setFavorite(true);
		const favorites =JSON.parse(localStorage.getItem('catPhotos')!)|| [];
			if (!favorites.find( (cat: { url: string; }) => cat.url === catUrl)){
				favorites.push({url:catUrl,name:breedInfo.name});
				localStorage.setItem('catPhotos',JSON.stringify(favorites))
			}
	}


	return (
		<div className="result-container">
			<div className="text">
			<FontAwesomeIcon icon={faPaw} size="3x" color="rgb(255, 123, 0)"/>
				<a href="/Favorite-List">Your Favorite List</a>
				<h1>{breedInfo.name}</h1>
				<FontAwesomeIcon className="heart" onClick={addToFavorite} icon={ favorite ? faSolideHeart: faRegularHeart} size="2x" color="red"/>
			</div>
			<ThemeProvider theme={theme}>
			<Grid container spacing={0} style={{ fontFamily: 'Luckiest Guy'}}>
				<Grid item md={12} lg={6}>
				<div className="img-container">
				<img className="select-result" src={catUrl} alt="selected-cat"></img>
				</div>
				</Grid>
				<Grid item md={12} lg={6}>
					<InfoTable {...props}/>
				</Grid>
			</Grid>
			</ThemeProvider>
		</div>
	);
};

export default CatBreedInfo;