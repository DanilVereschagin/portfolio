export type skillType = {
	id: number;
	title: string;
	level: string;
	icon: string;
	type: string;
};

export type levelType = {
	en: string;
	ru: string;
};

export type typeType =
	| 'frontend'
	| 'backend'
	| 'devtools'
	| 'database'
	| 'language';

export type projectType = {
	id: number;
	title: string;
	description: string;
	image: string;
	url: string;
	github: string;
	tools: {
		title: string;
		description: string;
		icon: string;
	}[];
	images_gallery: string;
};
