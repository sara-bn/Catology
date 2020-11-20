import React from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Info } from '../Cat.model';

const InfoTable: React.FC = (props:any) => {
    const breedInfo:Info = props.location.state.cat.breeds[0];
	return (
		<Table>						
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
		</Table> 
	);
};

export default InfoTable;