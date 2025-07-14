import React from 'react';

interface Props {
	url?: string;
	title?: string;
}

export const Link: React.FC<Props> = ({ url, title }) => {
	return (
		<a
			href={url}
			className='p-2 text-lg border border-fuchsia-400 rounded-xl bg-gradient-to-r from-fuchsia-400/20 to-purple-700/30 bg-fuchsia-400 text-black shadow-xl/30 shadow-purple-400 hover:bg-transparent hover:text-white hover:shadow-none'
		>
			{title}
		</a>
	);
};
