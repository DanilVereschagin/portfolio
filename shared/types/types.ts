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
