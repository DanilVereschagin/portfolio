import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
	url: string;
	title?: string;
}

export const Link: React.FC<Props> = ({ url, title }) => {
	return (
		<NavLink
			to={url}
			className='p-2 text-lg border border-fuchsia-400 rounded-xl 
			
			 bg-white text-black shadow-xl/30 shadow-purple-400 
			 hover:bg-transparent hover:text-white hover:shadow-none'
		>
			{title}
		</NavLink>
	);
};
