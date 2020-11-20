import React from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import { Info } from '../Cat.model';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

const InfoTable: React.FC = (props:any) => {

    const breedInfo:Info = props.location.state.cat.breeds[0];
    const StyledRating = withStyles({
        iconFilled: {
        color:  "rgb(255, 123, 0)",
        },
    })(Rating);

	return (
		<Table>	
            <TableBody>					
                <TableRow>
                    <TableCell variant="head">Origin</TableCell>
                    <TableCell>{breedInfo.origin}</TableCell>
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
                    <TableCell>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <StyledRating
                        readOnly={true}
                        defaultValue={breedInfo.adaptability}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        />
                    </Box>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell variant="head">Affection Level</TableCell>
                    <TableCell>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <StyledRating
                        readOnly={true}
                        defaultValue={breedInfo.affection_level}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        />
                    </Box>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell variant="head">Energy Level</TableCell>
                    <TableCell>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <StyledRating
                        name="customized-color"
                        readOnly={true}
                        defaultValue={breedInfo.energy_level}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        />
                    </Box>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell variant="head">Vocalisation</TableCell>
                    <TableCell>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <StyledRating
                        readOnly={true}
                        defaultValue={breedInfo.vocalisation}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        />
                    </Box>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell variant="head">Hairless</TableCell>
                    <TableCell>{breedInfo.hairless? "Yes":"No"}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell variant="head">Hypoallergenic</TableCell>
                    <TableCell>{breedInfo.hypoallergenic? "Yes":"No"}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell variant="head">Read more on Wikipedia</TableCell>
                    <TableCell><a rel={'external'} href={breedInfo.wikipedia_url}>{breedInfo.wikipedia_url}</a></TableCell>
                </TableRow>
            </TableBody>
		</Table> 
	);
};

export default InfoTable;