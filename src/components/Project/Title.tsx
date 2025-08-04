import React from 'react';
import { cn } from '../../../shared/lib/utils';

interface Props {
	name: string;
	description: string;
	github: string;
	className?: string;
}

export const Title: React.FC<Props> = ({
	name,
	description,
	github,
	className,
}) => {
	return (
		<div className={cn('flex flex-col gap-4 items-center w-full', className)}>
			<h1 className='text-4xl font-bold text-white'>{name}</h1>
			<div className='w-[80%] md:w-[60%] lg:w-[20%] h-1 bg-purple-400'></div>
			<h1 className='lg:w-[30%] text-white text-center text-xl'>
				{description}
			</h1>
			<a
				href={github}
				target='_blank'
				className='lg:w-[30%] text-purple-400 text-center mr-3 text-xl'
			>
				Код на GitHub
			</a>
		</div>
	);
};
