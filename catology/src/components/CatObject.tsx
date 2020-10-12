import React, { useState} from 'react';

const CatObject: React.FC = (props:any) => {
	const [meme, setMeme] = useState<string>('');
	const imgUrl=props.location.state.imgUrl;

	function handleDownolad() {
		const svg = document.getElementById("svg"); 
		if(svg!==null){
			let svgData = new XMLSerializer().serializeToString(svg);
			var canvas = document.createElement( "canvas" );
			var ctx = canvas.getContext( "2d" );
			var img = document.createElement( "img" );
			img.setAttribute( "src", "data:image/svg+xml;base64," + btoa( svgData ) );
				img.onload = function() {
					if(ctx!==null){
					ctx.drawImage( img, 0, 0 );
					const canvasdata = canvas.toDataURL("image/png");
					console.log(canvas)
					const a = document.createElement("a");
					a.download = "meme.png";
					a.href = canvasdata;
					document.body.appendChild(a);
					a.click();
					}
				}
			}
		}
	return (
		<div className="main">
			<div className="input">
			<input className="input-text" type="text" value={meme} onChange={(e: React.FormEvent<HTMLInputElement>)=>setMeme(e.currentTarget.value)}></input>
			</div>			
			<div className="meme">
			<svg id="svg" width="600" height="400" xmlns="http://www.w3.org/2000/svg"
              >       
               <image href={imgUrl} width="600" height="400"  />
			   <text className="meme-text" x="50%" y="90%" dominant-baseline="middle" text-anchor="middle">{meme}</text>  
            </svg>
			</div>
			<div>
			<button className="download-button" onClick={handleDownolad} >Download Meme</button>
			</div>
			
		</div>
	);
};

export default CatObject;
