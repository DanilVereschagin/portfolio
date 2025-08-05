import React from 'react';
import type { projectType } from '../../../shared/types/types';

interface Props {
	images: projectType['images_gallery'];
	className?: string;
}

export const Images: React.FC<Props> = ({ images, className }) => {
	return (
		<div className={className}>
			<div className='flex flex-col flex-wrap justify-center gap-4'>
				{images.map((image) => (
					<div key={image.url} className='flex flex-row gap-4'>
						<img
							className='w-full md:w-[50%] rounded-2xl'
							src={'../' + image.url}
							alt=''
							loading='lazy'
						/>
						<div className='hidden md:flex bg-white text-lg lg:text-xl text-center w-full rounded-2xl p-2 justify-center items-center-safe'>
							{image.description}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
