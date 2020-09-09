import React from 'react';
interface CatProps {
	id: string;
}
const CatObject: React.FC<CatProps> = (props) => {
	// const [meme, setMeme] = useState<string>('');
	console.log(props);

	return (
		<div className="cat">
			<img src={props.id} alt="cat"></img>
		</div>
	);
};

export default CatObject;
