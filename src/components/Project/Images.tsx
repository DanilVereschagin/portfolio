import React, {Fragment} from 'react';
import type { projectType } from '../../shared/types/types';

interface Props {
	images: projectType['images_gallery'];
	className?: string;
}

export const Images: React.FC<Props> = ({ images }) => {
	return (
		<Fragment>
				{images.map((image) => (
					<Fragment key={image.url}>
                        { image.url && (
                            <img
                                className='rounded-2xl'
                                src={image.url}
                                alt=''
                                loading='lazy'
                            />
                        )}

						<div className='hidden md:flex bg-white text-lg lg:text-xl text-center rounded-2xl p-2 justify-center items-center-safe'>
							{image.description}
						</div>
					</Fragment>
				))}
		</Fragment>
	);
};
