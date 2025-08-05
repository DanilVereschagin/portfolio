import React from 'react';
import type { projectType } from '../../../shared/types/types';

interface Props {
	tools: projectType['tools'];
	className?: string;
}

export const Tools: React.FC<Props> = ({ tools, className }) => {
	return (
		<div className={className}>
			<div className='flex flex-col flex-wrap justify-center gap-4'>
				{tools.map((tool) => (
					<div key={tool.title} className='flex flex-row gap-4'>
						<div
							className='bg-white min-w-[100px] w-[100px] h-[110px] 
						flex flex-col items-center p-3 rounded-xl
						shadow-xl/15 shadow-white hover:shadow-xl/30 
						transform '
						>
							<img
								width={90}
								height={90}
								src={'../' + tool.icon}
								alt={tool.title}
								loading='lazy'
							/>
							<b>{tool.title}</b>
						</div>
						<div
							className='w-full bg-white justify-center-safe text-lg md:text-2xl
						flex flex-col items-center text-center p-3 rounded-xl
						shadow-xl/15 shadow-white hover:shadow-xl/30 
						transform '
						>
							{tool.description}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
