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
		fontSize: 22,
		fontFamily: [
			'Baloo 2',
			'cursive',
		].join(','),
		},});

	const addToFavorite = () =>{
		setFavorite(!favorite);
		const favorites =JSON.parse(localStorage.getItem('catPhotos')!)|| [];
		favorites.push(catUrl);
		console.log(favorites);
		localStorage.setItem('catPhotos',JSON.stringify(favorites));
	}


	return (
		<div className="result-container">
			<div className="text">
				<FontAwesomeIcon icon={faPaw} size="2x" color="orange"/>
				<h1>{breedInfo.name}</h1>
			</div>
			<ThemeProvider theme={theme}>
			<Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ fontFamily: 'Luckiest Guy' }}>
				<Grid item>
				<div className="img-container">
				<img className="select-result" src={catUrl} alt="selected-cat"></img>
				<FontAwesomeIcon className="heart" onClick={addToFavorite} icon={ favorite ? faSolideHeart: faRegularHeart} size="3x" color="red"/>
				</div>
				</Grid>
				<Grid item style={{ width: "60%" }}>
					<InfoTable {...props}/>
				</Grid>
			</Grid>
			</ThemeProvider>
		</div>
	);
};

export default CatBreedInfo;