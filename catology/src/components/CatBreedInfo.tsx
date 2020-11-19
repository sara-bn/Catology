import React, { useState} from 'react';

const CatBreedInfo: React.FC = (props:any) => {
	const [meme, setMeme] = useState<string>('');
	const imgUrl=props.location.state.imgUrl;
	return (
		<div>
            <h1>
                 Hello
            </h1>
		</div>
	);
};

export default CatBreedInfo;