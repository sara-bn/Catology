export interface Cat {
	id: string;
	url: string;
	breeds: Info[];
}
export interface Info{
	name:string;
	origin:string;
	description:string;
	life_span:string;
	wikipedia_url: string;
	adaptability: number;
	affection_level: number;
	energy_level: number;
	hairless: number;
	hypoallergenic: number;
	vocalisation:number;
}