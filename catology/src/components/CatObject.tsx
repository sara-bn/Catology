import React, { useState} from 'react';

const CatObject: React.FC = (props:any) => {
	const [meme, setMeme] = useState<string>('');
	const imgUlr=props.location.state.imgUrl;

	return (
		<div className="main">
			<div className="cat">
			   <img src={imgUlr} alt="cat"></img>	
			   <p>{meme}</p>	 	
		    </div>
			<div className="meme">
				<input type="text" value={meme} onChange={(e: React.FormEvent<HTMLInputElement>)=>setMeme(e.currentTarget.value)}></input>
			</div>

		</div>
	);
};

export default CatObject;
