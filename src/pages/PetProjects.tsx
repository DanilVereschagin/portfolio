import { Link } from '../components/Link/Link';
import { memo } from 'react';
import {petProjects} from '../shared/constant/pet-projects';
import {LiquidGlassCard} from "../components/ui-layouts/LiquidGlassCard.tsx";

const PetProjects = memo(() => {
	return (
		<div className='mt-10 p-2'>
			<div className='flex flex-col gap-4 lg:items-center-safe'>
				{petProjects.map((project) => (
					<>
						<LiquidGlassCard
							key={project.id}
                            shadowIntensity='sm'
                            borderRadius='24px'
                            glowIntensity='none'
                            blurIntensity={"sm"}
							className='bg-white/8 rounded-xl p-4 flex flex-col md:flex-row gap-4 lg:w-[70%] lg:min-h-[33vh]'
						>
							<img
								className='w-full md:w-[50%] lg:w-[40%] z-100'
								src={project.image}
								alt=''
							/>
							<div className='bg-white md:w-0.5 z-100' />
							<div className='flex flex-col gap-4 justify-center lg:justify-center-safe p-2 lg:w-full z-100'>
								<h1 className='text-white text-2xl lg:text-5xl font-bold'>
									{project.title}
								</h1>
								<p className='text-white lg:text-2xl'>{project.description}</p>
								<p className='text-white lg:text-2xl'>
									Технологии: {project.technologies}
								</p>
								<Link
									className='text-center font-bold w-[120px]'
                                    linkClassName={'text-sm md:text-md lg:text-lg'}
									url={project.url}
									title='Перейти'
								/>
							</div>
						</LiquidGlassCard>
						<div className='bg-white h-0.5 md:h-0 ' />
					</>
				))}
			</div>
		</div>
	);
});

export default PetProjects;
