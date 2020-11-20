import React from 'react';
import GridList from '@material-ui/core/GridList';

const FavoriteList: React.FC = () => {
    const imgUrls = JSON.parse(localStorage.getItem('catPhotos')!);
    console.log(imgUrls)
    return (
    <div className="main">
    <h1>Your Favorite List</h1>
    <div className="list-images">
        {imgUrls ?
            (<GridList cellHeight={300} cols={3}>
            {imgUrls.map((tile: string | undefined) => (
            <img src={tile} alt="favorite-cat"/>
            ))}
            </GridList>):
        <h2 className="text">Nothing added to favorite yet</h2>
        }
    </div>
	</div>
	);
};

export default FavoriteList;