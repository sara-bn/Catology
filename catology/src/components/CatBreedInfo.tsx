import React from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Info } from '../Cat.model';
import Grid from '@material-ui/core/Grid';

const CatBreedInfo: React.FC = (props:any) => {
	const catUrl:string = props.location.state.cat.url
	const breedInfo:Info = props.location.state.cat.breeds[0]
	console.log(breedInfo)
	return (
		<div className="main">
			<Grid container spacing={0} direction="column" alignItems="center" justify="center"
							style={{ fontFamily: 'Luckiest Guy' }}>
				<Grid item>
				<img className="result-img" src={catUrl} alt="selected-cat"></img>
				</Grid>
				<Grid item>
					<Table>
						<TableRow>
							<TableCell variant="head">Origin</TableCell>
							<TableCell>{breedInfo.country_code}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell variant="head">Description</TableCell>
							<TableCell>{breedInfo.description}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell variant="head">Life Span</TableCell>
							<TableCell>{breedInfo.life_span}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell variant="head">Adaptability</TableCell>
							<TableCell>{breedInfo.adaptability}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell variant="head">Affection Level</TableCell>
							<TableCell>{breedInfo.affection_level}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell variant="head">Energy Level</TableCell>
							<TableCell>{breedInfo.energy_level}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell variant="head">Vocalisation</TableCell>
							<TableCell>{breedInfo.vocalisation}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell variant="head">Hairless</TableCell>
							<TableCell>{breedInfo.hairless}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell variant="head">Hypoallergenic</TableCell>
							<TableCell>{breedInfo.hypoallergenic}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell variant="head">Read more on Wikipedia</TableCell>
							<TableCell>{breedInfo.wikipedia_url}</TableCell>
						</TableRow>
					</Table>
				</Grid>
			</Grid>
		</div>
	);
};

export default CatBreedInfo;