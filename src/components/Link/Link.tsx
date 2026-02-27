import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../../shared/lib/utils';

interface Props {
	url: string;
	title?: string;
	className?: string;
}

export const Link: React.FC<Props> = ({ url, title, className }) => {
	return (
		<NavLink
			to={url}
			className={cn(
				'text-sm md:text-lg p-2 border shadow-xl/30 hover:bg-transparent hover:text-white hover:shadow-none',
				className
			)}
		>
			{title}
		</NavLink>
	);
};
