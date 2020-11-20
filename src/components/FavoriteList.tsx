import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const FavoriteList: React.FC = () => {
    const favImages = JSON.parse(localStorage.getItem('catPhotos')!);

    interface Img {
        url: string;
        name: string;
    }

    return (
    <div  className="result-container">
    <h1>Your Favorite List</h1>
    <div className="list-images">
        {favImages ?
            (<GridList cellHeight={300} cols={3}>
            {favImages.map((tile:Img) => (
                <GridListTile key={tile.url}>
                    <img src={tile.url} alt="favorite-cat"/>
                    <GridListTileBar
                    title={tile.name}/>
                    </GridListTile>
        ))}
    </GridList>)
        : <h2 className="text">Nothing added to favorite yet</h2>
        }
    </div>
	</div>
	);
};

export default FavoriteList;